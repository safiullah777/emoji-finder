import React, { useEffect, useState } from 'react'
import './style.css'
import emojis from '../data/data.json'
export default function Page() {
    
    const [getEmoji,setEmoji]=useState([])
    const [addEmojis,setAddEmoji]=useState([])

    useEffect(()=>{
        setEmoji(emojis)
    },[])


    const searchEmoji=(e)=>{
        setEmoji(emojis.filter((data=>{
            return data.keywords.includes(e.target.value)
        })))
    }

    const addEmoji=(e)=>{
        setAddEmoji([...addEmojis,e.target.innerText])
        console.log(e.target);
    }

  return (

    <main className='main'>
        <h1 className='header'>Emoji Finder</h1>
        <div className='emojis' contentEditable={true}>
            {addEmojis.map(item=>item)}
        </div>
        
        <div className="box">
        <div className="search">
            <input type="text" onChange={searchEmoji} className='search_bar' placeholder='search emoji' />
        </div>
        <div className="emoji_box">
            {
                getEmoji.map((data,i)=>{
                    return <span key={i} onClick={addEmoji} className="emoji" >{data.symbol}</span>
                })
            }
        </div>
        </div>
    </main>
  )
}
