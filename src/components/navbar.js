import React, { useState } from 'react';
import styled from 'styled-components';
import Close from "../assets/Group 5.svg"
import Divide from "../assets/seperating_line.svg"
import Navburger from "../assets/Nav_mobile.svg"
import { Link } from "gatsby";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [collection, setCollection] = useState(false);
 
   
  return (
      <Nav>
       
        <NavMain nav={nav}>
            <Rayz><Link to="/">
                <h1>RAYZ</h1>
                </Link>
            </Rayz>
            <NavBurger onClick={() => setNav(true)}>
                <img alt="navbar" className="navburger_svg"  src={Navburger}></img>
            </NavBurger>
        </NavMain>
         
        <NavActive nav={nav}>
            <NavLeft nav={nav}>
                {!collection ? <ul>
                    <li onClick={()=> setCollection(true)}>
                        COLLECTION
                    </li>
                    <li><Link to="/About">
                        ABOUT
                        </Link>
                    </li>
                    <li><Link to="/Contact">
                        CONTACT
                        </Link>
                    </li>
                </ul>: 
               <div className='inner_collection' collection={collection}>
                    <p onClick={() => setCollection(false)}>back</p>
                    <ul>
                        <li><Link to="/Chandelier">
                            Chandeleir
                            </Link>
                        </li>
                        <li><Link to="/Tablelamp">
                            Table Lamp
                            </Link>
                        </li>
                        <li><Link to="/Floorlamps">
                            Floor Lamp
                            </Link>
                        </li>
                    </ul>
                </div>}

            </NavLeft>
            <Divider nav ={nav}>
                <div className="close-container" onClick={()=> setNav(false)}>
                    <img alt="closing button" className="close-svg"src={Close}></img>
                </div>   
                <div>
                    <img alt="dividing line" className="divider"src={Divide}></img>
                </div>
            </Divider>
        
        
            <NavRight nav={nav}>
                <ul>
                    <li className='follow'>
                        FOLLOW US
                    </li>
                    <li className="list_b"><a href='#demo'>
                        INSTAGRAM
                        </a>
                    </li>
                    <li className="list_b"><a href='#demo'>
                        FACEBOOK
                        </a>
                    </li>
                    
                </ul>
                
            </NavRight>

        </NavActive>
    </Nav>
 
  );
}

const Nav = styled.nav`
    padding:20px;
    a{
        color:rgba(245, 238, 228, 0.8);
        text-decoration:none;
    }
    li{
        cursor:pointer;
    }
    li:hover{
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

const NavMain = styled.div`
  
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
const NavActive = styled.div`
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
const NavLeft = styled.div`
background:#c09140;
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
  @keyframes slideIn {
    0% {
      transform:translateX(-100vw);
    }
    100% {
        transform:translateX(0vw);
    }
  }

    ul{
        display:flex;
        flex-direction:column;
        padding-top:8vh;
        overflow:hidden;
        animation: ${({collection}) => collection ? '': "slideIn 0.3s ease"} ;
    };
    
    li{
        margin:16px 0;
        transition: all .3s;
    }; 
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(-100vw)')};

.inner_collection{
    p{
        font-family:copper_light;
        margin:20px auto -20px auto;
        cursor:pointer;
        transition:all .3s;
    }
    p:hover{
        color:#fff;
    }
    @keyframes slideIn {
        0% {
          transform:translateX(-100vw);
        }
        100% {
            transform:translateX(0vw);
        }
      }
    
      animation:${({collection}) => collection ? "" : "slideIn .3s ease"};

}
`

const NavRight = styled.div`
background:#c09140;
width:50vw;
transition: all .3s;
padding-left: 8vw;
color:rgba(245, 238, 228, 0.8);
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(100vw)')};
    .follow:hover{
        text-decoration:none;
        cursor:default;
    }
    .list_b{
        font-size:2vmin;
        font-family:copper_light;
        margin:5px 0;
        transition: all .6s;
        transform: ${({nav}) => nav ? "translateX(0px)" : "translateX(100vw)"};
    }
    ul{
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -ms-sticky;
        position: -o-sticky;
        top:50vh;
        height:50vh;
        display:flex;
        flex-direction:column;
        justify-content:end;
       
    }
`
export default Navbar;
