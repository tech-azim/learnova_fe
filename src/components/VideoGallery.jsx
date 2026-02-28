import React, { useState, useEffect } from "react";
import axiosInstance from "../lib/api";
import VideoPlayer from "./VideoPlayer";
import VideoCard from "./VideoCard";
import "../styles/VideoGallery.css";
import EmptyState from "./ui/EmptyState";
import { CalendarDays, Clapperboard, Search } from "lucide-react";

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

          // Set selectedVideo only to the first ACTIVE video
          const firstActive = mapped.find((v) => v.is_active === true);
          setSelectedVideo(firstActive || null);
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
    ...new Set(
      videos
        .filter((v) => v.is_active === true)
        .map((video) => video.category)
        .filter(Boolean)
    ),
  ];

  const filteredVideos = videos.filter((video) => {
    const isActive = video.is_active === true;
    const matchesSearch =
      video.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || video.category === selectedCategory;
    return isActive && matchesSearch && matchesCategory;
  });

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedCategory("Semua");
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
      <div className="video-gallery container">
        <div className="error-state ">
          <p>{error}</p>
          <button onClick={fetchVideos} className="retry-btn">
            Coba Lagi
          </button>
        </div>
      </div>
    );

  // Empty state: no active videos exist at all
  const hasActiveVideos = videos.some((v) => v.is_active === true);

  return (
    <div className="video-gallery container mx-3">
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
            <span className="search-icon text-gray-500"><Search /></span>
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

      {/* Case 1: Tidak ada video aktif sama sekali */}
      {!hasActiveVideos && (
        <EmptyState 
          title="Belum Ada Video Tersedia"
          description="Saat ini belum ada video yang aktif. Silakan kunjungi kembali nanti."
          icon={Clapperboard}
        /> 
      )}

      {/* Case 2: Ada video aktif tapi filter tidak menemukan hasil */}
      {hasActiveVideos && filteredVideos.length === 0 && (
        <EmptyState 
          title="Video Tidak Ditemukan"
          description={searchTerm ? `Tidak ada video yang cocok dengan pencarian "${searchTerm}"` : `Tidak ada video dalam kategori "${selectedCategory}"`}
          icon={Clapperboard}
          handleClearFilter={handleClearFilter}
          useResetButton
        /> 
      )}

      {/* Case 3: Tampilan normal dengan video */}
      {hasActiveVideos && filteredVideos.length > 0 && selectedVideo && (
        <div className="gallery-container">
          <div className="video-player-section">
            <VideoPlayer video={selectedVideo} />
            <div className="video-info">
              <h3>{selectedVideo.title}</h3>
              <div className="video-meta">
                <span className="category-badge">{selectedVideo.category}</span>
                <span className="flex items-center gap-2"><CalendarDays /> {selectedVideo.date}</span>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;