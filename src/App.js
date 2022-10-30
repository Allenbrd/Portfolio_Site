import { BrowserRouter, Route, Routes, Link, NavLink, Router  } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <>
      <BrowserRouter>
        <header className=' text-center p-6 flex flex-row z-10 sm:w-full sm:bg-white w-full shadow-lg top-0'>
          <div className=' inline-block w-1/2 sm:w-full'>
            <Link to="/" className="inline-block no-underline font-semibold text-lg cursor-pointer align-middle">@AllenBrd</Link>
            <img alt="twitter" src='/assets/imgs/twitter.svg' onClick={twitterRedirect} className='md:hidden sm:inline-block inline-block align-middle ml-5 cursor-pointer' />
            <img alt="reddit" src='/assets/imgs/reddit.svg' onClick={redditRedirect} className='md:hidden sm:inline-block inline-block align-middle ml-5 cursor-pointer' />
            <img alt='github' src='/assets/imgs/github.svg' onClick={githubRedirect} className='md:hidden sm:inline-block inline-block align-middle ml-5 cursor-pointer' />
            <img alt='linkedin' src='/assets/imgs/linkedin.svg' onClick={linkedinrRedirect} className='md:hidden sm:inline-block inline-block align-middle ml-5 cursor-pointer' />
          </div>
          <div className='sm:hidden inline-block float-right w-1/2 navLinks md:w-5/6 sm:w-0'>
            <NavLink to="/about" activeClassName="active">About Me</NavLink>
            <NavLink to="/skills" className='m-10 sm:m-4' activeClassName="active">Skills</NavLink>
            <NavLink to="/work" className='mr-10 sm:mr-4' activeClassName="active">Work</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact Me</NavLink>
          </div>
        </header>

        <div className='sm:m-2'>
        <AnimatePresence>
          <motion.div
          key={Router.route}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }
          }}
          >
            <Routes>
              <Route path='/' exact element= { <Home /> } />
              <Route path='/about' exact element= { <About /> } />
              <Route path='/skills' exact element= { <Skills /> } />
              <Route path='/work' exact element= { <Soon /> } />
              <Route path='/contact' exact element= { <Contact /> } />
            </Routes>
          </motion.div>
        </AnimatePresence>
        </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
