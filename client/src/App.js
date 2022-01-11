import { useEffect, useState } from 'react';

const App = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    console.log(year, month, day);
  }, [date]);

  return <p>James</p>;
};

export default App;
