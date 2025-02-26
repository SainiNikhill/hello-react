import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setdata] = useState([])

  const getData= async ()=>{
    const response =  await axios.get("https://picsum.photos/v2/list");
  
    setdata(response.data)
    console.log(data[0].download_url)


  }
  return (
    <div className='p-10'>
      <button  onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded-2xl active:scale-95'>Get Data</button>
      <div className='p-5 bg-gray-950 text-white'>
        {data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-6 py-6 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>

          </div>
        })}
      </div>
    </div>
  )
}

export default App