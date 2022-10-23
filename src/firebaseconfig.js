import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyChTHzRl_f07FX3HVX1D972AAGXCdydwdM",
    authDomain: "wheres-wally-game-e40c6.firebaseapp.com",
    projectId: "wheres-wally-game-e40c6",
    storageBucket: "wheres-wally-game-e40c6.appspot.com",
    messagingSenderId: "394377660646",
    appId: "1:394377660646:web:18a4de5aab81c55f16d327",
    databaseURL: "https://wheres-wally-game-e40c6-default-rtdb.europe-west1.firebasedatabase.app",
  };
  
  const app = initializeApp(firebaseConfig);


export const dataB = getDatabase(app);