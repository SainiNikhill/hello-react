import React from 'react'

const Card = (props) => {
    console.log(props.user)
  return (
    <div className="bg-white  inline-block text-center rounded mr-4 p-1">
      <img
        className="mx-auto mt-2 h-28 w-28 rounded-full mb-3"
        src={props.photo}
        alt=""
      />
      <h1 className="text-2xl font-semibold mb-3">{props.name}</h1>
      <h4 className='text-blue-400'>{props.profession}</h4>
      <h2>
        {props.city},{props.age}
      </h2>
      <button className=" px-2 mt-5 mb-2 bg-emerald-700 text-white rounded font-medium">
        Add friend
      </button>
    </div>
  );
}

export default Card