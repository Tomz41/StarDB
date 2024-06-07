import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card';
import PropTypes from 'prop-types';

PageMain.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default function PageMain({ onChange }) {
  const [starships, setStarships] = useState([]);
  const [sortedStarships, setSortedStarships] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('name');

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/starships/')
      .then((response) => {
        setStarships(response.data.results);
        setSortedStarships(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const sorted = [...starships];
    if (sortCriteria === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === 'cost_in_credits') {
      sorted.sort((a, b) => {
        const costA = isNaN(a.cost_in_credits)
          ? Infinity
          : parseInt(a.cost_in_credits);
        const costB = isNaN(b.cost_in_credits)
          ? Infinity
          : parseInt(b.cost_in_credits);
        return costA - costB;
      });
    }
    setSortedStarships(sorted);
  }, [sortCriteria, starships]);

  const handleCardClick = (starship, event) => {
    const vremen = event.target.src.split('/');
    const vremen2 = vremen[vremen.length - 1];
    const id = vremen2.split('.')[0];

    onChange('starshipInfo', id); // Example action
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  if (starships.length < 2) {
    return (
      <div className="loaad">
        <div className="spinner-border text-warning loaad" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="starships">
      <div className="top-bar">
        <h1>Starships</h1>
        <label htmlFor="sel">Sort by:</label>
        <select name="sel" id="sel" onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="cost_in_credits">Cost</option>
        </select>
      </div>

      <div className="Cards">
        {sortedStarships.map((starship, index) => (
          <Card
            key={index}
            starship={starship}
            onChange={(event) => handleCardClick(starship, event)}
          />
        ))}
      </div>
    </div>
  );
}
