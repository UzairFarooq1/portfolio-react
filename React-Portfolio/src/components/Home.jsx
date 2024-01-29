import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import profileImage from '../assets/images/profiledp.jpg';
import Navbar from './Navbar';
import About from './About';



//styling
const HomeContainer = styled.section`
margin-top: 50px;
text-align: center;
padding: 2em;
`;

const Dp = styled.div`
@media only screen and (max-width: 768px) {
    margin-top: 25px;
  }
`
const Image = styled.img`
width: 300px;
border-radius: 20%;
height: 300px;
border-style: double;
border-color: black;
border-width: 10px;

`
const StyledHr = styled.hr`
border: 0;
height: 1px;
background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));

`

const Info = styled.div`
max-width: 700px;
margin: 0 auto;
vertical-align: middle;
font-size: 16px;
line-height: 1.6;
`



const Home = () =>{

    useEffect(() => {
        var talents = [
          "A passionate Web Developer",
          "An experienced Python developer",
          "Skilled in Machine Learning and AI"
        ];
    
        var options = {
          strings: talents,
          typeSpeed: 50,
          backSpeed: 20,
          loop: true,
        };
    
        var typedOutput = document.getElementById('talent');

        if (typedOutput) {
          var typed = new Typed(typedOutput, options);
        }
    
        return () => {
          if (typedOutput && typed) {
            typed.destroy();
          }
        };
      }, []); 


      useEffect(() => {
        var languages = [
          "English",
          "Swahili",
          "Chinese"
        ];
    
        var options = {
          strings: languages,
          typeSpeed: 50,
          backSpeed: 20,
          loop: true,
        };
    
        var typedOutput = document.getElementById('language');
    
        if (typedOutput) {
          var typed = new Typed(typedOutput, options);
        }
    
        return () => {
          if (typedOutput && typed) {
            typed.destroy();
          }
        };
      }, []);

      const aboutRef = useRef();
    
  return (
    <>
    <Navbar />
    
    <HomeContainer ref={aboutRef} id="home">
          <Dp>
              <Image src={profileImage}  alt="profile" />
          </Dp>
          <h1>Hi there!</h1>
          <span id="talent"></span>
          <Info>
              <p>Welcome To My Personal Portfolio! I Am A Passionate And Dedicated University Student Pursuing A Degree In BBIT.
                  With A Strong Interest In Technology And Its Transformative Potential, I Am Constantly Seeking Opportunities
                  To Expand My Knowledge And Skills In This Dynamic Field. Throughout My Academic Journey, I Have Gained
                  A Solid Foundation In Areas Such As Programming Languages, Database Management And Network Fundamentals</p>
          </Info>
      </HomeContainer>
      <StyledHr />
      <About />
      <StyledHr />
      </>


  );
}

export default Home;