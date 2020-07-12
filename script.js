'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const raitingFilm = prompt('На сколько оцените его?', '');
    
    if (lastFilm != null && raitingFilm != null && lastFilm != '' && raitingFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = raitingFilm;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else (
    alert('Произошла ошибка')
)

console.log(personalMovieDB);
