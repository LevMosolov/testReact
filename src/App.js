
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContents/MainContent';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SkillsMain from './components/Skills/SkillsMain';
import DialogsContainer from './components/Dialogs/DialogsContainer';
 

const App = () => {  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className='wrapperMainContent'>
          <Route path='/home' render={()=><MainContent/>} />
          <Route path='/dialogs' render={()=><DialogsContainer/>}/>
          <Route path='/skills' render={()=><SkillsMain/>} />
        </div>
      </div>
    </BrowserRouter>

  ); 
}

export default App;