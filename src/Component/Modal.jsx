import React from 'react';

const Modal = ({ isOpen, setIsOpen, project }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" >
            &times;
          </button>
          <div className="modal-content">
            <h2>{project.title}</h2>
            <h2>Modal</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    );
};

export default Modal;