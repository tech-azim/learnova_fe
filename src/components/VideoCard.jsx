import React from 'react';
import '../styles/VideoCard.css';
import { CalendarDays } from 'lucide-react';

const VideoCard = ({ video, isSelected, onSelect }) => {
  return (
    <div 
      className={`video-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(video)}
    >
      <div className="card-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="video-duration">{video.duration}</div>
        <div className="play-overlay">▶️</div>
      </div>
      <div className="card-content">
        <h4>{video.title}</h4>
        <p className="card-description">{video.description.substring(0, 80)}...</p>
        <div className="card-footer">
          <span className="flex items-center gap-2"><CalendarDays /> {video.date}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;