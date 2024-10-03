import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Quotegenarator() {
    
    const[qoute,setQoute]=useState({})

    const[loading,setLoading]=useState(true)

    const fetchquote=()=>{
        setLoading(true)
        axios.get("https://dummyjson.com/quotes")
        .then(response =>{
            let randomindex= Math.floor(Math.random()* response.data.quotes.length)
            setQoute(response.data.quotes[randomindex])
            setLoading(false)
        }).catch((error)=>{
            console.log("error ocured",error);

            setLoading(false)
        })
    }

    useEffect(()=>{
         fetchquote();
    },[])



  return (
    <div>
         

         <div style={{ textAlign: "center", marginTop: "300px" }}>
      
      {
        loading?(
            <p>..loading</p>
        ):(
            <div>
                <p>"{qoute.quote}..."</p>
                  <p>--{qoute.author}</p>

                  <button className='btn btn-info' onClick={fetchquote}>Get Another Quote</button>
            </div>
        )
      }

         </div>


    </div>
  )
}

export default Quotegenarator
