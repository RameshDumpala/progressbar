import React,{ useState } from 'react'
import Progressbar from "./Progressbar"

const Parent = () => {

    const [benchMark, setBenchmark] = useState(0);
    const[ average,setAverege]=useState(0)
    const [minimum,setMinimum]=useState(0)
    

    const handleinput = (e) => { 
      const { value} = e.target;
      if (value === "") setBenchmark(0) ;
      else setBenchmark(value) ;
    };
    const handlaverage=(e)=>{
        const { value } = e.target;
        if (value === "") setAverege(0) ;
        else setAverege(value) ;
    }

 const handleminimum=(e)=>{
    const {value}=e.target;
    if(value===""){
        setMinimum(0)
    }else{
        setMinimum(value)
    }
 }
  

  return (
    <div>
        BenchMark  <input type="text" onChange={handleinput} />
        Average:  <input type="text" onChange={handlaverage} />
        Minimum: <input type="text" onChange={handleminimum} />
        <Progressbar  benchMark={benchMark}   average={average} minimum={minimum} />
        
    </div>
  )
}

export default Parent