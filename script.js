'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

/* либо данную функцию можно записать так 
    function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
*/

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {  // так как пользовательт незнает программирования не поймёт почему жанр под числом 0
        const genre = prompt(`Ваш любимы жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;  // ставим -1 чтоб в наш массив записывался ответ с 1 числа тобиш 0
        /*либо можно поступить так personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);*/
    }
}

writeYourGenres();

