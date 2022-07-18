 import React, { useEffect, useState } from "react";
 import Tmdb from "./Tmdb";
 import MovieRow from "./components/MovieRow";
 import FeaturedMovie from "./components/FeaturedMovie";
 import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]); //comandos se React *estuda-los*
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
  }

  loadAll();
 }, []);

    return (
        // header
        // Destaque
        // As listas
        // Rodapé
        //estudar o ".map" comandos React. 

        <div className="page">
          {featuredData && 
            <FeaturedMovie item={featuredData}/>
          }

          <section className="lists">
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </section>  
        </div>
    );
  }