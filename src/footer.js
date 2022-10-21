import githublogo from './assets/GitHub-Mark-64px.png'

function Footer () {
    return (
        <div className="footer-wrapper"> 
            <div className='content-wrapper-footer'>
                    <div className="made-by">Made By
                    <div id = 'name-styling-footer'>Luke Jennings 2022</div> 
                    <a href='https://github.com/LukeJennings1'>
                    <img id = 'github-logo' src={githublogo} ></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;