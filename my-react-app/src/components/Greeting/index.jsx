import { useEffect, useState } from 'react';

function Greeting({person}) {
  const [greet, setGreet] = useState('');
  const {name, firstTime} = person

  useEffect(() => {
    console.log(person)
    if (firstTime) {
      setGreet('Привет, ');
    } else {
      setGreet('Привет, у тебя поменялось имя, теперь ты ');
    }
  }, [person]);

  return (
    <div>
      {greet}
      {name}!
    </div>
  );
}

export default Greeting;