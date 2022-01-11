import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [lunch, setLunch] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/menu/today`
      );
      setLunch(res.data.lunch);
    })();
  }, []);

  return (
    <div className="app">
      <h1 className="text">{lunch}</h1>
    </div>
  );
};

export default App;
