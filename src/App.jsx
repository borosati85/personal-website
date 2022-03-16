import { AppContainer, AppWrapper } from './App.styles';
import Navbar from './components/navbar/Navbar.component';
import Introduction from './components/introduction/Introduction.component';
import About from './components/about/About.component';
import ProjectList from './components/projectList/ProjectList.component';
import Contact from './components/contact/Contact.component';
import { useContext } from 'react';
import { ThemeContext } from './context.js';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <AppContainer darkMode={darkMode}>
      <AppWrapper>
        <Navbar darkMode={darkMode}/>
        <Introduction />
        <About darkMode={darkMode} />
        <ProjectList darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </AppWrapper>
    </AppContainer>
  );
}

export default App;
