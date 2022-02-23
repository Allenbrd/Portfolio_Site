import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='external'>
            <div className='middle'>
                <div className='internal w-full m-auto align-middle  text-center justify-center relative'>
                    <div className='h1Container'><h1 className='text-6xl inline-block align-middle'><div className='words'><span>Bonjour</span><span>Hello</span><span>Hola</span><span>مرحبا</span><span>Bonjour</span></div><span className='sm:hidden'>, I'm <span className='poppins font-semibold italic'>Allen </span><img alt="wavy hand" src='/assets/imgs/wavy_hand.png' className=' ml-5 w-14 inline-block align-middle' /></span></h1></div>

                    <p className='text-3xl mt-8 max-w-2xl mx-auto'>A young student passionate about <span className='srcCodePro italic text-gg'>software development</span>, <span className='sfPro text-gg-yellow italic'>finance</span> and <span className='inria italic text-gg-green'>entrepreneurship</span></p>
                
                    <div className='flex w-1/2 flex-wrap justify-evenly mt-10 mx-auto'>
                        <Link to="/about"><button>About Me <img src='/assets/imgs/eyes.png' alt='eyes' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/skills"><button>Skills <img src='/assets/imgs/bulb.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/work"><button>Work <img src='/assets/imgs/opened_folder.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/contact"><button>Contact Me <img src='/assets/imgs/envelope.png' alt="envelope" className='w-5 inline-block align-middle ml-1' /></button></Link>
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
  );
}

export default Home;
