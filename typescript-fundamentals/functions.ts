import {Movie} from './interfaces';

export function getAllMovies(): Movie[] {
    return [
        {title : "A New Hope", director: "George Lucas", yearReleased: 1977, streaming: true},
        {title : "The Empire Strikes Back", director: "Irvin Kershner", yearReleased: 1980, streaming: true},
        {title : "Return of the Jedi", director: "Richard Marquand", yearReleased: 1983, streaming: true},
        {title : "The Phantom Menace", director: "George Lucas", yearReleased   : 1999, streaming: false},
        {title : "Attack of the Clones", director: "George Lucas", yearReleased         : 2002, streaming: true},
        {title : "Revenge of the Sith", director: "George Lucas", yearReleased         : 2005, streaming: true},
        {title : "The Force Awakens", director: "J.J. Abrams", yearReleased         : 2015, streaming: true},                                   
        {title : "The Last Jedi", director: "Rian Johnson", yearReleased: 2017, streaming: true},
        {title : "The Rise of Skywalker", director: "J.J. Abrams", yearReleased: 2019, streaming: true} 

    ];
}
function getReview(title: string): string | number{
    if (title == "A New Hope") {
        return `An instant classic!`;
    }
    else {
        return Math.floor(Math.random() * 10); // Returns a random rating between 1 and 10
    }
}
export function PrintMovieInfo(movie: Movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);

}

export function GetTitles(director: string): string [];
export function GetTitles(director: string, streaming: boolean): string [];
export function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = getAllMovies();
    const searchResults: string[] = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    } else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}

function getMoviesbyDirector(director: string) : Promise <string []> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        
    setTimeout(() => {    
        let foundMovies: string[] = GetTitles(director);
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
async function logSearchResults(director: string) {
    let foundMovies = await getMoviesbyDirector(director);
    console.log(foundMovies);
}


export function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(3, inventory.length);
}