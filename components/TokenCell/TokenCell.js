import Link from "next/link";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
  background-color: white;
  padding: 10px;

  border: 1px solid #e6e7ed;
  margin-bottom: 40px;
  width: 320px;
  height: 480px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 360px;
  overflow: hidden;
`;

const Details = styled.div`
  display: grid;
  justify-content: left;
  padding: 20px;
  margin-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Price = styled.p`
margin: 0;
`;

export default function TokenCell(image) {
  return (
    <Container>
      <Link href="/token/[id]" as={`/token/${image.image.ipfs_pin_hash}`}>
        <a>
          <ImageContainer>
          <img width={'100%'} src={`https://gateway.pinata.cloud/ipfs/${image.image.ipfs_pin_hash}`}/> 
          </ImageContainer> 
        
          <Details>
            <Title>{image.image.metadata.name}</Title>
            <Price>{image.image.metadata.keyvalues.price} ETH</Price>
          </Details>
        </a>     

      </Link>
    </Container>
  )
};

TokenCell.propTypes = {
    image: PropTypes.object
};