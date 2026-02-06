import React, { useRef, useState } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handlePlaybackRateChange = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="video-player">
      <div className="video-container">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnail}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="video-element"
        />
        
        <div className="video-controls">
          <div className="control-section">
            <button className="control-btn" onClick={togglePlay}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <div className="time-controls">
              <span className="time-display">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={videoRef.current ? videoRef.current.duration || 0 : 0}
                value={currentTime}
                onChange={handleSeek}
                className="seek-slider"
              />
              <span className="time-display">
                {videoRef.current ? formatTime(videoRef.current.duration || 0) : '0:00'}
              </span>
            </div>
            
            <div className="volume-control">
              <span>🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
            
            <div className="playback-controls">
              <span>Kecepatan: </span>
              {[1, 1.25, 1.5, 2].map(rate => (
                <button
                  key={rate}
                  className={`playback-btn ${playbackRate === rate ? 'active' : ''}`}
                  onClick={() => handlePlaybackRateChange(rate)}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;