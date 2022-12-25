/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import Intro from '../components/Intro';
import Features from '../components/Features';
import Detail from '../components/Detail';

export default function Landing() {
  return (
    <>
      <div className="patterTop" />
      <Intro />
      <Features />
      <Detail />
      <div className="patterBot" />
    </>
  );
}
