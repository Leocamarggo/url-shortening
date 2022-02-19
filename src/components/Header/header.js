import Logo from '../../assets/images/logo.svg'
import "./header.sass"

function Header() {
  return (
    <>
        <div className="headerDesktop px-5 container">
            <ul className="part01Menu">
                <li className="logo px-0">
                    <a href="#">
                        <img src={Logo} alt="Logo Shortly"/>
                    </a>
                </li>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
            </ul>
            <ul className='part02Menu'>
                <li>
                    <a>Login</a>
                </li>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>

        </div>

        <div className="headerMobile">
            <ul className="part01Menu">
                <li className="logo" >
                    <a href="#">
                        <img src={Logo} alt="Logo Shortly"/>
                    </a>
                </li>
            </ul>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        </div>
    </>
  );
}

export default Header;
