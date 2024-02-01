"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask,setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
   setmainTask([...mainTask,{title,desc}])
    settitle("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderedtask = <h2>No Task Available</h2>;

  if(mainTask.length>0){
   renderedtask = mainTask.map((t,i) => {
    return (
      <li key={i} className="flex items-center justify-between my-4">
      <div className="flex items-center justify-between w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-lg font-medium">{t.desc}</h6>
      </div>
      <button
      onClick = {() =>{
        deleteHandler(i)
      }}     
       className="bg-red-400 text-white  rounded font-bold p-6">Delete</button>
      </li>
  );
  });
}
  
  return (
    <>
      <h1 className='bg-black text-yellow-400 p-5 text-3xl font-bold text-center'>Oggyinder Todo list</h1>
      <form onSubmit={submitHandler}>
    <input 
    type="text"
    className="text-2xl border-zinc-800 border-4 m-8
    px-4 py-2"
    placeholder="Enter Task here"
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />
    <input 
    type="text"
    className="text-2xl border-zinc-800 border-4 m-8
    px-4 py-2"
    placeholder="Enter Task here"
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    />
    <button className="text-2xl font-bold text-yellow-400 bg-black m-8
    px-4 py-2">Add new task</button>

      </form>
      <hr/>
      <div className='p-8 bg-slate-600 '><ul>{renderedtask}
      </ul></div>
      </>
  )}


export default page
  
