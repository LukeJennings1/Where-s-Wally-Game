import wallyLevel1 from './assets/wally-level-1.png'
import Dropdown from './dropdown';
import { useState, useRef } from 'react'

function Content() {

const [dropDown, setDropDown] = useState(false)
const [positionX, setDropDownPositionX] = useState()
const [positionY, setDropDownPositionY] = useState()

const modal = useRef(0)
const button1 = useRef(null)
const button2 = useRef(null)
const button3 = useRef(null)

const contextSelector = useRef(null)

const buttonTransitionOut = () => {
    button1.current.style.backgroundColor = 'white';
    button2.current.style.backgroundColor = 'white';
    button3.current.style.backgroundColor = 'white';

}
const resetpointer = (event) => {
    console.log(event)
    if (event.target.id != "wally-level-1-image" ) {
        modal.current.style.opacity = 0
    }
} 
const callingStatement = (event) => {
    let mousePosx = event.clientX
    let mousePosy = event.clientY
    return (
        setDropDownPositionX(event.clientX),
        setDropDownPositionY(event.clientY),
        modal.current.style.left = mousePosx + 'px',
        modal.current.style.top = mousePosy + 'px',
        modal.current.style.opacity = 1,
        resetpointer(event)
    )
}
    return (
        <div className="content-wrapper" onClick = {(event) => {resetpointer(event)}} ref={contextSelector}>
              <div ref={modal} id = 'dropdown-selector' className='dropdown-selector-class'>
            <div className='button-wrapper'>
                <button ref={button1} onMouseEnter={() => {button1.current.style.backgroundColor = '#4CAF50'}} onMouseLeave = {() => {buttonTransitionOut()}} className = 'dropdown-buttons' value={'Wally'}>Wally</button>
                <button ref={button2} onMouseEnter={() => {button2.current.style.backgroundColor = '#4CAF50'}} onMouseLeave = {() => {buttonTransitionOut()}} className = 'dropdown-buttons' value={'Wizard'}>Wizard</button>
                <button ref={button3} onMouseEnter={() => {button3.current.style.backgroundColor = '#4CAF50'}} onMouseLeave = {() => {buttonTransitionOut()}} className = 'dropdown-buttons' value={'Odlaw'}>Odlaw</button>
            </div>
        </div>
        {/* {dropDown && adddropdown()}  this is known as a "Short-Circuit Evaluation IE render is the first statement is true*/} 
        {/* ^^ if the state and dropdown are equal to true render dropdown. As the Dropdown is always true 
        we just need to adjust the dropDown to true on a click like the one in the img below. 
        IE The expression is just if first part is true, then this is equal to the second part*/}
            <img onClick={(event) => {callingStatement(event)}} id = 'wally-level-1-image' src={wallyLevel1}></img>
        </div>
    )
}   
export default Content;