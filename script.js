'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    /* либо данную функцию можно записать так 
    function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    }*/
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {  // так как пользовательт незнает программирования не поймёт почему жанр под числом 0
            let genre = prompt(`Ваш любимы жанр под номером ${i}`);

            if (genre == null  || genre == '') {
                console.log('Вы ввели некоректные данные или вовсе не ввели ничего');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
          // ставим -1 чтоб в наш массив записывался ответ с 1 числа тобиш 0
            /*либо можно поступить так personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);*/
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    }
};







