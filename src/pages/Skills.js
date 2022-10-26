import { motion } from 'framer-motion';

export default function Skills(){
    return(
        <>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                <div className='external'>
                        <div className='middle'>
                            <div className='mx-auto internal w-3/4 flex flex-row flex-wrap justify-around rounded-md'>
                            <div className="sm:p-10"></div>
                                <div><h1 className='text-2xl  font-semibold'>My Skills</h1>
                                
                                    <img className='m-5 w-16 inline-flex' alt='python' src='/assets/imgs/python.png' />
                                    <img className='m-5 w-28 inline-flex' alt='golang' src='/assets/imgs/golang.png' />
                                    <img className='m-5 w-20 inline-flex' alt='php' src='/assets/imgs/php.png' />
                                    <img className='m-5 w-20 inline-flex' alt='html' src='/assets/imgs/html.png' />
                                    <img className='m-5 w-20 inline-flex' alt='css' src='/assets/imgs/css.png' />
                                    <img className='m-5 w-20 inline-flex' alt='js' src='/assets/imgs/js.png' />
                                    <img className=' m-5 w-20 inline-flex' alt='react' src='/assets/imgs/reactjs.png' />
                                    <img className='m-5 w-20 inline-flex' alt='python' src='/assets/imgs/tailwindcss.png' />
                                    <img className='m-5 w-20 inline-flex' alt='tailwind' src='/assets/imgs/cassandra.png' />
                                    <img className='m-5 w-20 inline-flex' alt='mysql' src='/assets/imgs/mysql.png' />
                                    <img className='m-5 w-20 inline-flex' alt='git' src='/assets/imgs/git.png' />
                                    <img className='m-5 w-20 inline-flex' alt='figma' src='/assets/imgs/figma.png' />
                                    <img className='m-5 w-20 inline-flex' alt='premierepro' src='/assets/imgs/ppro.png' />
                                    <img className='m-5 w-20 inline-flex' alt='photoshop' src='/assets/imgs/pshop.png' />

                                    <br />

                                    <p>Using the industry's best tools is what I aimed for while working on numerous projects in software and web development, app development, UI design, game design, or even audio-visual editing.</p>

                                </div>
                                
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}