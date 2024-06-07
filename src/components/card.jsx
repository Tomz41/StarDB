import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Card({ starship, onChange, ...props }) {
  const [block, setblock] = useState(false);

  function handleImageError(event) {
    event.target.src = '/public/darth-vader-svgrepo-com.svg';
    setblock(true);
  }

  const id = starship.url.split('/').slice(-2, -1)[0];

  return (
    <>
      <div
        className="card"
        onClick={block ? null : onChange}
        {...props}
        style={{
          opacity: block ? 0.5 : '',
          cursor: block ? 'default' : 'pointer',
        }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          onError={handleImageError}
          alt={starship.name}
        />
        <div className="cost">
          <span className="cost-title">Cost</span>
          <span className="cost-value">
            {starship.cost_in_credits !== 'unknown'
              ? `$ ${starship.cost_in_credits}`
              : starship.cost_in_credits}
          </span>
        </div>

        <div className="name">
          <span className="name-title">Name</span>
          <span className="name-value">{starship.name}</span>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  starship: PropTypes.shape({
    url: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
