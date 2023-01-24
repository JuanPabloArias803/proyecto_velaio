import React,{useEffect,useState} from 'react'
import { todasNoticias } from '../functions/funcion_noticias'
import { clima_hoy } from '../functions/funcion_clima'

const Inicio=()=>{
    const [noticias, setNoticias]=useState(null)
    const [clima,setClima]=useState(null)
    useEffect(()=>{
        todasNoticias(setNoticias)
        clima_hoy(setClima)
    },[])
    
    return(
        <>
        {
            clima!=null?(<div key={clima.name}>
                <h2>La temperatura en Santiago de Cali es:</h2>
                <h1>{clima.temp}°</h1>
            </div>):('cargando clima...')
        }
        {noticias!=null?(noticias.map(noticia=>(
            <div key={noticia.title}>
                <a href={`${noticia.url}`}>{noticia.title}</a>
                <br></br>
                <a>{noticia.description}</a>
                <h4>{noticia.author}</h4>
            </div>
        ))):('no hay noticias')}
     
        </>
    )
}
export default Inicio