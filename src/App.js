import { StyledGlobals } from './Components/StyledComponents/Globals.Styled';
import Router from './Components/Router/Router'
import Header from './Components/Partials/Header'
import FlashMessages from './Components/FlashMessages/FlashMessages'
import './index.css'




function App() {

  return (
   
    <StyledGlobals>
      <FlashMessages/>
       <div className='App'>
      <Header/>
      <Router/>
      </div>
    </StyledGlobals>
   
  );
}

export default App;
