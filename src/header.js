import "./index.css";
import wallyimage from './assets/wallyimage.png'
import campsiteimage from './assets/campsite.png'
import stadium from './assets/stadium.png'
import railway from './assets/railway.png'

function Header(props) {

    return (
        <div id = 'header-wrapper' >


        <div className="stamp-wrapper">
            <img id = 'campsite-image' src={campsiteimage}></img>
            <img id = 'stadium-image' src={stadium}></img>
            <img id = 'railway-image' src={railway}></img>
        </div>

            <div id ="title-wrapper">
                <h1 id = 'wheres' >WHERE'S</h1>
                <h1 id = 'wally' >WALLY?</h1>
            </div>

            <img id = 'wally-image' src={wallyimage}></img>

        </div>
    )
}

export default Header;