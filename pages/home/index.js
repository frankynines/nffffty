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
  margin: auto;

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

export default function Home() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchPins();
  }, [images]);

  const fetchPins = async () => {
    if (images.length <= 0) {
      listPinnedPins().then(result => {
        let packag = result.response.data.rows;
        setImages(packag);
        console.log(packag);
      });
    }
  }

  return (
    <div>
     
      <h1> Shop NFTs </h1>
      <Grid>
      {images.map((image, i )=>
        <TokenCell key={i} image={image}/>
      )}
      </Grid>
    </div>
    );
  }