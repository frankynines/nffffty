import React, { useState, useEffect } from 'react';
import {pinFileToIPFS} from '../helpers/uploadImage';
import Link from "next/link";


export default function Upload() {

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

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

      pinFileToIPFS(file);

    }
  };

  return (
    <div>
       <Link href="/">
        <a> back </a>
      </Link>
      <h1> Upload new NFT</h1>
      <fieldset>
      <legend>Select Image to Upload</legend>
      <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} />
      </fieldset>
    </div>
  );
}