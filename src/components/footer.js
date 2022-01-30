import React from 'react';
import styled from 'styled-components';
import fb from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg"
import insta from "../assets/instagram.svg"
function  Footer() {
  return (
  <Footer_main>
        <Rayz>
            <div>
                <h2>
                    Rayz
                </h2>
            </div>
            <p>
            &#169; 2021 Rayz Indoor Lighgts. All rights reserved
            </p>

            <div>
                <img src={fb}/>
                <img src={twitter}/>
                <img src={insta}/>
            </div>
        </Rayz>
        <Collection>
            <div>
                <h2>
                    Collection
                </h2>
            </div>
            <ul>
               <li>Chandelier</li>
               <li>Table Lamp</li>
               <li>Wall Light</li>
            </ul>
        </Collection>
        <Policies>
            <div>
                <h2>
                    Policies
                </h2>
            </div>
            <ul>
                <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </Policies>
        <Hey>
            <div>
                <h2>
                    Hey!
                </h2>
            </div>
            <p>
                Enter your email to stay in the loop on new collections, pop-up shows and more.
            </p>
            <div>
            <input type="text" placeholer="Enter your email address"/>
            <input type="submit" className='subscribe' value='SUBSCRIBE'/>
            </div>
        </Hey>

  </Footer_main>
  )
}
const Footer_main = styled.div`
`
const Rayz = styled.div`
`
const Collection = styled.div`
`
const Policies = styled.div`
`
const Hey = styled.div`
`
export default  Footer;
