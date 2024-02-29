import React, { useEffect, useRef } from 'react';

function VideoCompo({people}) {
  const ref = useRef();
  useEffect(() => {
    people.videoTrack.play(ref.current);
  }, []);
  return (
        <div>
          Uid: {people.uid}
          <div
            ref={ref}
            style={{ width: '200px', height: '200px' }}
          ></div>
        </div>
      );
    };  


export default VideoCompo