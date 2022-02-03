import React from "react"
import { useState }  from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import arrow from "../assets/arrow.svg";
import circle from "../assets/Circle.svg";
function Slider() {
  const [index,setIndex] = useState(0);
  
  
  
  const increment = () => {
    setIndex((prevIndex) =>
    prevIndex === 2 ? 0 : prevIndex + 1
    );
   
  }
  const decrement = () => {
    setIndex((prevIndex) =>
    prevIndex === 0 ? 2 : prevIndex - 1
  );
  }
return (
  <StaticQuery
    query={graphql`
      {
        allContentfulHome {
          edges {
            node {
              description {
                description
              }
              title
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => 
      <MainContainer>
      <SlideShow>
        <Sliding   style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
          {data.allContentfulHome.edges.map(({node, index}) =>
            <Slide className={`${node.title.toLowerCase()}_container`} key={index} >
              <div className={`${node.title.toLowerCase()}_text`}>
              <h1>{node.title}</h1>
              <p>{node.description.description}</p>
              </div>
              <div className="emptyDiv"></div>
              <img className={`${node.title.toLowerCase()}_img`} src={node.image.file.url}></img>
            </Slide>
          )}
        </Sliding>
     </SlideShow>
     <ArrowExplore>
          <Explore>
            <img src={circle} alt="explore button"/>
          </Explore>
          <Arrows>
            <img alt="left arrow" className="l_arrow"src={arrow} onClick={increment}/>
            <img alt="right arrow"  className="r_arrow"src={arrow} onClick={decrement} />
          </Arrows>
        </ArrowExplore>
     </MainContainer>
  }
  ></StaticQuery>
)
}
const MainContainer = styled.section`
  width:100%;
  display:flex;
  flex-direction:column;
  
  .chandelier_text{
    margin-bottom:-100px;
  }
  @media(min-width:700px){
    align-items:left;
   
    }
`

const SlideShow = styled.div`
  margin: 0 auto;
  @media(max-width:700px){
    margin-top:-3vw;
  }
  
`
const Sliding = styled.div`
  display:flex;
  transition:all 1s;
  align-items:top;
  text-align:center;
  width:100vw;
  
  img{
  width:80vw;
  };
  @media(min-width:700px){
    img{
      width:60vw;
      }
      height:60vh;
  }
  h1{
    font-family:copper_light;
    color:#f5eee4;
  }
  p{
    width:70vw;
    max-width:500px;
    color:#f5eee4;
  }

`
const Slide = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:100vw;
.emptyDiv{
  width:100vw;
}
@media(min-width:700px){
  flex-direction:row;
}


 
`
const ArrowExplore = styled.div`


`
const Explore = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin-bottom:50px;
  @media(max-width:700px){
    margin-top:-100px;
    }
  img{
    width:20vw;
    opacity:.6;
    transition:opacity .3s;
    max-width:150px;
  }
  img:hover{
    opacity:.8;
  }
  @media(min-width:700px){
    position:relative;
    top:-60px;
  }
  @media(min-width:700px){
    display:block;
    margin-left:60px;
    position:relative;
    top:-100px;
    margin-bottom:50px;
  }
  @media(min-width:1100px){
    top:-175px;
  }
`
const Arrows = styled.div`
  display:flex;
  flex-direction:column;
  gap:5vw;
  margin-bottom:32px;
  position:absolute;
  top:25vw;
  right:20px;
  @media(max-width:900px){
    top:400px;
   
  }
  .r_arrow{
    transform:rotate(180deg);
  }
  .l_arrow, .r_arrow{
    width:3vw;
    opacity:.4;
    transition:opacity .3s;
  }
  .l_arrow:hover, .r_arrow:hover{
    opacity:.7;
  }
  @media(min-width:900px){
    width:5vw;
    .l_arrow, .r_arrow{
      width:2vw;
    }
  }
 
`

export default Slider