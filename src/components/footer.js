import React from 'react';
import styled from 'styled-components';
import fb from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg"
import insta from "../assets/instagram.svg"
import {Link} from "gatsby";

function  Footer() {
  return (
  <Footer_main>
        <Rayz>
            <div>
                <h2 className='rayz'>
                    RAYZ
                </h2>
            </div>
            <div>
            <p className='rayz_p'>
            &#169; 2021 Rayz Indoor Lights. All rights reserved
            </p>
            </div>

            <div className='social'>
                <a href='#'><img src={fb}/></a>
                <a href='#'><img src={twitter}/></a>
                <a href='#'><img src={insta}/></a>
            </div>
        </Rayz>
        <Collection>
            <div>
                <h2>
                    Collection
                </h2>
            </div>
            <ul>
               <li><Link to="/Chandelier"> Chandelier</Link></li>
               <li><Link to="/Table_Lamp">Table Lamp</Link></li>
               <li><Link to="/Wall_Light">Wall Light</Link></li>
            </ul>
        </Collection>
        <Policies>
            <div>
                <h2>
                    Policies
                </h2>
            </div>
            <ul>
                <li><Link to="/Privacy_Policy/">Privacy & Policy</Link></li>
                <li><Link to="/Terms_Conditions/">Terms & Conditions</Link></li>
            </ul>
        </Policies>
        <Hey>
            <div>
                <h2>
                    Hey!
                </h2>
            </div>
            <p className="hey_p">
                Enter your email to stay in the loop on new collections, pop-up shows and more.
            </p>
            <div>
            <input   type="text" placeholder="Enter your email address"/>
            <input type="submit" className='subscribe' value='SUBSCRIBE'/>
            </div>
        </Hey>

  </Footer_main>
  )
}
const Footer_main = styled.div`
    padding:20px;
    padding-bottom:100px;
    min-height:360px;
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    background:#101010;
    flex-wrap:wrap;
    flex:grow;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
  
    h2{
        font-family:copper_light;
        font-size:2.5vmin;
        margin-bottom:32px;
    }
    ul{
        list-style:none;
        li{
            margin:16px 0;
        }
    }
    p{
        color:rgba(245, 238, 228, 0.7);
        font-family:system-ui;
        font-size:1.8vmin;
        letter-spacing:1px;
    }
    a{
        color:rgba(245, 238, 228, 0.7);
        text-decoration:none;
        font-family:system-ui;
        font-size:1.8vmin;
        letter-spacing:1px;
    }
    a:hover{
        color:rgba(245, 238, 228, 0.8);
        text-decoration:underline;
    }
    @media (max-width:637px){
        flex-direction:column;
        
        h2{
            font-size:16px;
            margin-bottom:32px;
        }
        p{
            font-size:13px;
            letter-spacing:1px;
        }
        a{
            font-size:13px;
            letter-spacing:1px;
        }
    }
  
    @media (min-width:1100px){
        padding:30px;
    };
    @media (min-width:1500px){
        padding:40px;
    };
    
`
const Rayz = styled.div`
    padding:10px;
    max-width:300px;
    margin-bottom:32px;
    .rayz{
        font-family:sign;
        font-size:4vmin;
    }
    .rayz_p{
        margin:0 0 32px 0;
        line-height:3vmin;
    }
    .social{
        display:flex;
        width:100px;
        max-width:100px;
        justify-content:space-between;
    }
    @media (max-width:637px){
       .rayz{
        font-size:26px;
        }
    }
    
   
`
const Collection = styled.div`
    padding:10px;
    min-width:200px;
    margin-bottom:32px;
    @media(max-width:739px){
        position:relative;
        right:100px;
        
    }
    @media(max-width:637px){
        position:relative;
        right:0;
        
    }
   
   
`
const Policies = styled.div`
    padding:10px;
    min-width:200px;
    margin-bottom:32px;
`
const Hey = styled.div`
    padding:10px;
    width:300px;
    min-width:200px;
    .hey_p{
        margin:20px 0;
        line-height:3vmin;
    };
    .input_container{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
    };
    input{
        background:#101010;
        color:rgba(245, 238, 228, 0.7);
    }
    input[type=text]{
        width:100%;
        height:30px;
        border:1px solid rgba(245, 238, 228, 0.7);
        font-family:system-ui;
        font-size:1.8vmin;
        letter-spacing:1px;
        padding:20px
    }   
    input[type=submit]{
        border-style:none;
        margin-top:16px;
        font-family:copper_light;
        font-size:1.5vmin;
        width:contain;
        cursor:pointer;
    }
    input[type=text]:focus{
        outline:none;
        box-shadow: 0 0 0 2px  rgba(245, 238, 228, 0.7);
    }
    input[type=submit]:hover{
        color:rgba(245, 238, 228, 0.9);
       
    }
    @media (max-width:637px){
        input[type=text]{
            font-size:14px;
            padding:20px
        }  
        input[type=submit]{
            font-size:11px;
        } 
    }
  
`
export default  Footer;
