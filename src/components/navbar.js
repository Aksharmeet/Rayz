import React, { useState } from 'react';
import styled from 'styled-components';
import Close from "../assets/Group 5.svg"
import Divide from "../assets/seperating_line.svg"
import Navburger from "../assets/Nav_mobile.svg"
import { Link } from "gatsby";

function Navbar() {
    const [nav, setNav] = useState(false);
    
 
   
  return (
      <Nav>
       
        <Nav_main nav={nav}>
            <Rayz><Link to="/">
                <h1>RAYZ</h1>
                </Link>
            </Rayz>
            <NavBurger>
                <img class="navburger_svg" onClick={() => setNav(true)} src={Navburger}></img>
            </NavBurger>
        </Nav_main>
         
        <Nav_active nav={nav}>
            <Nav_left nav={nav}>
                <ul>
                    <li><Link exact to="/Collection">
                        COLLECTION
                        </Link>
                    </li>
                    <li><Link to="/About">
                        ABOUT
                        </Link>
                    </li>
                    <li><Link to="/Contact">
                        CONTACT
                        </Link>
                    </li>
                </ul>
            </Nav_left>
            <Divider nav ={nav}>
                <div class="close-container">
                    <img class="close-svg"src={Close} onClick={()=> setNav(false)}></img>
                </div>   
                <div>
                    <img class="divider"src={Divide}></img>
                </div>
            </Divider>
        
        
            <Nav_right nav={nav}>
                <ul>
                    <li>
                        FOLLOW US
                    </li>
                    <li class="list_b"><a href='#'>
                        INSTAGRAM
                        </a>
                    </li>
                    <li class="list_b"><a href=''>
                        FACEBOOK
                        </a>
                    </li>
                    
                </ul>
                
            </Nav_right>

        </Nav_active>
    </Nav>
 
  );
}

const Nav = styled.nav`
    padding:20px;
    a{
        color:rgba(245, 238, 228, 0.8);
        text-decoration:none;
    }
    a:hover{
        text-decoration:underline;
    }
    @media (min-width:1100px){
        padding:30px;
    }
    @media (min-width:1500px){
        padding:40px;
    }
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:999;
   
   
    
    
 `

const Nav_main = styled.div`
  
    display:${({nav}) => nav ? "none" : 'flex'};
    justify-content:space-between;
    
    
    
`
const Rayz = styled.div`
    font-family:sign;
    font-size:3vmin;
    a:hover{
        text-decoration:none;
    }
`
const NavBurger = styled.div`
  cursor:pointer;
  .navburger_svg{
    width:6vmin;
  }
`
const Nav_active = styled.div`
    display:flex;
    overflow:hidden;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
   
    ul{
        list-style:none;
        font-family:copper_bold;
        font-size:4vmin;
       
    };  
   
    justify-content:space-between;
    li{
        margin:16px 0;
       
        
    };
    pointer-events:${({nav}) => nav ? "":"none"};
    
   
`
const Divider = styled.div`
.close-container{
    position:absolute;
    height:100vh;
    width:100vw;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    pointer-events:none; //as close_container is full width and height of screen to avoid confliction we gave it pointer events none
};
.close-svg{
   width:12%;
   max-width:130px;
   transition:all .3s;
   pointer-events:${({nav}) => nav ? "auto": "none"};//as opacity is used for removing the divider contaier the pointer events will become none too.
   z-index:1;
};
.close-svg:hover{
    width:14%; 
    max-width:180px;
    cursor:pointer;
};
.divider{
    position:absolute;
    display:flex;
    width:100vw;
    height:100vh;
    left:0;
    pointer-events:none; //as divider is full width and height of screen to avoid confliction we gave it pointer events none
    
};
transition: all .3s;
opacity: ${({nav}) => nav ? "1" : "0"};
`
const Nav_left = styled.div`
background:#926F34;
width:50vw;
transition: all .5s;
padding:0 10px;
@keyframes size {
    0% {
      height: 0;
    }
    100% {
      height:100%;
    }
  }
    ul{
        display:flex;
        flex-direction:column;
        padding-top:8vh;
        overflow:hidden;
        animation: ${({nav}) => nav ? "size 6s ease" : ""} ;
    };
    
    li{
        margin:16px 0;
        transition: all .3s;
    };
  
       
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(-100vw)')};
`

const Nav_right = styled.div`
background:#926F34;
width:50vw;
transition: all .3s;
padding-left: 8vw;
color:rgba(245, 238, 228, 0.8);

    .list_b{
        font-size:2vmin;
        font-family:copper_light;
        margin:5px 0;
        transition: all .6s;
        transform: ${({nav}) => nav ? "translateX(0px)" : "translateX(100VW)"};
    }
    ul{
       
        top:50vw;
        height:70vh;
        display:flex;
        flex-direction:column;
        justify-content:end;
       
    }
   
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(100vw)')};


`
export default Navbar;
