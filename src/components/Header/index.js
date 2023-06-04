// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

class Header extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <Link to="/">
          <img
            width={40}
            height={40}
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
            alt="website logo"
          />
        </Link>

        <Popup
          modal
          trigger={
            <button
              type="button"
              className="trigger-button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu size={30} />
            </button>
          }
          overlayStyle={overlayStyles}
        >
          {close => (
            <div className="menu-container">
              <div className="close-icon">
                <button
                  type="button"
                  className="trigger-button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose size={25} />
                </button>
              </div>

              <ul className="links-container">
                <li>
                  <Link to="/" onClick={() => close()} className="each-link">
                    <AiFillHome />
                    <p className="route-name">Home</p>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    onClick={() => close()}
                    className="each-link"
                  >
                    <BsInfoCircleFill />
                    <p className="route-name">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Header
