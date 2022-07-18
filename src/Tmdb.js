const API_KEY = 'a03519ddf80cda322f20f3e8ecc52733'; // Peguei a chave para poder acessar a API publica dos caras.
const API_BASE = 'https://api.themoviedb.org/3'; // Peguei a base da API deles pra consulta.

/*
- originais
- recomandados (trending)
- em alta (top rated)
- comedia
- terror 
- romance
- documentarios
*/

const basicFetch = async (endpoint) => {
     const req = await fetch(`${API_BASE}${endpoint}`); //Aqui eu estou rfazendo uma requisição para um serviço externo. (aqui é tipo acessar um site ... eu preciso esperar a resposta)
     const json = await req.json(); //recebendo o retorno do "req" ele vai cair nessa constante. (O await é algo como espere a resposta pra você poder ir pro proximo código.)
     return json;
} 

export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&langue=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: 'trending',
                title: 'Recomandados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) 
            }, {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?lenguage=pt-BR&api_key=${API_KEY}`)  
            }, {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) 
            }, {
                slug: 'comedy',
                title: 'Comédia',
                 items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)  
            }, {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)  
            }, {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)  
            }
        ];
    }

}