 import React, { useEffect, useState } from "react";
 import Tmdb from "./Tmdb";
 import MovieRow from "./components/MovieRow";
 import FeaturedMovie from "./components/FeaturedMovie";
 import Header from "./components/Header";
 import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false); //deixando o menu transparente quando nescessario.

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista de todos os filmes. 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque (originais do netflix tem mais informação que os outros.)
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
  }

  loadAll();
 }, []);

 useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

 }, []);

    return (
        <div className="page">

          <Header black={blackHeader} />

          {featuredData && 
            <FeaturedMovie item={featuredData}/>
          }

          <section className="lists">
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </section> 

          <footer>
            Direitos de imagem para Netflix.<br></br>
            Dados pegos do site themoviedb.org.<br></br>
          </footer>
          
          {movieList.length <= 0 &&
            <div className="loading">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
            </div>
          }
        </div>
    );
  }