import React from 'react';
import './TooltipDiv.css';

const TooltipDiv = ({ children, tooltipText }) => {
  return (
    <div className="container">
      {children}
      <div className="question-mark">?</div>
      <div className="tooltip-text text-xs">{tooltipText}</div>
    </div>
  );
};

export default TooltipDiv;
