import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import './topbar.css'
import { Context } from '../../context/Context';


const Topbar = () => {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5001/images/"


  const logoutHandler = () => {
    dispatch({type:"LOGOUT"});
  }

  return (
    <div className='top' >
        {/* <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div> */}

        {/* box1 */}
        <div className="topLeft">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/" className="link">
                    HOME
                  </Link>
                </li>
                <li className="topListItem">
                  <Link to="/about" className="link">
                    ABOUT
                  </Link>
                </li>
                <li className="topListItem">
                  <Link to="/categories" className="link">
                    CATEGORIES
                  </Link>
                </li>

                <li className="topListItem">
                  {
                    user && 
                    <Link to="/write" className="link">
                      WRITE
                    </Link>
                  }
                </li>
               
                <li className="topListItem" onClick={logoutHandler} >
                  {
                    user && "LOGOUT"
                  }
                </li>
            </ul>    
        </div>

        {/* box2 */}
        <div className="topRight">
        {
          user ? (
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              {/* <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li> */}
            </ul>
          )
          }
            {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}

export default Topbar