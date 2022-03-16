import { motion } from 'framer-motion';

function Contact(){

    return(
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='external'>
                    <div className='middle'>
                        <div className='internal w-1/4 sm:w-10/12 md:w-1/2 flex flex-col mx-auto rounded-md'>
                            <div className='flex justify-center mb-5 text-center'><h2 className='align-middle inline-block'> <img alt='allen' src='/assets/imgs/allen.jpeg' className='w-32 rounded-full align-middle inline-block' /> Contact Me</h2></div>
                            <form method="POST" action="https://formsubmit.co/b608776eda4a30c4f86732039263e3d0">
                                <input required name='name' maxLength="50" placeholder='Full Name' className='w-full contactInput rounded-md' />
                                <input required name='email' maxLength="50" placeholder='Email Address' className='w-full contactInput rounded-md' />
                                <textarea required name='Message' maxLength="500" placeholder='Message...' className='w-full contactInput rounded-md' />
                                <button type='submit' name='submit' className='contact-form-btn w-full rounded-md'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
        
    );
}

export default Contact;