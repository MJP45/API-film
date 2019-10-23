import { Person, sum } from './sums/sum';
import { cloneNode } from '@babel/types';

const url = `http://www.omdbapi.com/?s=war&apikey=ed344e9d`

export interface IMovies {
  Title: string,
  Year: number,
  Poster: string,
}

export interface IMoviesResponse {
  Search: IMovies[],
}

const buildList = (data: IMoviesResponse) => {
  const ul = document.getElementsByTagName("ul")[0];
    data["Search"].forEach((movie) => {
      let li = document.createElement("li");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let img = document.createElement("img");
      h2.innerHTML = `${movie.Title}`;
      p.innerHTML = `${movie.Year}`;
      img.src = `${movie.Poster}`;
      li.append(h2, p, img);
      ul.append(li);
      console.log(movie);
    });
    
}
fetch(url)
.then((response) => response.json())
.then((data) => buildList(data))
.catch((error) => {
    console.log(error);
});


const searchButton = document.getElementById("search-button");