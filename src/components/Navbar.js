import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        <nav id="nav_edit" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid"> 
  <Link className="navbar-brand " to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/ ">{props.home}</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">{props.about}</Link>
        </li>
        
        
      </ul>
      
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Greymode</label>
      </div>
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Bluemode</label>
      </div> */}
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
        <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" onClick={props.switchMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Redmode</label>
      </div> */}
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
                    title:PropTypes.string.isRequired,
                    about:PropTypes.string,
                    home:PropTypes.string,
                    Contact:PropTypes.string
                    }

Navbar.defaultProps = {
                        title: 'Set the Title here',
                        about: 'Set the about us here',
                        home:'HOME',
                        Contact:'Contact'
                        };