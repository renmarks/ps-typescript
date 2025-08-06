"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovies = getAllMovies;
exports.PrintMovieInfo = PrintMovieInfo;
exports.GetTitles = GetTitles;
exports.Purge = Purge;
function getAllMovies() {
    return [
        { title: "A New Hope", director: "George Lucas", yearReleased: 1977, streaming: true },
        { title: "The Empire Strikes Back", director: "Irvin Kershner", yearReleased: 1980, streaming: true },
        { title: "Return of the Jedi", director: "Richard Marquand", yearReleased: 1983, streaming: true },
        { title: "The Phantom Menace", director: "George Lucas", yearReleased: 1999, streaming: false },
        { title: "Attack of the Clones", director: "George Lucas", yearReleased: 2002, streaming: true },
        { title: "Revenge of the Sith", director: "George Lucas", yearReleased: 2005, streaming: true },
        { title: "The Force Awakens", director: "J.J. Abrams", yearReleased: 2015, streaming: true },
        { title: "The Last Jedi", director: "Rian Johnson", yearReleased: 2017, streaming: true },
        { title: "The Rise of Skywalker", director: "J.J. Abrams", yearReleased: 2019, streaming: true }
    ];
}
function getReview(title) {
    if (title == "A New Hope") {
        return `An instant classic!`;
    }
    else {
        return Math.floor(Math.random() * 10); // Returns a random rating between 1 and 10
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
function GetTitles(director, streaming) {
    const allMovies = getAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
function getMoviesbyDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject(`No movies found for that director.`);
            }
        }, 2000);
    });
    return p;
}
/*
getMoviesbyDirector('George Lucas')
    .then(titles => {
        console.log(`Found movies: ${titles}`);
        return titles.length;
    }, reason => { return 0; })
    .then(numOfMovies => console.log(`Number of movies found: ${numOfMovies}`))
    .catch(reason => console.error(`Error: ${reason}`));
*/
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundMovies = yield getMoviesbyDirector(director);
        console.log(foundMovies);
    });
}
function Purge(inventory) {
    return inventory.slice(3, inventory.length);
}
//# sourceMappingURL=functions.js.map