import React from "react"
import { useState }  from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import arrow from "../assets/arrow.svg";
import circle from "../assets/Circle.svg";
function Slider() {
  const [count,setIndex] = useState(0);
  

  console.log(count);
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
        <Sliding style={{ transform: `translate3d(${-count * 100}vw, 0, 0)`}}>
          {data.allContentfulHome.edges.map(({node, index}) =>
            <Slide className={`${node.title.toLowerCase().replace(/\s/g, "")}_container`} key={index} count={count} style={{ right:`${index * 100}vw`}} >
              <div className="emptyDiv"></div>
              <div className="flex">
              <div className='text_container'>
              <h1>{node.title}</h1>
              <h1>{node.id}</h1>
              <p>{node.description.description}</p>
              <Explore>
            <img className={`${node.title.toLowerCase().replace(/\s/g, "")}_explore`} src={circle} alt="explore button"/>
            </Explore>
              </div>
              <img className={`${node.title.toLowerCase()}_img`} src={node.image.file.url}></img>
              </div>
             
            </Slide>
          )}
        </Sliding>
     <ArrowExplore>
          <Arrows>
            <img alt="left arrow" className="l_arrow"src={arrow} onClick={() => setIndex((prevIndex) =>prevIndex === 0 ? 2 : prevIndex - 1)}/>
            <img alt="right arrow"  className="r_arrow"src={arrow} onClick={() => setIndex((prevIndex) =>prevIndex === 2 ? 0 : prevIndex + 1)} />
          </Arrows>
        </ArrowExplore>
     </MainContainer>
  }
  ></StaticQuery>
)
}
const MainContainer = styled.div`
height:92vh;
overflow:hidden;
`
const Sliding = styled.div`
display:flex;
.chandelier_container{
  left:100vw;
  img{
    margin-top:-70px
  }
}
.floorlamps_container{
  left:200vw;
}
.tablelamp_container{
  
}
transition:all .5s;
@media(min-width:1100px){
  .chandelier_container{
    top:-100px;
    img{
      margin-top:0;
    }
  }
    .tablelamp_container{
      .text_container{
        margin-top:-50px;
      }
    }
  
}
`
const Slide = styled.div`
  position:absolute;
  text-align:center;
  left:0;
  right:0;
  width:100%;
  h1{
    font-family:copper_light;
    font-size:24px;
  }
  p{
    font-family:lucida;
    line-height:22px;
    max-width:500px;
    margin:20px auto 20px auto;
    font-size:14px;
  }
  .flex{
    display:flex;
    align-items:center;
    flex-direction:column;
  }
  img{
    width:70%;
    max-width:400px;
  }
  @media (min-width:800px){
    h1{
      font-size:28px;
    }
    p{
      line-height:24px;
      
      font-size:16px;
    }
  }
  @media (min-width:1100px){
    text-align:left;
    width:100%;
    .flex{
      width:100%;
      flex-direction:row;
      justify-content:space-between;
    }
    .text_container{
      margin-left:20px;
    }
    img{
      width:50%;
      max-width:none;
    }
    h1{
      font-size:32px;
    }
    p{
      line-height:26px;
      
      font-size:17px;
    }
  }
  @media (min-width:1400px){
    max-width:1400px;
    margin:0 auto;
  }
 
`
const ArrowExplore = styled.div`
  width:100%;
`
const Explore = styled.div`
  position:absolute;
  width:100%;
  img{
    width:25%;
    max-width:150px;
  }
  top:65vh;
  margin:0 auto;
  left:0;
  right:0;
  @media (min-width:1100px){
    top:40vh;
    left:20px;
  
    .chandelier_explore{
      position:absolute;
      top:10vw;
    }
    .tablelamp_explore{
      position:absolute;
      top:5vw;
    }
    .floorlamps_explore{
      position:absolute;
      top:5vw;
    }
    @media (min-width:1300px){
      .chandelier_explore{
        position:absolute;
        top:15vw;
      }
    }
  }
 
 
`
const Arrows = styled.div`
  position:absolute;
  top:45vh;
  right:20px;
  height:20px;
  display:flex;
  flex-direction:column;
  gap:5vh;
  img{
    cursor:pointer;
    width:3vh;
    max-width:80px;
    opacity:.7;
    transition:all .3s;
  }
  img:hover{
    opacity:1;
  }
  .l_arrow{
    transform:rotate(180deg);
  }
  @media (min-width:1100px){
    right:50px;
  }
  img{
    max-width:120px;
  }
`
export default Slider
