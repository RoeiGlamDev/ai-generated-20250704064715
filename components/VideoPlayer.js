import React from 'react';

function VideoPlayer({ src, thumbnail, duration }) {
  return (
    <div className="bg-black p-4">
      <video
        src={src}
        poster={thumbnail}
        controls
        className="object-cover h-64 w-full mb-4"
      />
      <h2 className="text-xl font-bold text-gold mb-2">Video Title</h2>
      <p className="text-gray-400">Video description</p>
      <p className="text-gray-400">Duration: {duration}</p>
    </div>
  );
}

export default VideoPlayer;