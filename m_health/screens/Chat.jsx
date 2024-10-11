import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useRef } from 'react';
import  {
  
  TwilioVideoParticipantView
} from 'react-native-twilio-video-webrtc';
import { TwilioVideoLocalView } from 'react-native-twilio-video-webrtc';

const Chat = () => {
  const [roomName, setRoomName] = useState('');
  const [participants, setParticipants] = useState(new Map());
  const twilioRef = useRef(null);

  const startRoom = async () => {
    try {
      // fetch an Access Token from the join-room route
      const response = await fetch("/join-room", {
        method: "POST",
        headers: {
          Accept: "application/javascript",
          "Content-Type": "application/javascript",
        },
        body: JSON.stringify({ roomName: roomName }),
      });
      const { token } = await response.json();

      // join the video room with the token
      const room = await joinVideoRoom(roomName, token);

      // handle the local participant
      handleConnectedParticipant(room.localParticipant);
      
      // handle existing participants
      room.participants.forEach(handleConnectedParticipant);
      
      // handle participant connections and disconnections
      twilioRef.current.on("participantConnected", handleConnectedParticipant);
      twilioRef.current.on("participantDisconnected", handleDisconnectedParticipant);
    } catch (error) {
      console.error('Error starting room:', error);
    }
  };

  const handleConnectedParticipant = (participant) => {
    setParticipants(prevParticipants => {
      const newParticipants = new Map(prevParticipants);
      newParticipants.set(participant.identity, {
        identity: participant.identity,
        videoTrackSid: null
      });
      return newParticipants;
    });

    // handle existing tracks
    participant.tracks.forEach((trackPublication) => {
      handleTrackPublication(trackPublication, participant);
    });

    // listen for any new track publications
    participant.on("trackPublished", publication => 
      handleTrackPublication(publication, participant)
    );
  };

  const handleTrackPublication = (trackPublication, participant) => {
    if (trackPublication.track) {
      displayTrack(trackPublication.track, participant);
    }

    trackPublication.on("subscribed", track => {
      displayTrack(track, participant);
    });
  };

  const displayTrack = (track, participant) => {
    if (track.kind === 'video') {
      setParticipants(prevParticipants => {
        const newParticipants = new Map(prevParticipants);
        const participantRecord = newParticipants.get(participant.identity);
        if (participantRecord) {
          participantRecord.videoTrackSid = track.sid;
          newParticipants.set(participant.identity, participantRecord);
        }
        return newParticipants;
      });
    }
  };

  const handleDisconnectedParticipant = (participant) => {
    setParticipants(prevParticipants => {
      const newParticipants = new Map(prevParticipants);
      newParticipants.delete(participant.identity);
      return newParticipants;
    });
  };

  const joinVideoRoom = async (roomName, token) => {
    try {
      if (twilioRef.current) {
        const room = await twilioRef.current.connect({
          roomName: roomName,
          accessToken: token
        });
        return room;
      }
    } catch (error) {
      console.error('Error joining video room:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a Room Name to join"
          value={roomName}
          onChangeText={setRoomName}
        />
        <Button title="Join Room" onPress={startRoom} />
      </View>

      <View style={styles.videoContainer}>
        <TwilioVideoLocalView
          enabled={true}
          style={styles.localVideo}
        />
        {Array.from(participants.values()).map(participant => (
          participant.videoTrackSid && (
            <TwilioVideoParticipantView
              key={participant.identity}
              style={styles.remoteVideo}
              trackIdentifier={participant.videoTrackSid}
            />
          )
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  videoContainer: {
    flex: 1,
  },
  localVideo: {
    flex: 1,
    width: 150,
    height: 200,
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 2,
  },
  remoteVideo: {
    flex: 1,
  },
});

export default Chat;