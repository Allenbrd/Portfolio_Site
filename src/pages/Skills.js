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
                                
                                    <img className='m-5 w-16 inline-flex' src='/assets/imgs/python.png' />
                                    <img className='m-5 w-28 inline-flex' src='/assets/imgs/golang.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/php.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/html.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/css.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/js.png' />
                                    <img className=' m-5 w-20 inline-flex' src='/assets/imgs/reactjs.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/tailwindcss.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/cassandra.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/mysql.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/git.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/figma.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/ppro.png' />
                                    <img className='m-5 w-20 inline-flex' src='/assets/imgs/pshop.png' />

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