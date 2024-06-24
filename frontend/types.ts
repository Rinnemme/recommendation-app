export type gameGenre = 'RPG' | 'Action' | 'Adventure' | 'Simulation' | 'Fighting' | 'Sports' | 'Strategy' | 'FPS' | 'Platformer' | 'Survival' | 'Horror' | 'Racing'
export type combatType = 'None' | 'Turn-Based' | 'Real-Time' | 'Real-Time with Pause'
export type streamingPlatform = 'Crunchyroll' | 'Hi Dive' | 'Hulu' | 'Netflix' | 'Apple TV' | 'Disney+' | 'Amazon Prime Video' | 'Max' | 'Paramount+' | 'Peacock'
export type movieShowGenre = 'Horror' | 'Action' | 'Drama' | 'Romance' | 'Comedy' | 'Scifi' | 'Western' | 'Fantasy' | 'Crime' | 'Psychological Thriller' | 'Adventure' | 'Documentary' | 'Musical' | 'Fighting'
export type videoFormat = 'Live Action' | 'Animated'
export type episodeLength = 10 | 20 | 30 | 40 | 50 | 60

export type gameRec = {
    name: string,
    genre: gameGenre[],
    combat: combatType,
    releaseYear: number,
    price: number,
    steamLink: string,
    description: string,
    submittedBy: string
}

export type movieRec = {
    name: string,
    releaseYear: number,
    format: videoFormat,
    platform: streamingPlatform[],
    genre: movieShowGenre[],
    director: string,
    starring: string[],
    length: number,
    description: string,
    submittedBy: string
}

export type showRec = {
    name: string,
    format: videoFormat,
    releaseYear: number,
    ongoing: string,
    endYear: number | null
    platform: streamingPlatform[],
    genre: movieShowGenre[],
    episodeCount: number,
    episodeLength: episodeLength,
    description: string,
    submittedBy: string
}

export type recommendationContext = {
    movies: movieRec[] | [],
    shows: showRec[] | [],
    games: gameRec[] | [],
    dispatch: ({}) => void
}