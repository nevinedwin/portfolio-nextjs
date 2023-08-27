import React from 'react'
import { motion } from 'framer-motion'
import { skills } from './static'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold 
        bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {
        duration: 1.5
      } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold 
        bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark dark:shadow-light cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        {skills.map((eachSkills, index) => (
          <Skill
            key={index}
            x={eachSkills.x}
            y={eachSkills.y}
            name={eachSkills.skill}
          />
        ))}
      </div>
    </>
  )
}

export default Skills
