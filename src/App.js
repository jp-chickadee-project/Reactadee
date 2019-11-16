import React from 'react';
import Main from './modules/NMUBaseReactPage/main';
import BirdForm from './jaredComps/birdForm/index';
import Activity from './oliverComps/Activity/index';
const pages = {
    'Activity Track': <Activity></Activity>
}
function App() {
  return (<Main pages={pages}/>
  );
}
export default App;
