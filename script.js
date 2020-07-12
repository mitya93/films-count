const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const raitingFilm = prompt('На сколько оцените его?', '');
const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const raitingFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = raitingFilm;
personalMovieDB.movies[lastFilm1] = raitingFilm2;

console.log(personalMovieDB);
