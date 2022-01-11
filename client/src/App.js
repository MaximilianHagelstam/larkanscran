import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/menu/today`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <p>James</p>;
};

export default App;
