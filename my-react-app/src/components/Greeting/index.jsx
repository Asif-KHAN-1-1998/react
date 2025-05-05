import { useEffect, useState } from 'react';

function Greeting({ person }) {
  const [greet, setGreet] = useState('');

  useEffect(() => {
    if (person.firstTime) {
      setGreet('Привет, ');
    } else {
      setGreet('Привет, у тебя поменялось имя, теперь ты ');
    }
  }, [person]);

  return (
    <div>
      {greet}
      {person.name}!
    </div>
  );
}

export default Greeting;