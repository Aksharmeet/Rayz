import React, { useState } from 'react';
import styled from 'styled-components';
import Close from "../assets/Group 5.svg"
import Divide from "../assets/seperating_line.svg"
import Navburger from "../assets/Nav_mobile.svg"
function Navbar() {
    const [nav, setNav] = useState(false);
  return (
      <Nav>
       
        <Nav_main nav={nav}>
            <Rayz>
                <h1>RAYZ</h1>
            </Rayz>
            <NavBurger>
                <img class="navburger_svg" onClick={() => setNav(true)} src={Navburger}></img>
            </NavBurger>
        </Nav_main>
         
        <Nav_active nav={nav}>
            <Nav_left nav={nav}>
                <ul>
                    <li>
                        COLLECTION
                    </li>
                    <li>
                        ABOUT
                    </li>
                    <li>
                        CONTACT
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
                    <li class="list_b">
                        INSTAGRAM
                    </li>
                    <li class="list_b">
                        FACEBOOK
                    </li>
                    
                </ul>
                
            </Nav_right>

        </Nav_active>
    </Nav>
 
  );
}
const Nav = styled.nav`

`

const Nav_main = styled.div`
    padding:20px;
    display:${({nav}) => nav ? "none" : 'flex'};
    justify-content:space-between;
    
    
    
`
const Rayz = styled.div`
    font-family:sign;
    font-size:18px;
`
const NavBurger = styled.div`
  cursor:pointer;
  .navburger_svg{
    width:30px;
  }
`
const Nav_active = styled.div`
    display:flex;
    overflow:hidden;
    height:100vh;
    position:absolute;
    top:0;
    color:#f5eee4;
    ul{
        list-style:none;
        font-family:copper_bold;
        font-size:24px;
        
    };  
   
    justify-content:space-between;
    li{
        margin:16px 0;
        transition: all .3s;
        
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
    pointer-events:none;
};
.close-svg{
   width:12%;
   max-width:130px;
   transition:all .3s;
   pointer-events:auto;
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
    pointer-events:none;
    
};
transition: all .3s;
display:${({nav}) => nav ? "block" : 'none'}; 
`
const Nav_left = styled.div`
background:#926F34;
width:50vw;
transition: all .5s;
padding:0 10px;
    ul{
        display:flex;
        flex-direction:column;
        padding-top:8vh;
       
    };
    li{
        margin:16px 0;
        transition: all .3s;
    };
    li:hover{
        color:#d5a13d;
        cursor:pointer;
    }
       
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(-100vw)')};
`

const Nav_right = styled.div`
background:#926F34;
width:50vw;
transition: all .5s;
padding-left: 50px;
    .list_b{
        font-size:12px;
        font-family:copper_light;
        margin:5px 0;
    }
    .list_b:hover{
        color:#d5a13d;
        cursor:pointer;
    }
    ul{
    
        height:70vh;
        display:flex;
        flex-direction:column;
        justify-content:end;
    }
   
transform:${({nav}) => (nav ? "translateX(0vw)" : 'translateX(100vw)')};


`
export default Navbar;
