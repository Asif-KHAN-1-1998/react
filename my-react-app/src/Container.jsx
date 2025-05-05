import { useState, useEffect } from 'react';
import './Container.css';
import { faker } from '@faker-js/faker';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Header from './components/Header/index'; // Исправлено опечатка в пути

function Container() {
  const [person, setPerson] = useState({
    name: faker.person.firstName(),
    firstTime: true,
  });

  useEffect(() => {
    const timerID = setInterval(() => {
      setPerson(prevPerson => ({
        ...prevPerson,
        name: faker.person.firstName(),
        firstTime: false,
      }));
    }, 2000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <>
      <Header />
      <Clock />
      <Greeting person={person} />
    </>
  );
}

export default Container;