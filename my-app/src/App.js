import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />

          <Hero />

          <Skills />
          
          <WorkExperience />
          <ContactMe />
        </>
      ),
    },
    {
      path: "/skills",
      element: <><Navbar /><Skills /></>,
    },
    {
      path: "/work",
      element: <><Navbar /><WorkExperience /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><ContactMe /></>,
    },
  ]);

  return (
    <>

      
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
