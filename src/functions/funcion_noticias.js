import axios from 'axios'

const todasNoticias= async (state) => {

    const peticion= await axios.get('https://newsapi.org/v2/top-headlines?q=Cali&country=co&from=2023-01-01&to=2023-01-24&sortBy=popularity&apiKey=2bf925c1f3804dc4af2543a2337df9f7&category=sports')
    state(peticion.data.articles)
}

export{
    todasNoticias
}