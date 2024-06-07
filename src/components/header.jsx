import { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  position: PropTypes.node.isRequired,
};

export default function Header({ position, onChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="/">StarDB</a>
      <nav className={isMenuOpen ? 'open' : ''}>
        <Button
          href="#form"
          className={position === 'form' ? 'active' : ''}
          onClick={() => {
            onChange('form');
            setIsMenuOpen(false);
          }}
        >
          Form
        </Button>
        <Button
          href="#starships"
          className={
            position === 'starfipInfo' || position === 'starship'
              ? 'active'
              : ''
          }
          onClick={() => {
            onChange('starship');
            setIsMenuOpen(false);
          }}
        >
          Starships
        </Button>
      </nav>
      <div
        className={`burger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}
