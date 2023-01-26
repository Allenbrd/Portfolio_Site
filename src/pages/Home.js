import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate(); 

    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="">
        <div className='external md:mt-28 '>
            <div className='my-28'>
                <div className='internal w-full m-auto align-middle  text-center justify-center relative'>
                {/* <img alt='allen' src='/assets/imgs/allen.jpeg' className='w-36 rounded-full align-middle mx-auto my-10' /> */}
                    <div className='h1Container'><h1 className='text-6xl inline-block align-middle'><div className='words'><span>Bonjour</span><span>Hello</span><span>Hola</span><span>مرحبا</span><span>Bonjour</span></div><span className='sm:hidden'>, I'm <span className='poppins font-semibold italic'>Allen </span><img alt="wavy hand" src='/assets/imgs/wavy_hand.png' className=' ml-5 w-14 inline-block align-middle' /></span></h1></div>

                    <p className='text-3xl mt-8 max-w-2xl mx-auto'>A young student passionate about <span className='srcCodePro italic text-gg'>computer science</span>, <span className='sfPro text-gg-yellow italic'>finance</span> and <span className='inria italic text-gg-green'>entrepreneurship</span></p>
                
                    <div className='flex w-1/2 flex-wrap justify-evenly mt-10 mx-auto'>
                        {/* <Link to="/about"><button>About Me <img src='/assets/imgs/eyes.png' alt='eyes' className='w-5 inline-block align-middle ml-1' /></button></Link> */}
                        <Link to="/skills"><button>Skills <img src='/assets/imgs/bulb.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/work"><button>Work <img src='/assets/imgs/opened_folder.png' alt='opened folder' className='w-5 inline-block align-middle ml-1' /></button></Link>
                        <Link to="/contact"><button>Contact Me <img src='/assets/imgs/envelope.png' alt="envelope" className='w-5 inline-block align-middle ml-1' /></button></Link>
                    </div>

                    <motion.div 
                        className='w-full mt-10 flex flex-wrap justify-evenly md:flex-col'
                        initial={{ y:25, opacity: 0 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.75,
                        }}
                    >

                        <div onClick={() => {navigate('/techclub')}} className=' align-top inline-block rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer border-none w-3/12 md:w-1/2 sm:w-3/4 md:mb-10 mx-auto '>
                            <div className=' stcwhitebg w-full rounded-t-lg py-5 text-center'> 
                                <img alt='stc' src='/assets/imgs/stcwhite.png' className='max-h-12 h-auto p-2 w-auto opacity-90  mx-auto text-center'/>
                            </div>
                            <div className='w-full p-3'>
                                <h3>Sharing my passion</h3>
                                <p className=''>Sharing my passion for technology, programming, and entrepreneurship through the founding of the Sainte-Croix Tech Club (STC)</p>
                                <a href='/techclub' className=' text-blue-700 underline'>Learn more</a>
                            </div>
                        </div>

                        <div onClick={() => {window.open('https://about.afterstream.live/', '_blank')}} className=' align-top inline-block rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer border-none w-3/12 md:w-1/2 sm:w-3/4 md:mb-10 mx-auto '>
                            <div className=' afterstrwhitebg w-full rounded-t-lg py-5 text-center'> 
                                <img alt='afterstream' src='/assets/imgs/afterstrwhite.png' className='max-h-12 h-auto opacity-90 p-2 w-auto mx-auto text-center'/>
                            </div>
                            <div className='w-full p-3'>
                                <h3>When passion meets entrepreneurship</h3>
                                <p className=''>Afterstream is an entrepreneurial journey gathering my passion for video games, Twitch streaming, and programming sprinkled with great teamwork and leadership </p>
                                <a href='/afterstream' className=' text-blue-700 underline'>Learn more</a>
                            </div>
                        </div>

                        <div onClick={() => {window.open('https://ottoprotocol.fi/', '_blank')}} className=' align-top inline-block rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer border-none w-3/12 md:w-1/2 sm:w-3/4 md:mb-10 mx-auto '>
                            <div className=' ottobg w-full rounded-t-lg py-5 text-center'> 
                                <img alt='otto' src='/assets/imgs/otto_typo.svg' className='max-h-12 h-auto p-2   mx-auto text-center'/>
                            </div>
                            <div className='w-full p-3'>
                                <h3>Improving DeFi</h3>
                                <p className=''>Competing in the Techstars global startup competition, I am part of a team of six people developing a delta-neutral stablecoin.</p>
                                <a href='/learning' className=' text-blue-700 underline'>Learn more</a>
                            </div>
                        </div>
                        
                        {/* <div onClick={() => {navigate('/learning')}} className=' align-top inline-block rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer border-none w-3/12 md:w-1/2 sm:w-3/4 md:mb-10 mx-auto '>
                            <div className=' learningbg w-full rounded-t-lg py-5 text-center'> 
                                <img alt='stc' src='/assets/imgs/stcwhite.png' className='max-h-12 h-auto p-2 w-auto opacity-0  mx-auto text-center'/>
                            </div>
                            <div className='w-full p-3'>
                                <h3>Constant learning for constant improvement</h3>
                                <p className=''>In a world where technology is growing exponentially quicker every day, education drives me and help me staying up to date</p>
                                <a href='/learning' className=' text-blue-700 underline'>Learn more</a>
                            </div>
                        </div> */}
                            
                    </motion.div>

                </div>
            </div>

        </div>
    </motion.div>
  );
}

export default Home;
