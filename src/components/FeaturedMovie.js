import React from "react";
import './FeaturedMovie.css';
    
export default ({item}) => {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover', //dependendo do tamanho do monitor do usuario a imagem vai aumentar ou diminuir
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div>
                {item.original_name}
            </div>
            FILME EM DESTAQUE
        </section>
    );
}