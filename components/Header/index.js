import Link from "next/link";
import Head from 'next/head';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  background-color: white;
    display:grid;
    justify-items: left;
    align-items: center;
    grid-template-columns: auto 100px 100px 180px;
    height: 65px;
    padding: 10px;
    border-bottom: 1px solid #e6e7ed;
  `;

const LoginBtn = styled.div`
  text-align: center;
   padding: 10px;
   color: white;
   cursor: pointer;
   width: 180px;
   background-color: #6236FF;
   font-size: 12px;
   border-radius: 20px;
`;

export default function Header() {
  return (
    <HeaderContainer>
          
      <div>Frankynines.crypto</div>
      <Link href="/">
          <a>Shop NFTs</a>
      </Link>
      <Link href="/upload">
          <a>Upload</a>
      </Link>

      <LoginBtn >Connect Wallet</LoginBtn>


    </HeaderContainer>
  )
};