import React , {useState} from 'react'


const App=()=>{
  const [username, setUser]=useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username);
    setUser('')
  }

 
  return(
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>        
        <input 
        value={username}
        onChange={(e)=>{
          setUser(e.target.value)
          
        }}
       
        className="px-4 py-3 bg-white rounded-2xl text-black text-xl m-5" type="text" placeholder='Enter your name'/>
        <button className='px-4 py-5 m-5  text-white text-xl font-semibold bg-blue-600 rounded-2xl'>Submit</button>

      </form>
    </div>
  )
}


export default App