import React, { useState, useEffect } from "react";
import axiosInstance from "../lib/api";
import { formatDate } from "../lib/formatDate";
import "../styles/Galeri.css";
import { CalendarDays } from "lucide-react";

const Galeri = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGalleries = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await axiosInstance.get(`/galleries?page=1&limit=100`).then((res) => {
        const data = res.data.data;
        setImages(
          data.map((item) => {
            return {
              ...item,
              url: `${import.meta.env.VITE_API_BASE_URL}/${item.url}`.replaceAll(
                "/api/v1",
                "",
              ),
            };
          }),
        );
      });
    } catch (err) {
      setError("Gagal memuat gambar. Silakan coba lagi nanti.");
      console.error("Error loading images:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const handleDeleteImage = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus gambar ini?")) {
      setImages(images.filter((image) => image.id !== id));
    }
  };

  return (
    <div className="galeri-container">
      <header className="galeri-header">
        <h1>Galeri Kegiatan LSP</h1>
        <p>Lembaga Sertifikasi Profesi - Dokumentasi Kegiatan dan Pelatihan</p>
      </header>

      <main className="galeri-content">
        <section className="gallery-section">
          <div className="section-header">
            <h2>Dokumentasi Kegiatan ({images.length} gambar)</h2>
          </div>

          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Memuat galeri...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
              <button onClick={fetchGalleries} className="retry-btn">
                Coba Lagi
              </button>
            </div>
          ) : images.length === 0 ? (
              <EmptyState
                title="Belum ada Galeri"
                description="Silakan cek kembali nanti atau hubungi kami untuk informasi lebih lanjut."
                icon={ImageIcon} />
          ) : (
            <div className="gallery-grid">
              {images.map((image) => (
                <div key={image.id} className="gallery-item">
                  <div className="image-wrapper">
                    <img
                      src={image.url || image.image_url || image.file_url}
                      alt={image.title || `Foto ${image.id}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia";
                      }}
                    />
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteImage(image.id)}
                      aria-label={`Hapus ${image.title}`}
                      title="Hapus gambar"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  <div className="image-details">
                    <h3>{image.title}</h3>
                    <p className="image-description">{image.description}</p>
                    <div className="image-meta">
                      <span className="date-badge flex items-center gap-2">
                        <CalendarDays /> {formatDate(image.date) || formatDate(image.created_at)}
                      </span>
                      <span className="image-id">ID: #{image.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Galeri;
