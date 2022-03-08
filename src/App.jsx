import './App.css';
import Introduction from './components/introduction/Introduction.component';
import About from './components/about/About.component';
import ProjectList from './components/projectList/ProjectList.component';
import Contact from './components/contact/Contact.component';

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
