import React from "react";


const VistaPreviaModal = ({ visible, onClose, titulo, src, tipo = "imagen" }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar-btn" onClick={onClose}>✕</button>
        <h2>{titulo}</h2>
        {tipo === "imagen" && <img src={src} alt={titulo} className="preview-img" />}
        {tipo === "video" && (
          <video controls className="preview-video">
            <source src={src} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        )}
      </div>
    </div>
  );
};

export default VistaPreviaModal;
