import React, { useState, useEffect } from "react";
import axiosInstance from "../lib/api";
import "../styles/FlyerGallery.css";
import { Search } from "lucide-react";

const FlyerGallery = () => {
  const [flyers, setFlyers] = useState([]);
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlyers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await axiosInstance
        .get(`/flyer-galleries?page=1&limit=100`)
        .then((res) => {
          const data = res.data.data;
          const mapped = data.map((item) => ({
            ...item,
            image:
              `${import.meta.env.VITE_API_BASE_URL}/${item.image}`.replaceAll(
                "/api/v1",
                "",
              ),
          }));
          setFlyers(mapped);
        });
    } catch (err) {
      setError("Gagal memuat flyer. Silakan coba lagi nanti.");
      console.error("Error loading flyers:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlyers();
  }, []);

  const filteredFlyers = flyers.filter(
    (flyer) =>
      flyer.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flyer.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleFlyerClick = (flyer) => setSelectedFlyer(flyer);
  const handleCloseModal = () => setSelectedFlyer(null);

  return (
    <div className="flyer-gallery">
      <header className="gallery-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Cari flyer berdasarkan judul atau deskripsi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon text-gray-500"><Search /></span>
        </div>
      </header>

      {isLoading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Memuat flyer...</p>
        </div>
      ) : error ? (
        <div className="error-state">
          <p>{error}</p>
          <button onClick={fetchFlyers} className="retry-btn">
            Coba Lagi
          </button>
        </div>
      ) : filteredFlyers.length === 0 ? (
        <div className="empty-gallery">
          <div className="empty-icon">🪧</div>
          <p>Tidak ada flyer yang ditemukan</p>
        </div>
      ) : (
        <div className="flyer-grid">
          {filteredFlyers.map((flyer) => (
            <div
              key={flyer.id}
              className="flyer-card"
              onClick={() => handleFlyerClick(flyer)}
            >
              <div className="flyer-image-container">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="flyer-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia";
                  }}
                />
                <div className="flyer-overlay">
                  <span className="view-text">Klik untuk melihat detail</span>
                </div>
              </div>
              <div className="flyer-info">
                <h3 className="flyer-title">{flyer.title}</h3>
                <p className="flyer-description">{flyer.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedFlyer && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-flyer-container">
              <img
                src={selectedFlyer.image}
                alt={selectedFlyer.title}
                className="modal-flyer-image"
              />
            </div>
            <div className="modal-info">
              <h2>{selectedFlyer.title}</h2>
              <p>{selectedFlyer.description}</p>
              <div className="modal-actions"></div>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-info">
        <p>
          Menampilkan {filteredFlyers.length} dari {flyers.length} flyer
        </p>
      </div>
    </div>
  );
};

export default FlyerGallery;
