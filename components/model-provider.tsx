"use client";

import React, { useEffect } from 'react'
import ProModel from '@/components/pro-model';

const ModelProvider = () => {
    const [isMounted, setIsMounted] = React.useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);
    if (!isMounted) return null;
  return (
    <>
        <ProModel/>
    </>
  )
}

export default ModelProvider