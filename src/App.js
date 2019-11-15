import React from 'react';
import Main from './modules/NMUBaseReactPage/main';
import BirdForm from './jaredComps/birdForm/index';
const pages = {
    addBird: <BirdForm />
}
function App() {
  return (<Main pages={pages}/>
  );
}
export default App;
