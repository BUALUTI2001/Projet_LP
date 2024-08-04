import React from 'react'
import Logo from "./icon/logo_unikin.png"
import { Box, useTheme, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Link} from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={Logo} alt="UNIKIN_LOGO" className="unikin"/>
            <div>
              <h1>Faculté Polytechnique</h1>
              <span>Université de Kinshasa</span>
            </div>
          </div>
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-linkedin-in icon'></i>
            <i className='fab fa-twitter icon'></i>
            <a href='http://localhost:3000/' className="fa fa-user-circle icon"></a>
            {/* <i className="fa fa-sign-in" aria-hidden="false"></i> */}
            {/* <i><Box><Link to="/login"><IconButton><AccountCircle/></IconButton></Link></Box></i> */}

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
