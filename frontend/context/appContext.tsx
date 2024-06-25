"use client"

import { createContext, useReducer } from 'react'
import { gameRec, movieRec, showRec, recommendationContext } from '../types'

const emptyContext:recommendationContext = {
    games: [],
    movies: [],
    shows: [],
    dispatch: ({}) => {}
}

export const recContext = createContext<recommendationContext>(emptyContext)

export const recReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'SET_GAMES': 
            return {...state, games: action.payload}
        case 'SET_MOVIES':
            return {...state, movies: action.payload}
        case 'SET_SHOWS':
            return {...state, shows: action.payload}
        case 'ADD_GAME':
            return {...state, games: [...state.games, action.payload]}
        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}
        case 'ADD_SHOW':
            return {...state, shows: [...state.shows, action.payload]}
        default: 
            return state
    }
}

export const RecContextProvider = ({
    children, games, movies, shows
  }: Readonly<{
    children: React.ReactNode;
    games: gameRec[];
    movies: movieRec[];
    shows: showRec[];
  }>) => {
    const [state, dispatch] = useReducer(recReducer, {games: games, movies: movies, shows: shows})
    return (
        <recContext.Provider value = {{...state, dispatch}}>
            {children}
        </recContext.Provider>
    )
}

