import { useState, useEffect } from 'react'



function Greeting(props) {
    const [message, setMessage] = useState(`Привет, ${props.person}!`);
    const [name, setName] = useState(props.person)
    useEffect(()=>{
       if(props.person !== name){
        setMessage(`Привет, у тебя поменялось имя, теперь ты ${props.person}!`);
       } else {console.log('Имя не изменилось')}
    },[props.person, name])


    return (
        <>
        <div>
            {message}
        </div>
        </>
    )

}

export default Greeting