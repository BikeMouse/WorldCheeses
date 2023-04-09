import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import data from './data'

export default function App() {
  const cardElements = data.map((e)=>{
    return <Card
      key={e.id}
      {...e}
    />
  })
  return (
    <div>
      <Header />
      {cardElements}
    </div>
  )
}
