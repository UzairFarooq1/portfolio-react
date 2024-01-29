import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import project1 from '../assets/images/project01.jpg';
import project2 from '../assets/images/project02.jpg';
import project3 from '../assets/images/project03.png';
import project4 from '../assets/images/project04.jpg';
import project5 from '../assets/images/project05.jpg';
import project6 from '../assets/images/project06.png';


const ProjectsContainer = styled.section`
  padding: 2em;
`;

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(50%);
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    filter: blur(0);
    opacity: 1;
  }
`;

const ProjectCard = styled.div`
  width: calc(30% - 20px);
  border: 2px solid #131313;
  border-style: ridge;
  box-shadow: 5px 5px 8px rgba(46, 49, 51, 0.75);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  margin-bottom: 20px;
  &.animated {
    animation: ${slideInFromRight} 1.5s ease-out;
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    width: 70%; /* Full width on small screens */
    margin: 0 auto; /* Center horizontally */
    max-height: 500px
  }
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensure the image covers the entire container */
  border-bottom: 2px solid #000000;
  border-radius: 8px;
`;

const Content = styled.div`
  padding: 15px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;



const Projects = () => {
  const projectsRef = useRef();

  return (
    <ProjectsContainer ref={projectsRef} id="projects" className="projects animated">
      <h1 style={{textAlign: 'center'}}>My Projects</h1>
      <br />
      <ProjectCards>
        {/* Project 1 */}
        <ProjectCard className="animated">
          <ProjectCardImage src={project1} alt="Project 1" />
          <Content>
            <ProjectTitle>Space Dodger</ProjectTitle>
            <ProjectDescription>A Unity 3D Space Dodger game</ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/Spacedodger" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>
  {/* Project 2 */}
  <ProjectCard className="animated">
          <ProjectCardImage src={project2} alt="Project 2" />
          <Content>
            <ProjectTitle>TicTacToe</ProjectTitle>
            <ProjectDescription>A Kotlin-based TicTacToe multiplayer, singleplayer, and AI player game</ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/TicTacToe" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>

        {/* Project 3 */}
        <ProjectCard className="animated">
          <ProjectCardImage src={project3} alt="Project 3" />
          <Content>
            <ProjectTitle>Steganography</ProjectTitle>
            <ProjectDescription>A Python Steganography system to hide data in texts, images, and audios(.wav)</ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/Steganography" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>

        {/* Project 4 */}
        <ProjectCard className="animated">
          <ProjectCardImage src={project4} alt="Project 4" />
          <Content>
            <ProjectTitle>Super Mario 2D game</ProjectTitle>
            <ProjectDescription>A super mario 2D game using python (Run on Pycharm)</ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/superMario" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>

        {/* Project 5 */}
        <ProjectCard className="animated">
          <ProjectCardImage src={project5} alt="Project 5" />
          <Content>
            <ProjectTitle>Diabetes Prediction</ProjectTitle>
            <ProjectDescription>A web-based diabetes system coded in python</ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/Diabetes-Prediction-System" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>

        {/* Project 6 */}
        <ProjectCard className="animated">
          <ProjectCardImage src={project6} alt="Project 6" />
          <Content>
            <ProjectTitle>Django Ecommerce</ProjectTitle>
            <ProjectDescription>
              An IT equipment sales E-commerce website integrated with Association Rule mining for bundle recommendations
            </ProjectDescription>
            <ProjectLink href="https://github.com/UzairFarooq1/Brainstorm" target="_blank">
              Read More
            </ProjectLink>
          </Content>
        </ProjectCard>
      </ProjectCards>
      <LoadMoreButton onClick={() => window.open('https://github.com/UzairFarooq1', '_blank')}>
      Load more
      </LoadMoreButton>
    </ProjectsContainer>
  );
};

export default Projects;
