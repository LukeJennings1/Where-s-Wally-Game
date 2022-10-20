import { initializeApp } from "firebase/app";
import Header from './header'


  const firebaseConfig = {
    apiKey: "AIzaSyChTHzRl_f07FX3HVX1D972AAGXCdydwdM",
    authDomain: "wheres-wally-game-e40c6.firebaseapp.com",
    projectId: "wheres-wally-game-e40c6",
    storageBucket: "wheres-wally-game-e40c6.appspot.com",
    messagingSenderId: "394377660646",
    appId: "1:394377660646:web:18a4de5aab81c55f16d327"
  };

  const app = initializeApp(firebaseConfig);


function App() 
{

  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}

export default App;
