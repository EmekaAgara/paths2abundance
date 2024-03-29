// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';
// import Organizations from './components/Organizations';
import Projects from './components/Projects';
import SubmitProject from './components/SubmitProject';
import SubmitOrganization from './components/SubmitOrganuzation';
import OrganizationsSingle from './components/OrganizationsSingle'
import ProjectsSingle from './components/ProjectsSingle';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Solutions/>
    <Projects/>
    <SubmitProject/>
    {/* <Organizations/> */}
    <SubmitOrganization/>
    <OrganizationsSingle/>
    <ProjectsSingle/>

    </>
  );
}

export default App;
