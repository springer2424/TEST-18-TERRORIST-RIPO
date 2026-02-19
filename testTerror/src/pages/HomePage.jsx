import React from 'react'
import { useNavigate } from 'react-router'

function HomePage() {
    const navigate = useNavigate()
    function muvToData(){
        navigate('/data')

    }
  return (
    <>
    <div>homePage</div>
    <button onClick={()=>muvToData()}>go to data</button>
    </>
  )
}

export default HomePage