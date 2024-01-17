import React from 'react'
import { useState, useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const gitData = useLoaderData()
    const [gitData, setData] = useState([])
    
    useEffect(() => {
        
      fetch("https://api.github.com/Barkat0126")
      .then(Response => Response.json)
      .then(data => {
        console.log(data);
        setData(data)
      })
      
    }, [])
    

  return (
    <div className='text-center bg-gray-500 p-4 ' >Github:{gitData.followers} <img src={gitData.avatar_url} alt="git-img" /> </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const Response =   await fetch("https://api.github.com/user/Barkat0126")
//     return Response.json()

// }
