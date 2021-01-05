import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import {listPins, removePinFromIPFS} from "../../../helpers/token";
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1080px;
  background-color: white;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  justify-items: center;
  margin: auto;
  height: 100%;

  @media screen and (max-width: 640px) {
        display: block;
  }
`;

const Image = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const MetaDiv = styled.div`
  padding: 20px;
`;


const ButtonPrimary = styled.div`
   text-align: center;
   padding: 12px;
   color: white;
   cursor: pointer;
   width: 260px;
   background-color: #6236FF;
   margin-bottom: 10px;
   @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const ButtonSecondary = styled.div`
   text-align: center;
   padding: 12px;
   color: #6236FF;
   cursor: pointer;
   border: 1px solid #6236FF;
   margin-bottom: 10px;
   width: 260px;
   @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const Price = styled.span`
  color: grey;
  margin-left: 20px;
`;



export default function NFT() {

    const router = useRouter()
    const { id } = router.query

    const [metaData, setMetaData] = useState(null);

    useEffect(() => {
        listPins(id).then(result => { 
          if (result) {
            setMetaData(result.response.data.rows[0]);
            console.log(metaData);
          }
        });
      
    }, metaData);

    const unPinPin = (hash) => {
        removePinFromIPFS(id).then( result => {
          console.log(result)
        });
    }

    if (metaData) {
      return (
        <Container>
          <Image>
          <img width={"100%"} src={`https://gateway.pinata.cloud/ipfs/${metaData.ipfs_pin_hash}`} />
          </Image>
          <MetaDiv>
          <h1>{metaData.metadata.keyvalues.name}</h1>
          <h2>{metaData.metadata.keyvalues.price} ETH <Price>${metaData.metadata.keyvalues.price * 420}</Price></h2>
          
          <br />
          <h3>Description</h3>
          <p>{metaData.metadata.keyvalues.description}</p>

          <h3>Additional Details</h3>
          <ul>
            <li>This is a signed and limited edition digital creation.</li>
            <li>You're purchasing the full non-commercial rights to the creation.</li>
            <li>All sales are final.</li>
          </ul>


          <ButtonPrimary>Purchase NFT</ButtonPrimary>
          <ButtonSecondary >Delete NFT</ButtonSecondary>

          </MetaDiv>
        </Container>
      );
    } else {
      return ( <></> );
    };

  }