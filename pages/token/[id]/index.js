import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


export default function NFT() {

    const router = useRouter()
    const { id } = router.query

    console.log(id)

    return (
      <div>
       {JSON.stringify({"Hash": id})}
      </div>
    );
  }