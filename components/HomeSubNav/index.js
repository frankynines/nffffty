import React, { useState, useEffect } from 'react';
import {listPinnedPins} from '../../helpers/token';
import TokenCell from '../../components/TokenCell/TokenCell';
import styled from 'styled-components';

const Grid = styled.div`
  width: 1080px;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto auto;
  
  padding: 10px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    width: 700px;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    grid-template-columns: auto;
        align-items: center;
    }
`;

export default function HomeSubNav() {

  return (
    <div>
     
      <h1> New</h1>
      <h1></h1>
    </div>
    );
  }