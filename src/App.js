import React from 'react';
import Main from './modules/NMUBaseReactPage/main';
const pages = {
    home:<a>hello</a>,
    contanct:<a>world</a>,
    store:<a>this</a>,
    help:<a>is</a>
}
const content = <a>Contents</a>;
function App() {
  return (<Main pages={pages}/>
  );
}
export default App;
