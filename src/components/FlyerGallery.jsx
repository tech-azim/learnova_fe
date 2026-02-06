import React, { useState } from 'react';
import '../styles/FlyerGallery.css';

// Data contoh foto flyer
const initialFlyers = [
  { id: 1, 
    title: "", 
    image: "/images/Foto-18.jpeg", 
    description: "" },
  { id: 2, 
    title: "", 
    image: "/images/Foto-19.jpeg", 
    description: "" },
  { id: 3, 
    title: "", 
    image: "/images/Foto-20.jpeg", 
    description: "" },
  { id: 4, 
    title: "", 
    image: "/images/Foto-28.jpeg", 
    description: "" },
  { id: 5, 
    title: "", 
    image: "/images/Foto-33.jpeg", 
    description: "" 
  },
  {
    id: 6, 
    title: "", 
    image: "/images/Foto-49.jpeg", 
    description: "" 
  },
  {
    id: 7, 
    title: "", 
    image: "/images/Foto-50.jpeg", 
    description: "" 
  },
];

const FlyerGallery = () => {
  const [flyers, setFlyers] = useState(initialFlyers);
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter flyer berdasarkan pencarian
  const filteredFlyers = flyers.filter(flyer =>
    flyer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flyer.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle saat flyer diklik
  const handleFlyerClick = (flyer) => {
    setSelectedFlyer(flyer);
  };

  // Handle penutupan modal
  const handleCloseModal = () => {
    setSelectedFlyer(null);
  };

  return (
    <div className="flyer-gallery">
      <header className="gallery-header">
        {/* Pencarian */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Cari flyer berdasarkan judul atau deskripsi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </header>

      {/* Galeri Grid */}
      <div className="flyer-grid">
        {filteredFlyers.map(flyer => (
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

      {/* Modal untuk tampilan detail */}
      {selectedFlyer && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
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
              <div className="flyer-specs">
                {/* <div className="spec-item">
                  <span className="spec-label">Ukuran:</span>
                  <span className="spec-value">8.5 x 11 inci (Flyer)</span>
                </div> */}
                {/* <div className="spec-item">
                  <span className="spec-label">Format:</span>
                  <span className="spec-value">Portrait</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">ID:</span>
                  <span className="spec-value">#{selectedFlyer.id}</span>
                </div> */}
              </div>
              <div className="modal-actions">
                {/* <button className="action-button download-button">Unduh Flyer</button> */}
                {/* <button className="action-button share-button">Bagikan</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="gallery-info">
          <p>Menampilkan {filteredFlyers.length} dari {flyers.length} flyer</p>
        </div>
    </div>
  );
};

export default FlyerGallery;