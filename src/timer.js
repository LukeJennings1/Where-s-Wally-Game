import {useState, useEffect} from 'react'
import timer from './assets/timer.png'

function Timer() {
const [minutes, setminutes] = useState(0)
const [seconds, setSeconds] = useState(0)

useEffect(() => {
    const timer = setInterval(() => setSeconds(seconds + 1), 1000);
    if (seconds === 60) {
        setminutes(minutes + 1)
        setSeconds(0)
    }
    return () => clearInterval(timer)
},[seconds])

    return (
        <>
        <div className='timer-wrapper'>
        <img id = 'timer-icon' src={timer}></img>
        <div id = 'timer'>{minutes + ':'}{seconds}</div>
        </div>
        </>
    )
}

export default Timer;