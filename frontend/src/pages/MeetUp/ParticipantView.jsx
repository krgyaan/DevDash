import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

function ParticipantView(props) {
  const webcamRef = useRef()
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

    useEffect(() => {
      if (webcamRef.current) {
        if (webcamOn && webcamStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(webcamStream.track);
  
          webcamRef.current.srcObject = mediaStream;
          webcamRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          webcamRef.current.srcObject = null;
        }
      }
    }, [webcamStream, webcamOn]);

  useEffect(() => {
   
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    // < className='bg-gray-600 rounded-xl box-border overflow-hidden relative object-cover' style={{ width: 'auto', height: '100%' }}>
      <> 
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
      
         <video className='w-full h-full object-cover rounded-xl rotate-90' ref={webcamRef} autoPlay></video>
        
      )}
    
      </> 
  
  );
}


export default ParticipantView