import React from 'react'
import Card from './card'

export default function ListCard() {
  return (
    <div  className="grid grid-cols-4 gap-4 container mx-auto">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  )
}
