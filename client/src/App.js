import axios from 'axios';
import { useEffect, useState } from 'react';

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

  return <p>{lunch}</p>;
};

export default App;
