import wallyLevel1 from './assets/wally-level-1.png'
import Dropdown from './dropdown';
import { useState } from 'react'

function Content() {

    const [dropDown, setDropDown] = useState(false)

const adddropdown = () => {
    return ( 
        <select>
            <option value={'Wally'}>Wally</option>
            <option value={'Wizard'}>Wizard</option>
            <option value={'Odlaw'}>Odlaw</option>
        </select>
    )
}

    return (
        <div className="content-wrapper">
            {dropDown && adddropdown()} 
            {/* ^^ if the state and dropdown are equal to true render dropdown. As the Dropdown is always true 
            we just need to adjust the dropDown to true on a click like the one in the img below. */}
            <img onClick={() => {setDropDown(true)}} id = 'wally-level-1-image' src={wallyLevel1}></img>
        </div>
    )
}   
export default Content;