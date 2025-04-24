import { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(0);
    useEffect(()=>{
        const timer = setInterval(() => setTime(()=> (time + 1)), 1000);
        return () => {
            clearInterval(timer)
        }
    },[time])
    
    const hours = Math.trunc(time / 3600)
    const minutes = Math.trunc(time / 60) % 60
    const seconds = time % 60
    const isVisisble = minutes !== 0 && minutes % 5 === 0;
    const message = (<div>'Время делится на 5'</div>)

    return (
        <>
        {isVisisble  ? message : ''}
        <div>
            {hours}:{minutes}:{seconds}
        </div>
        </>
    )

}

export default Clock