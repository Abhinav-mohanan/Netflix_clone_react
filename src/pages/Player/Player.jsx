
import React, { useEffect, useState } from 'react'
import "./player.css"
import back_arrow from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()

  const [apiData,setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmY5MDdjYzI3YjRjMzRhMWQ5ZWZmOGFmMjAzNjdkZCIsIm5iZiI6MTc0MjM2ODUzNS45Njg5OTk5LCJzdWIiOiI2N2RhNmYxN2IwNWM4YTM4MGZhMWVlMTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FW_BbTHRfP-qD0eFzLPRMjcLMtDhSpXXPr9Dym1_jw'
    }
  };
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

    },[])


  return (
    <>
    <div className='player'>
      <img src={back_arrow} alt="" />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name} </p>
        <p>{apiData.type}</p>
      </div>
    </div>
    </>
  )
}

export default Player