import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/food/today`
      );
      setFoods(res.data.foods);
    })();
  }, []);

  return (
    <>
      {foods.map((food) => (
        <h1 key={v4()}>{food}</h1>
      ))}
    </>
  );
};

export default App;
