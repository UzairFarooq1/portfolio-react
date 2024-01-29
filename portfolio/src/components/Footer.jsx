import React from 'react'
import styled from 'styled-components';


const Copyright = styled.div`
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
    height: 60px;
    margin-top: 80px;
`;
const Footer = () => {
  return (
    <Copyright>
    <p>&copy; 2024 Uzair Farooq. All rights reserved.</p>
    </Copyright>
  )
}

export default Footer