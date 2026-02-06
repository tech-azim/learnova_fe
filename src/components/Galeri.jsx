import React, { useState, useEffect } from 'react';
import '../styles/Galeri.css';

const Galeri = () => {
  // State untuk menyimpan daftar gambar
  const [images, setImages] = useState([]);
  // State untuk loading
  const [isLoading, setIsLoading] = useState(true);
  // State untuk error handling
  const [error, setError] = useState(null);

  // Data gambar statis (diganti dengan URL gambar dari hosting Anda)
  const initialImages = [
    { 
      id: 1, 
      title: '', 
      description: '', 
      url: '/images/Foto-25.jpeg', 
      date: '' 
    },
    { 
      id: 2, 
      title: '', 
      description: '', 
      url: '/images/Foto-13.jpeg', 
      date: '' 
    },
    { 
      id: 3, 
      title: '', 
      description: '', 
      url: '/assets/images/P1.jpeg', 
      date: '' 
    },
    { 
      id: 4, 
      title: '', 
      description: '', 
      url: '/assets/images/P4.jpeg', 
      date: '' 
    },
    { 
      id: 5, 
      title: '', 
      description: '', 
      url: '/assets/images/P5.jpeg', 
      date: '' 
    },
    { 
      id: 6, 
      title: '', 
      description: '', 
      url: '/assets/images/P6.jpeg', 
      date: '' 
    },
    { 
      id: 7, 
      title: '', 
      description: '', 
      url: '/images/Foto-6.jpeg', 
      date: '' 
    },
    { 
      id: 8, 
      title: '', 
      description: '', 
      url: '/images/Foto-7.jpeg', 
      date: '' 
    },
    { 
      id: 9, 
      title: '', 
      description: '', 
      url: '/images/Foto-8.jpeg', 
      date: '' 
    },
    { 
      id: 10, 
      title: '', 
      description: '', 
      url: '/images/Foto-9.jpeg', 
      date: '' 
    },
    { 
      id: 11, 
      title: '', 
      description: '', 
      url: '/images/Foto-11.jpeg', 
      date: '' 
    },
    { 
      id: 12, 
      title: '', 
      description: '', 
      url: '/images/Foto-12.jpeg', 
      date: '' 
    },
    { 
      id: 13, 
      title: '', 
      description: '', 
      url: '/images/Foto-16.jpeg', 
      date: '' 
    },
    { 
      id: 14, 
      title: '', 
      description: '', 
      url: '/images/Foto-14.jpeg', 
      date: '' 
    },
    { 
      id: 15, 
      title: '', 
      description: '', 
      url: '/images/Foto-15.jpeg', 
      date: '' 
    },
    { 
      id: 16, 
      title: '', 
      description: '', 
      url: '/images/Foto-17.jpeg', 
      date: '' 
    },
    { 
      id: 17, 
      title: '', 
      description: '', 
      url: '/images/Foto-21.jpeg', 
      date: '' 
    },
    { 
      id: 18, 
      title: '', 
      description: '', 
      url: '/images/Foto-22.jpeg', 
      date: '' 
    },
    { 
      id: 19, 
      title: '', 
      description: '', 
      url: '/images/Foto-23.jpeg', 
      date: '' 
    },
    { 
      id: 20, 
      title: '', 
      description: '', 
      url: '/images/Foto-24.jpeg', 
      date: '' 
    },
    { 
      id: 21, 
      title: '', 
      description: '', 
      url: '/images/Foto-26.jpeg', 
      date: '' 
    },
    { 
      id: 22, 
      title: '', 
      description: '', 
      url: '/images/Foto-27.jpeg', 
      date: '' 
    },
    { 
      id: 23, 
      title: '', 
      description: '', 
      url: '/images/Foto-29.jpeg', 
      date: '' 
    },
    { 
      id: 24, 
      title: '', 
      description: '', 
      url: '/images/Foto-30.jpeg', 
      date: '' 
    },
    { 
      id: 25, 
      title: '', 
      description: '', 
      url: '/images/Foto-31.jpeg', 
      date: '' 
    },
    { 
      id: 26, 
      title: '', 
      description: '', 
      url: '/images/Foto-34.jpeg', 
      date: '' 
    },
    { 
      id: 27, 
      title: '', 
      description: '', 
      url: '/images/Foto-35.jpeg', 
      date: '' 
    },
    { 
      id: 28, 
      title: '', 
      description: '', 
      url: '/images/Foto-36.jpeg', 
      date: '' 
    },
    { 
      id: 29, 
      title: '', 
      description: '', 
      url: '/images/Foto-37.jpeg', 
      date: '' 
    },
    { 
      id: 30, 
      title: '', 
      description: '', 
      url: '/images/Foto-38.jpeg', 
      date: '' 
    },
  ];

  // Inisialisasi data gambar saat komponen dimuat
  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Jika Anda ingin mengambil gambar dari API/database di masa depan
        // const response = await fetch('URL_API_ANDA');
        // const data = await response.json();
        // setImages(data);
        
        // Untuk sekarang, gunakan data statis
        setImages(initialImages);
      } catch (err) {
        setError('Gagal memuat gambar. Silakan coba lagi nanti.');
        console.error('Error loading images:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Handler untuk menghapus gambar (opsional, bisa dihapus jika tidak perlu)
  const handleDeleteImage = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus gambar ini?')) {
      setImages(images.filter(image => image.id !== id));
    }
  };

  return (
    <div className="galeri-container">
      <header className="galeri-header">
        <h1>Galeri Kegiatan LSP</h1>
        <p>Lembaga Sertifikasi Profesi - Dokumentasi Kegiatan dan Pelatihan</p>
      </header>

      <main className="galeri-content">
        {/* Galeri Gambar */}
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
              <button 
                onClick={() => window.location.reload()}
                className="retry-btn"
              >
                Coba Lagi
              </button>
            </div>
          ) : images.length === 0 ? (
            <div className="empty-gallery">
              <div className="empty-icon">📷</div>
              <h3>Belum ada gambar kegiatan</h3>
              <p>Gambar akan ditampilkan di sini setelah diupload melalui cPanel</p>
            </div>
          ) : (
            <>
              <div className="gallery-grid">
                {images.map((image) => (
                  <div key={image.id} className="gallery-item">
                    <div className="image-wrapper">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia';
                        }}
                      />
                      {/* Tombol hapus bisa dihilangkan jika tidak diperlukan */}
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
                        <span className="date-badge">
                          📅 {image.date}
                        </span>
                        <span className="image-id">ID: #{image.id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="gallery-footer">
                <p className="gallery-stats">
                  Menampilkan {images.length} dari {images.length} gambar
                </p>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Galeri;