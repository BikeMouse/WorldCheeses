import React from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <div className='flex'>
                <img src={new URL(`../assets/${props.coverImg}`, import.meta.url).href} className='CardImg'/>
            </div>
            <div className='text'>
                <h2>{props.country.toUpperCase()}</h2>
                <h1>{props.name}</h1>
                <h3>{props.continent.toUpperCase()}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}