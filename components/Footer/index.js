import Link from "next/link";

import styled from 'styled-components';


const FooterContainer = styled.div`
  background-color: white;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto;
    height: 65px;
    padding: 10px;
    border-top: 1px solid #e6e7ed;
    color: silver;
  `;

export default function Footer() {
  return (
    <FooterContainer>
          
      <p>A community art project by @frankynines - Donate: 0x2Eb9b439Ffb7dC587198e1534e465a6242192b24</p>

    </FooterContainer>
  )
};