import React, { useState, useEffect } from 'react';
import {listPins} from '../helpers/uploadImage';
import Link from "next/link";

export default function Home() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchPins();
  }, [images]);

  const fetchPins = async () => {
    if (images.length <= 0) {
      listPins().then(result => {
        let packag = result.response.data.rows;
        setImages(packag);
        console.log(packag);
      });
    }
  }

  return (
    <div>
      <Link href="/">
        <a> back </a>
      </Link>
      <h1> Shop NFTs </h1>
      
      {images.map((image, i )=>
      <div style={{marginBottom: 50}}>
        <Link href="/token/[id]" as={`/token/${image.ipfs_pin_hash}`}>
        <a>
          <img key={i} width={250} src={`https://gateway.pinata.cloud/ipfs/${image.ipfs_pin_hash}`}/>
        </a>
        </Link>
        <br />
        <Link href="/token/[id]" as={`/token/${image.ipfs_pin_hash}`}>
        <a>
         [ JSON Object ]
        </a>
        </Link>
      </div>
      )}
    </div>
    );
  }