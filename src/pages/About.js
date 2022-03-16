import { motion } from 'framer-motion';

function About(){

    function passFirstSlide(){
        document.getElementById("firstSlide").remove();
    }

    return(
        <>
            <motion.div transition={{ duration: 2 }} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ y:-100 }}>
                <div className='external bg-white'>
                    <div className='middle'>
                        <div className='internal text-center'>
                            <div id='firstSlide'>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <p className="text-lg max-w-2xl text-center mx-auto">Hi, my name is Allen, I'm 17 years old and I am in highschool. However, I have a few introduction pages for you to read on this portfolio website.
                                    So, as said in the home page, I have three passions: software development & CS, finance, and entrepreneurship.<br />This being said, let's have a look on these.</p>
                                </motion.div>
                                <br />
                                <br />
                                <br />

                                <button className="rounded-full py-2.5" onClick={passFirstSlide}>⏷</button>

                            </div>

                        </div>
                    </div>
                </div>
                zdjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br />
                zdjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br />
                zdjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br />
                zdjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br />
                zdjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br />
            </motion.div>
            
        </>
    );
}

export default About;