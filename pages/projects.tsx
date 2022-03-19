import {useState} from 'react';
import {projects as projectsData} from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {Category} from "../type";
import { motion } from 'framer-motion';
import {fadeInUp, routeAnimation, stagger} from "../animations";
import Head from "next/head";

const Projects = () => {
    const [projects, setProjects,] = useState(projectsData)
    const [active, setActive] = useState('all')

    const [showDetail, setShowDetail] = useState<number | null>(null)

    const handlerFilterCategory = (category: Category | 'all') => {
        if(category==='all'){
            setProjects(projectsData)
            setActive(category)
            return
        }
        const newProjects = projectsData.filter(project => project.category.includes(category))
        setProjects(newProjects)
        setActive(category)
    }



    return (
        <motion.div className='px-5 py-2 overflow-y-scroll' style={{height: '65vh'}}  variants={routeAnimation} initial='initial' animate='animate'  exit='exit'>
            <Head>
                <title>
                    Web Developer | Portfolio | Projects | Cong Wang
                </title>
            </Head>

            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
            <motion.div className='grid grid-cols-12 gap-4 my-3 relative' variants={stagger} initial='initial' animate='animate'>
                {
                    projects.map((project, index) => (
                        <motion.div variants={fadeInUp} className='p-2  rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200' key={index}>
                            <ProjectCard
                                project={project}
                                showDetail={showDetail}
                                setShowDetail={setShowDetail} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    );
};

export default Projects;
