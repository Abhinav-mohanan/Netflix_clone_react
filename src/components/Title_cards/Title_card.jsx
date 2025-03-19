import React, { useEffect, useRef, useState } from 'react'
import "./title_card.css"
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'

const Title_card = ({title,category}) => {

const [apiData,setApiData] = useState([])
const cardsRef = useRef()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmY5MDdjYzI3YjRjMzRhMWQ5ZWZmOGFmMjAzNjdkZCIsIm5iZiI6MTc0MjM2ODUzNS45Njg5OTk5LCJzdWIiOiI2N2RhNmYxN2IwNWM4YTM4MGZhMWVlMTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FW_BbTHRfP-qD0eFzLPRMjcLMtDhSpXXPr9Dym1_jw'
  }
};



const handleWheel = (event)=>{
  event.preventDefault()
  cardsRef.current.scrollLeft += event.deltaY
}

useEffect(()=>{

  
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
    <>
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="movies" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
    </>
  )
}

export default Title_card