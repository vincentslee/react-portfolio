import "./style.css";
import React from 'react';
import placeholder from './placeholder.png';


function Header(){
    return (

<header>
  <div class="profileLogo"> 

    <p class="logoPlaceholder">
        <img src={placeholder} alt="sample logo"></img>
    </p>
  </div>
  <div class="profilePhoto"> 

    <img src={placeholder} alt="sample"></img>
    </div>

  <div class="profileHeader">
    <h1>JOHN DOE</h1>
    <h3>REALLY AWESOME WEB DESIGNER</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.</p>
  </div>

  <aside class="socialNetworkNavBar">
    <div class="socialNetworkNav"> 

      <img src={placeholder} alt="sample"></img>
      </div>
    <div class="socialNetworkNav"> 

      <img src={placeholder}  alt="sample"></img>
      </div>
    <div class="socialNetworkNav"> 

      <img src={placeholder}  alt="sample"></img>
      </div>
    <div class="socialNetworkNav"> 

      <img src={placeholder}  alt="sample"></img>
      </div>
  </aside>
</header>


    )
}

export default Header;