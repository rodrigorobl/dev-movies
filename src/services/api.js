import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params: {
        api_key: '7842e29b358940520e3c2dbfaee10ad9',
        language: 'pt-BR',
        page: 1
    }

})

export default api