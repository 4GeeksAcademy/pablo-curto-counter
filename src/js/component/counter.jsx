import React, { useEffect, useState } from "react";

function SimpleCounter(){

    const [contador, setContador] = useState(0);
    const [estado, setEstado] = useState('stopped')
    const handleStart = ()=>{ 
        setEstado('started') 
    }
    const handleStop =() =>{
        setEstado('stopped')
    }

    useEffect(()=>{
        if (estado === 'started'){
            setContador((contador)=> contador+1)
            const interval =  setInterval(()=>{
                setContador((contador)=> contador+1)
            }, 1000);
             return () => {clearInterval(interval)
            }
         } 
     },[estado])

    return(
        <><div className="rCounter">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="dias">Días <br></br>{Math.floor(contador/86400)%30}</div>
            <div className="horas">Horas<br></br>{Math.floor(contador/3600)%24}</div>
            <div className="minutos">Min<br></br>{Math.floor(contador/60)%60}</div>
            <div className="segundos">Sec<br></br>{Math.floor(contador/1)%60}</div>
        </div>
        <div className="botones">
            <button onClick={handleStart}>Iniciar</button>
            <button onClick={handleStop}>Parar</button>
        </div>
        <div className="noe">
            <img src="https://pbs.twimg.com/media/BU4Ore5CMAEgMnV?format=jpg&name=900x900"></img>
        </div>
        </>
        
    )
}

export default SimpleCounter