import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import {listPins} from "../../../helpers/token";

export default function NFT() {

    const router = useRouter()
    const { id } = router.query

    const [metaData, setMetaData] = useState([]);


    useEffect(() => {
      if (metaData.length <= 0) {
        listPins(id).then(result => { 
          setMetaData(result.response.data.rows[0].metadata);
        });
      }

    });

    return (
      <div>
       {JSON.stringify(metaData)}
      </div>
    );
  }