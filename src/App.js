import Header from './header'
import Content from './content'
import Footer from './footer'
import { set, ref } from 'firebase/database'
import { dataB } from './firebaseconfig'

function App() {  

  function WriteData() {
    set(ref(dataB, `validationDB`), {
        odlawID: 'odlaw',
        wallyID: 'Wally', 
        wizardID: 'Wizard', 
        boolean: false
    });
}
WriteData()
// function WriteDataScore() {
//   set(ref(dataB, `Highscores`), [
//       {name: 'John',  time: 1 + ':' + 12 + 's', totalTime: 72 },
//   ]);
// }
// WriteDataScore()
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;
