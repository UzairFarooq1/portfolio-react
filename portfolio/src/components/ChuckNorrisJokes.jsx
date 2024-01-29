import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';


const JokesContainer = styled.div`

  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const JokeText = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const JokeButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error.message);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleClick = () => {
    fetchJoke();
  };

  const jokesRef = useRef();
  return (
    <JokesContainer id='jokes' ref={jokesRef}  className="jokes animated">
      <h2>Chuck Norris Jokes</h2>
      <JokeText>{joke ? joke : 'Loading joke...'}</JokeText>
      <JokeButton onClick={handleClick}>Want to hear another Joke?</JokeButton>
    </JokesContainer>
  );
};

export default ChuckNorrisJokes;
