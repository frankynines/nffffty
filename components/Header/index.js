import Link from "next/link";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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

export default function Header({wallet, action}) {
  console.log(wallet)


  return (
    <HeaderContainer>
          
      <div>Frankynines.crypto</div>
      <Link href="/">
          <a>Shop NFTs</a>
      </Link>
      <Link href="/upload">
          <a>Upload</a>
      </Link>

      {wallet ? 
        <LoginBtn>{wallet}</LoginBtn>
      :
        <LoginBtn onClick={action}>Connect Wallet</LoginBtn>
      }

    </HeaderContainer>
  )
};

Header.propTypes = {
  wallet: PropTypes.string,
  action: PropTypes.func.isRequired
};





