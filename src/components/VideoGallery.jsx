import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoCard from './VideoCard';
import '../styles/VideoGallery.css';

const VideoGallery = () => {
  // Data video contoh (bisa diganti dengan data dari API)
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: '',
      description: '',
      thumbnail: '/images/Foto-40.png',
      videoUrl: '/videos/V-1.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 2,
      title: '',
      description: '',
      thumbnail: '/images/Foto-41.png',
      videoUrl: '/videos/V-2.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 3,
      title: '',
      description: '',
      thumbnail: '/images/Foto-42.png',
      videoUrl: '/videos/V-3.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 4,
      title: '',
      description: '',
      thumbnail: '/images/Foto-43.png',
      videoUrl: '/videos/V-4.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 5,
      title: '',
      description: '',
      thumbnail: '/images/Foto-44.png',
      videoUrl: '/videos/V-5.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 6,
      title: '',
      description: '',
      thumbnail: '/images/Foto-45.png',
      videoUrl: '/videos/V-6.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 7,
      title: '',
      description: '',
      thumbnail: '/images/Foto-46.png',
      videoUrl: '/videos/V-7.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 8,
      title: '',
      description: '',
      thumbnail: '/images/Foto-47.png',
      videoUrl: '/videos/V-8.mp4',
      category: 'Semua',
      date: ''
    },
    {
      id: 9,
      title: '',
      description: '',
      thumbnail: '/images/Foto-48.png',
      videoUrl: '/videos/V-9.mp4',
      category: 'Semua',
      date: ''
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  // Kategori unik dari video
  const categories = ['Semua', ...new Set(videos.map(video => video.category))];
  
  // Filter video berdasarkan pencarian dan kategori
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // Scroll ke video player
    window.scrollTo({ mid: 0, behavior: 'smooth' });
  };

  return (
    <div className="video-gallery">
      <div className="gallery-header">
        <h2>Galeri Video LSP</h2>
        <p>Lembaga Sertifikasi Profesi - Dokumentasi Kegiatan dan Pelatihan</p>
        
        <div className="filter-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Cari video..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="category-filter">
            <label>Filter Kategori: </label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="gallery-container">
        <div className="video-player-section">
          <VideoPlayer video={selectedVideo} />
          <div className="video-info">
            <h3>{selectedVideo.title}</h3>
            <div className="video-meta">
              <span className="category-badge">{selectedVideo.category}</span>
              <span>📅 {selectedVideo.date}</span>
            </div>
            <p>{selectedVideo.description}</p>
          </div>
        </div>
        
        <div className="video-list-section">
          <h3>Video Lainnya ({filteredVideos.length})</h3>
          <div className="video-grid">
            {filteredVideos.map(video => (
              <VideoCard 
                key={video.id} 
                video={video} 
                isSelected={selectedVideo.id === video.id}
                onSelect={handleVideoSelect}
              />
            ))}
          </div>
          {filteredVideos.length === 0 && (
            <div className="no-results">
              <p>Tidak ada video yang ditemukan untuk pencarian "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default VideoGallery;