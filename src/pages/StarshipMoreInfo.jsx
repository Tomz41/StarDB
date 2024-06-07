import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function StarshipMoreInfo({ localid }) {
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${localid}/`)
      .then((response) => setStarship(response.data))
      .catch((error) => console.error(error));
  }, [localid]);

  if (!starship) {
    return (
      <div className="loaad">
        <div className="spinner-border text-warning loaad" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  function formatNumberToString(largeNumber) {
    let formattedNumber = Number(largeNumber)
      .toLocaleString('ru-RU')
      .replace(/,/g, '.');

    return `$${formattedNumber}`;
  }

  return (
    <section className="MoreInfo">
      <h1>{starship.name}</h1>
      <div className="MoreInfo_content">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${localid}.jpg`}
          alt={starship.name}
        />
        <ul>
          <li>
            <span className="left">Model:</span>{' '}
            <span className="right">{starship.model}</span>
          </li>
          <li>
            <span className="left">Name:</span>{' '}
            <span className="right">{starship.name}</span>
          </li>
          <li>
            <span className="left">Length:</span>{' '}
            <span className="right">{starship.length}</span>
          </li>
          <li>
            <span className="left">Cost:</span>{' '}
            <span className="right">
              {formatNumberToString(starship.cost_in_credits)}
            </span>
          </li>
          <li>
            <span className="left">Created:</span>{' '}
            <span className="right">
              {new Date(starship.created).toLocaleDateString()}
            </span>
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim
      </p>
    </section>
  );
}

StarshipMoreInfo.propTypes = {
  localid: PropTypes.string.isRequired,
};

export default StarshipMoreInfo;
