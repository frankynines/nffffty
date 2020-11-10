import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {pinFileToIPFS} from '../../helpers/uploadImage';
import Link from "next/link";

const Input = styled.input`
    
    padding: 5px;
    margin-bottom: 20px;
`;

export default function Upload() {

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  const handleChange = (event) => {

    if (event.target.id === "name") {
      setName(event.target.value)
    }

    if (event.target.id === "description") {
      setDescription(event.target.value)
    }

    if (event.target.id === "price") {
      setPrice(event.target.value)
    }

  }

  const handleSubmit = (event) =>{
    console.log(name)
    console.log(description)
    console.log(price)
    event.preventDefault();

    pinFileToIPFS(image, {
      name: name, 
      description: description, 
      price: price}
      )
  }


  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      // const reader = new FileReader();
      // const { current } = uploadedImage;
      // current.file = file;
      // reader.onload = e => {
      //   current.src = e.target.result;
      // };
      // reader.readAsDataURL(file);

      setImage(file)
    }
  };



  return (
    <div>
       <Link href="/">
        <a> back </a>
      </Link>
      <br />

      <form onSubmit={handleSubmit}>
      <fieldset>
      <h1> Upload new NFT</h1>

      <legend>New Collectible</legend>
      <Input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} />

      <legend for="name">Name</legend>
      <Input type="text" id="name" placeholder="e.g Some Collectible" onChange={handleChange} required />

      <legend>Description</legend>
      <Input type="text" id="description" placeholder="Optional" onChange={handleChange} />

      <legend>Put on sale</legend>
      <Input type="text" id="price" placeholder="Optional" onChange={handleChange} required /> ETH

      <br />
      <Input type="submit" value="Submit" />

      </fieldset>
      </form>

    </div>
  );
}