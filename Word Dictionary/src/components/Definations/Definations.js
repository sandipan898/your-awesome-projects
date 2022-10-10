
import React from 'react'
import './Definations.css'

const Definations = ({word , meanings , category, LightMode}) => {
  return (
    <div className='definations'>
        {
            meanings[0] && word && category === "en" && (
                <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{backgroundColor:"#fff" , borderRadius:"10px" , width:"100%"}} controls>
                    Your Browser Doesn't Support This Audio
                </audio>
            )
        }
        {
        word ==="" ? (<span className="subTitle">Start Searching A Word In Search</span>) : (
            meanings.map((mean)=>(
                mean.meanings.map((item)=>(
                

                    item.definitions.map((def)=>(
                        <div className="singleMean" style={{backgroundColor: LightMode ? "#01579b" :"white", color:LightMode ? "white" : "black"}}>
                            <span>Definations:</span>
                            <b>{def.definition}</b>
                            <hr style={{backgroundColor:"black", width:"100%"}}/>
                            {def.example && (
                                <span>
                                    <b>Example :</b>
                                    {def.example}
                                </span>
                            )}
                            {def.synonyms.length === 0 ? "" : (
                                <span>
                                <b>Synonyms :</b>
                                {def.synonyms.map((s)=>` ${s} ,`)}
                              
                              

                               
                                </span>
                            )}
                        </div>
                    ))



            ))
            ))
        )
    }</div>
  )
}

export default Definations
