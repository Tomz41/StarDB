import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import './css/main.css';
import Header from './components/header';
import PageMain from './pages/PageMain';
import Starship from './pages/Starship';
import StarshipMoreInfo from './pages/StarshipMoreInfo';
import Form from './pages/FormShips';

function App() {
  const [position, setPosition] = useState('main');
  const [currentShip, setCurrentShip] = useState();
  return (
    <>
      <Header
        position={position}
        onChange={(current) => setPosition(current)}
      />
      {position === 'form' && <Form />}
      {position === 'main' && (
        <PageMain onChange={(current) => setPosition(current)} />
      )}
      {position === 'starship' && (
        <Starship
          onChange={(current, localid) => {
            setCurrentShip(localid);
            setPosition(current);
          }}
        />
      )}
      {position === 'starshipInfo' && (
        <StarshipMoreInfo localid={currentShip} />
      )}
    </>
  );
}

export default App;
