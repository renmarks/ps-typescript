interface Movie {
    title: string;
    director: string;
    yearReleased: number;
    streaming: boolean;
    length?: number; // Optional property
    logReview?: (review: string) => void; // Optional property
}

interface ReviewLogger {
    (review: string): void;
}
interface Person {
    name: string;
    email: string;
}

interface Director extends Person {
    moviesDirected: number;
}
interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void;
}

interface FavoriteItem {
    title: string;
}

export { Movie, ReviewLogger as Logger, Person, Director, CastMember, FavoriteItem};