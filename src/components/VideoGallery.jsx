import React, { useState, useEffect } from "react";
import axiosInstance from "../lib/api";
import VideoPlayer from "./VideoPlayer";
import VideoCard from "./VideoCard";
import "../styles/VideoGallery.css";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await axiosInstance
        .get(`/video-galleries?page=1&limit=100`)
        .then((res) => {
          const data = res.data.data;
          const mapped = data.map((item) => ({
            ...item,
            thumbnail:
              `${import.meta.env.VITE_API_BASE_URL}${item.thumbnail}`.replaceAll(
                "/api/v1",
                "",
              ),
            videoUrl:
              `${import.meta.env.VITE_API_BASE_URL}${item.video_url}`.replaceAll(
                "/api/v1",
                "",
              ),
            date: item.date
              ? new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "-",
          }));
          setVideos(mapped);
          setSelectedVideo(mapped[0] || null);
        });
    } catch (err) {
      setError("Gagal memuat video. Silakan coba lagi nanti.");
      console.error("Error loading videos:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const categories = [
    "Semua",
    ...new Set(videos.map((video) => video.category).filter(Boolean)),
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Memuat video...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-state">
        <p>{error}</p>
        <button onClick={fetchVideos} className="retry-btn">
          Coba Lagi
        </button>
      </div>
    );

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
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {selectedVideo && (
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
              {filteredVideos.map((video) => (
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
                <p>
                  Tidak ada video yang ditemukan untuk pencarian "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
