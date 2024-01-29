import React, { useRef } from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Change to column for small screens */
    align-items: center;
  }
`;

const BioContainer = styled.div`
  width: 30%;
  margin-bottom: 2em;
  text-align: center;
  border-radius: 8px;
  border-style: ridge;



  @media only screen and (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }
`;

const BioHeader = styled.h2`
width: 70%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }
`;

const BioInfo = styled.p`
  margin-bottom: 0.5em;
`;



const EducationContainer = styled.div`
  width: 30%;

  @media only screen and (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }
`;
const EducationContainer1 = styled.div`
  width: 30%;
  margin-top: 83px;

  @media only screen and (max-width: 768px) {
    width: 100%; /* Full width on small screens */
    margin-top: 0px;
  }
`;

const EducationBox = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  border-style: ridge;
`;

const EducationYear = styled.span`
  text-decoration: underline;
`;

const EducationTitle = styled.h3`
  margin-bottom: 5px;
`;

const EducationList = styled.ul`
  margin-left: 20px;
`;



const About = () => {
    const aboutRef = useRef();
  return (
    <AboutSection ref={aboutRef} id="about" className="about animated">
      <AboutContainer>
        <BioContainer>
          <BioHeader>About Me</BioHeader>
          <br />
          <BioInfo><span>Name:</span> Uzair Farooq</BioInfo>
          <BioInfo><span>Age:</span> 23</BioInfo>
          <BioInfo><span>Location:</span> Nairobi, Kenya</BioInfo>
          <BioInfo><span>Email:</span> cyberguy2580@gmail.com</BioInfo>
          <BioInfo><span>Skills:</span><span style={{ fontWeight: 'normal' }} id="skills"></span></BioInfo>
          <BioInfo><span>Experience:</span> 4 Months</BioInfo>
          <BioInfo>
            <span>Languages spoken: </span><span style={{ fontWeight: 'normal' }} id="language"></span>
          </BioInfo>
        </BioContainer>
        <EducationContainer>
          <BioHeader>My Education</BioHeader>
          <br />
          <EducationBox>
            <EducationYear><u>2008 - 2015</u></EducationYear>
            <EducationTitle>Primary Education</EducationTitle>
            <h4>Muslim Academy</h4>
            <EducationList>
              <li>Attained a 379 marks</li>
              <li>Football Team Captain</li>
              <li>Best in Science Award</li>
              <li>Best disciplined</li>
            </EducationList>
          </EducationBox>
          <EducationBox>
            <EducationYear><u>2015 - 2019</u></EducationYear>
            <EducationTitle>Secondary Education</EducationTitle>
            <h4>Consolata School</h4>
            <EducationList>
              <li>Attained a B+ grade</li>
              <li>Served as a member of the Prefects body for a period of 3 years</li>
              <li>Awarded as the best student in 2019 (Consolata Boy Award)</li>
            </EducationList>
          </EducationBox>
          </EducationContainer>
          <EducationContainer1>
          <EducationBox>
            <EducationYear><u>2019-2020</u></EducationYear>
            <EducationTitle>Certificate in Data Science</EducationTitle>
            <h4>iLabAfrica</h4>
            <EducationList>
              <li>Completed the full certificate course</li>
              <li>Completed several data science projects</li>
              <li>Developed a Diabetes prediction system as final project (jupyter Notebook)</li>
            </EducationList>
          </EducationBox>
          <EducationBox>
            <EducationYear><u>2020 - 2024</u></EducationYear>
            <EducationTitle>Bachelors in Business Information Intelligence</EducationTitle>
            <h4>Strathmore university</h4>
            <EducationList>
              <li>Maintaining a 75 GPA</li>
              <li>Received Certificates of Excellence</li>
              <li>Developed several working systems</li>
              <li>SCESA club member</li>
            </EducationList>
          </EducationBox>
          </EducationContainer1>
        </AboutContainer>
    </AboutSection>
  );
};

export default About;
