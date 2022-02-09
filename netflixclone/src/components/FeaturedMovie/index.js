import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    let description = item.overview

    if(description.length > 300){
        description = description.substring(0, 300)+ '...'
    }

    item.genres.forEach((genre) => {
        genres.push(genre.name);
    })

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <ul className="featured--info">
                        <li className="featured--points">{item.vote_average} pontos</li>
                        <li className="featured--year">{firstDate.getFullYear()}</li>
                        <li className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}</li>
                    </ul>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchButton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--myListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>{genres.length !== 0 ? `Gêneros:` : ""}</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}