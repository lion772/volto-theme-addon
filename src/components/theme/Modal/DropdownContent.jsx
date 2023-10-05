import React from 'react';

const DropdownContent = ({ isOpen, onClose }) => {
  return (
    <div className={`sliding-panel ${isOpen ? 'open' : ''}`}>
      <div className="sliding-panel-content">
        {/* Content of the sliding panel */}
        <h2>Sliding Panel Content</h2>
        <p>This is the content of the sliding panel.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DropdownContent;
