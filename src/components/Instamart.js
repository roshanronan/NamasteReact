import React, { useState } from 'react'

const Section = ({title,description,isVisible,setIsVisible}) =>{

  return(
    <div className='border border-black m-2 p-2'>
      <h2 className='font-bold'>{title}</h2>
      { 
        isVisible 
        ? <button className='font-bold' onClick={()=>{setIsVisible()}}>Hide</button>
        : <button className='font-bold' onClick={()=>{setIsVisible()}} >Show</button>
      }
      <p>{isVisible && description}</p>
    </div>
  )
}

const Instamart = () => {
  const [showSection,setShowSection]=useState("")
  return (
    <div>
    <h1 className='font-bold text-3xl m-2 p-2'>Instamart</h1>
      <Section 
        title = {"About Instamart"} 
        description = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible = {showSection==='about'}
        setIsVisible ={()=>showSection ==='about'?setShowSection(''):setShowSection('about')}
        
        />
      <Section 
        title={"Team Instamart"}  
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible = {showSection==='team'}
        setIsVisible ={()=>showSection ==='team'?setShowSection(''):setShowSection('team')}
        />
      <Section 
        title={"Career Instamart"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible = {showSection==='career'}
        setIsVisible ={()=>showSection ==='career'?setShowSection(''):setShowSection('career')}
        />

    </div>
  )
}

export default Instamart
