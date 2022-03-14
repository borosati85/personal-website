import { AppContainer, AppWrapper } from './App.styles';
import Navbar from './components/navbar/Navbar.component';
import Introduction from './components/introduction/Introduction.component';
import About from './components/about/About.component';
import ProjectList from './components/projectList/ProjectList.component';
import Contact from './components/contact/Contact.component';

const App = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <Navbar />
        <Introduction />
        <About />
        <ProjectList />
        <Contact />
      </AppWrapper>
    </AppContainer>
  );
}

export default App;
