// components/AudioPlayer.js
import React from 'react';

const AudioPlayer = () => {
  return (
    <div 
        style={
            {position: 'fixed', 
                bottom : '10px', 
                right: '10px', 
                zIndex: 1000, 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',}}>
      <audio controls autoPlay>
        <source src="/audio/back_sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

// const styles = {
//   audioContainer: {
//     position: 'fixed',
//     bottom: '10px',
//     right: '10px',
//     zIndex: 1000,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: '10px',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
// };

export default AudioPlayer;