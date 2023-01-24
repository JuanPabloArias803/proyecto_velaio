import axios from 'axios'

const clima_hoy= async (state) => {

    const peticion= await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=3.43722&lon=-76.5225&lang=es&units=metric&appid=684902b30c702f03ffdc3b97317f4f92')
    state(peticion.data.main)
}

export{
    clima_hoy
}