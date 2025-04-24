import { useState, useEffect, useLayoutEffect } from 'react'
import './Container.css'
import { faker } from '@faker-js/faker';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Header from './components/Header/inde';

function Container() {
  const [name, setName] = useState(`${faker.person.firstName()}`)

  useEffect(() => {
    setInterval(() => setName(faker.person.firstName()), 2000);
  }, [])



  return (
    <>
    <Header />
      <Clock />
      <Greeting person={name} />
    </>
  )
}

export default Container
