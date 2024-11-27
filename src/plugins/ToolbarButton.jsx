import React from 'react';

function ToolbarButton({ onClick, disabled, icon, label }) {
  return (
    <button disabled={disabled} onClick={onClick} className="toolbar-button">
      <span className={`icon ${icon}`} />
      <span className="label">{label}</span>
    </button>
  );
}

export default ToolbarButton;