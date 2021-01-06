import React from 'react';

import Shows from '../../components/Shows';

export default function Home() {
  const shows = ['1', '2', '3']

  return (
    <>
    {
      shows.map((show)=>(
        <Shows />
      ))
    }
    </>
  )
}