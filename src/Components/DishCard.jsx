import { motion } from "framer-motion"

export const DishCard = ({ project }) => {
  return (
    <div>
        <img src={project.image} alt={project.title} className="rounded-3xl p-2"/>
        <div className="p-4 ">
            <motion.h3 initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.2}} className="mb-2 text-2xl font-bold tracking-tighter">
                {project.title}
            </motion.h3>
            <motion.p initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.6}} className="text-sm">{project.description}</motion.p>
        </div>
    </div>
  )
}
