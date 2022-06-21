import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';

function Home() {

    function repoRedirect(){
        window.open("https://github.com/Allenbrd/Portfolio_Site", "_blank");
      }

      const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ccc",
            distance: 125,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        <div className=' external'>
            <div className='middle'>
                <div className='internal w-full m-auto align-middle  text-center justify-center relative'>
                    <div className='h1Container'><h1 className='text-6xl inline-block align-middle'><div className='words'><span>Bonjour</span><span>Hello</span><span>Hola</span><span>مرحبا</span><span>Bonjour</span></div><span className='sm:hidden'>, I'm <span className='poppins font-semibold italic'>Allen </span><img alt="wavy hand" src='/assets/imgs/wavy_hand.png' className=' ml-5 w-14 inline-block align-middle' /></span></h1></div>

                    <p className='text-3xl mt-8 max-w-2xl mx-auto'>A young student passionate about <span className='srcCodePro italic text-gg'>software development</span>, <span className='sfPro text-gg-yellow italic'>finance</span> and <span className='inria italic text-gg-green'>entrepreneurship</span></p>
                
                    <div className=' mb-10 flex w-1/2 flex-wrap justify-evenly mt-10 mx-auto'>
                        <Link to="/about"><button>About Me <img src='/assets/imgs/eyes.png' alt='eyes' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/skills"><button>Skills <img src='/assets/imgs/bulb.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/work"><button>Work <img src='/assets/imgs/opened_folder.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/contact"><button>Contact Me <img src='/assets/imgs/envelope.png' alt="envelope" className='w-5 inline-block align-middle ml-1' /></button></Link>
                    </div>

                    <div className="code text-lg">This website's code is entirely available on its <a className=' underline cursor-pointer text-gg' onClick={repoRedirect} href="">github repository</a></div>

                </div>
            </div>

        </div>
    </motion.div>
  );
}

export default Home;
