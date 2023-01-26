import { motion } from 'framer-motion';
import TechCloud from '../components/TechCloud.js';
import SkillBar from 'react-skillbars';



export default function Skills(){

    const skills = [
        { type: 'ReactJS', level: 95 },
        { type: 'Javascript', level: 85 },
        { type: 'Python', level: 75 },
        { type: 'Golang', level: 50 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 95 },
    ];

    // colors = {
    //     bar: 'red',
    //     title: {
    //       text: '#abc123',
    //       background: '#fff',
    //     },
    //   };

    const colors = {
        bar: "#BFBFBF",
        title: {
          text: "#000",
          background: "#EEEEEE"
        }
      };


    return(
        <>
            
           
                <div className='external'>
                        <div className='middle'>
                            <div className='mx-auto internal w-3/4 flex flex-row flex-wrap justify-around rounded-md'>
                            <div className="sm:p-10"></div>
                            <h1 className='w-full text-2xl text-center mb-10 font-semibold'>My Skills</h1>
                                <div className=' flex flex-row sm:block'>

                                <div className='w-1/2 sm:w-full'>
                                    <h2>Leadership, technicality, and creativity</h2>
                                    <p className='mb-10'>Using the industry's best tools is what I aimed for while working on numerous projects in software and web development, app development, UI design, game design, or even audio-visual editing.</p>
                                    <SkillBar barBackground = {'#EEEEEE'} colors={colors}  skills={skills} height="25px" />
                                    </div>

                                    <motion.div 
                                        className='w-1/2 sm:w-full'
                                        initial={{ y:25, opacity: 0 }}
                                        animate={{ y:0, opacity: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.75,
                                        }}
                                    >
                                    <TechCloud />
                                    </motion.div>
                                    
                                    


                                </div>
                                
                        </div>
                    </div>
                </div>
        </>
    );
}