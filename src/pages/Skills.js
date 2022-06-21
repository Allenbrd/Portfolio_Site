import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

export class ParticlesContainer extends React.PureComponent<IProps> {
    // this customizes the component tsParticles installation
    async customInit(engine: Engine): Promise<void> {
      // this adds the preset to tsParticles, you can safely use the
      await loadSeaAnemonePreset(engine);
    }
  
    render() {
      const options = {
        preset: "seaAnemone",
      };
  
      return <Particles options={options} init={this.customInit} />;
    }
  }

export default function Skills(){

  const [position, setPosition] = useState("absolute");

   function passFirstSkill(){
    // const myTimeout = setTimeout(document.getElementById('firstSkill').style.transform = "translateY(200%)", 5000);

    document.getElementById('firstSkill').setAttribute("class", "passSlide");
     
   }

    return(
        <div id='firstSkill' className=''>
                            <ParticlesContainer className="z-0" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                        <h1 className=' text-7xl text-center hurme font-semibold text-white absolute align-middle'>Creativity is key</h1>
            </motion.div>
        </div>
    );
}