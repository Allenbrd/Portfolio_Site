import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';

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

  return (
    <>
      <BrowserRouter>
        <header className='p-6 flex z-10'>
          <Link to="/" className="no-underline font-semibold text-lg cursor-pointer align-middle">@AllenBrd</Link>
          <img alt="twitter" src='/assets/imgs/twitter.svg' onClick={twitterRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt="reddit" src='/assets/imgs/reddit.svg' onClick={redditRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt='github' src='/assets/imgs/github.svg' onClick={githubRedirect} className='align-middle ml-5 cursor-pointer' />
          <img alt='linkedin' src='/assets/imgs/linkedin.svg' onClick={linkedinrRedirect} className='align-middle ml-5 cursor-pointer' />
        </header>

        <AnimatePresence>
          <Routes>
            <Route path='/' exact element= { <Home /> } />
          </Routes>
        </AnimatePresence>
      
      </BrowserRouter>
    </>
  );
}

export default App;
