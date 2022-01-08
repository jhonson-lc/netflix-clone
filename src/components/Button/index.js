import React from 'react';
import './Button.css';
import { FaInfoCircle } from 'react-icons/fa';

function Button({ title, icon, backgroundColor, colorText }) {
  return (
    <div className="button" style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="button__icon" style={{ color: `${colorText}` }}>
        {icon}
      </div>
      <button className="button__button" style={{ color: `${colorText}` }}>
        {title}
      </button>
    </div>
  );
}

Button.defaultProps = {
  title: 'Default',
  icon: <FaInfoCircle />,
  backgroundColor: '#fff',
  colorText: `#000`,
};

export default Button;
