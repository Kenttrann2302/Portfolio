import { motion } from 'framer-motion';

import { textStyles } from '../textStyles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = (props: {
  index: any,
  title: any,
  icon: any,
}) => {
  const tiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
  };

  return (
    <Tilt 
      options={tiltOptions}
      className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * props.index, 0.75)}
        className="w-full green-pink gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={props.icon} alt={props.title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{props.title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(null)}>
        <p className={textStyles.sectionSubText}>
          Introduction
        </p>
        <h2 className={textStyles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w 3x1 leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript, JavaScript, Java and Kotlin, and expertise in frameworks like React, Node.js, Three.js and SpringBoot. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard index={index} title={service.title} icon={service.icon} {...services}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');