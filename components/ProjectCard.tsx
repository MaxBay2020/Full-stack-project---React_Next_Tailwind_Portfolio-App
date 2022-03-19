import React, {FunctionComponent, useState} from 'react';
import {IProject} from "../type";
import {FaGithubAlt, FaProjectDiagram} from "react-icons/fa";
import {RiCloseFill} from "react-icons/ri"
import Image from 'next/image'
import { motion } from 'framer-motion';
import {fadeInUp, stagger} from "../animations";

const ProjectCard: FunctionComponent<{
    project: IProject,
    showDetail: null | number,
    setShowDetail: (id: null | number) => void
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        github_url,
        description,
        key_techs,
        id,
    },
    showDetail,
    setShowDetail
                         }) => {





    return (
        <div>
            <Image layout='responsive' width='300' height='150' src={image_path} alt={name} className='cursor-pointer'
                   onClick={() => setShowDetail(id)} />
            {/*<img src={image_path} alt={name} className='cursor-pointer' onClick={() => setShowDetail(true)} />*/}

            <p className="my-2 text-center">{name}</p>

            {
                showDetail ===id &&
                <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10
                    rounded-lg
                ">
                    <motion.div  variants={stagger} initial='initial' animate='animate'>
                        {/*<img src={image_path} alt={name} />*/}
                        <motion.div variants={fadeInUp} className='border-4 border-gray-100'>
                            <Image layout='responsive' width='300' height='150' src={image_path} alt={name} />
                        </motion.div>

                        <motion.div className='flex justify-center my-4 space-x-3' variants={fadeInUp}>
                            <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 '>
                                <FaGithubAlt /><span>Github</span>
                            </a>
                            <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 '>
                                <FaProjectDiagram /><span>Project</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                        <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
                        <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {
                                key_techs.map((tech, index) => (
                                    <span className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm' key={index}>{tech}</span>
                                ))
                            }
                        </motion.div>
                    </motion.div>

                    <button className='absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 ' onClick={() => setShowDetail(null)}>
                        <RiCloseFill size={30} />
                    </button>
                </div>
            }


        </div>
    );
};

export default ProjectCard
