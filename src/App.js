import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Soon from './pages/Soon';
import About from './pages/About';
import Skills from './pages/Skills';

function App() {

  function twitterRedirect(){
    window.open("https://twitter.com/Allenbrd", "_blank");
  }

  function redditRedirect(){
    window.open("https://www.reddit.com/user/AllenZeKriptoMan", "_blank");
  }

  function githubRedirect(){
    window.open("https://github.com/Allenbrd", "_blank");
  }

  function linkedinrRedirect(){
    window.open("https://www.linkedin.com/in/allen-bridi-aba8a5209/", "_blank");
  }

  function leetcodeRedirect(){
    window.open("https://leetcode.com/allenbrd/", "_blank");
  }

  return (
    <>
      <BrowserRouter>
        <header className='p-6 flex z-10 sm:w-full sm:bg-white sm:top-0'>
          <Link to="/" className="no-underline font-semibold text-lg cursor-pointer align-middle">@AllenBrd</Link>
          <img alt="twitter" src='/assets/imgs/twitter.svg' onClick={twitterRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt="reddit" src='/assets/imgs/reddit.svg' onClick={redditRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt='github' src='/assets/imgs/github.svg' onClick={githubRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt='linkedin' src='/assets/imgs/linkedin.svg' onClick={linkedinrRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt='leetcode'  src='/assets/imgs/leetcode_logo_icon.png' onClick={leetcodeRedirect} className='align-middle ml-5 cursor-pointer h-5 w-5 mt-1' />
          {/* <Link to="/contact" className='align-middle ml-5 cursor-pointer'> About Me</Link>
          <Link to="/contact" className='align-middle ml-5 cursor-pointer'> Skills</Link>
          <Link to="/contact" className='align-middle ml-5 cursor-pointer'> Work</Link>
          <Link to="/contact" className='align-middle ml-5 cursor-pointer'> Contact Me</Link> */}
        </header>

        <div className='sm:m-2'>
        <AnimatePresence>
            <Routes>
              <Route path='/' exact element= { <Home /> } />
              <Route path='/about' exact element= { <About /> } />
              <Route path='/skills' exact element= { <Skills /> } />
              <Route path='/work' exact element= { <Soon /> } />
              <Route path='/contact' exact element= { <Contact /> } />
            </Routes>
        </AnimatePresence>
        </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
