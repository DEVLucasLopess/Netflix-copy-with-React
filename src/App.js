 import React, { useEffect, useState } from "react";
 import tmdb from "./Tmdb";
 import MovieRow from "./components/MovieRow";
 import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]); //comandos se React *estuda-los*

  useEffect(() => {
    const loadAll = async () => {
     // Pegando a lista TOTAL
     let list = await tmdb.getHomeList();
     setMovieList(list);
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
          <section className="lists">
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </section>  
        </div>
    );
  }