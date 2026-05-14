import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-text">
          <h2>How Planetary Data Helps Us Understand Space</h2>
          <p>
            Planetary science goes beyond images. Comparing mass, diameter, gravity, and density, we gain insight into how planets form, behave, and interact within the solar system.
          </p>
        </div>
        <div className="video-wrapper">
          <video 
            controls 
            poster="https://plus.unsplash.com/premium_photo-1679526019549-ffba4f2db233?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbmV0c3xlbnwwfHwwfHx8MA%3D%3D" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/45015/45015-720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;