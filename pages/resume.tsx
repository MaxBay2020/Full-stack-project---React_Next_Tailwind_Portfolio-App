import React from 'react';
import {languages, tools} from "../data";
import Bar from "../components/Bar"
import { motion } from "framer-motion"
import {fadeInUp, routeAnimation} from "../animations";
import Head from "next/head";

const Resume = () => {

    return (
        <motion.div className='px-6 py-2'  variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
            <Head>
                <title>
                    Web Developer | Portfolio | Resume | Cong Wang
                </title>
            </Head>

            {/* education & experience*/}
            <div className="grid gap-6 md:grid-cols-2 ">
                <motion.div variants={fadeInUp} initial='initial' animate = 'animate' >
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Game Programming</h5>
                        <p className='font-semibold'>Advanced Diploma(2020-2022)</p>
                        <p className='my-3'>
                            I am currently pursuing Advanced Diploma(Final Year)
                            in Game Programming from Centennial College.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} initial='initial' animate = 'animate'>
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Game Developer Jr.</h5>
                        <p className='font-semibold'>Wimtach(2021-2022)</p>
                        <p className='my-3'>
                            Working as a game developer. Developed more than 10 games.
                        </p>
                    </div>
                </motion.div>

            </div>

            {/*languages & tools*/}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map((language, index) => (
                                <Bar data={language} key={index} />
                            ))
                        }

                    </div>
                </div>


                <div>
                    <h5 className="my-3 text-2xl font-bold">Tool & Software</h5>
                    <div className="my-2">
                        {
                            tools.map((tool, index) => (
                                <Bar data={tool} key={index} />
                            ))
                        }

                    </div>
                </div>


            </div>


        </motion.div>
    );
};

export default Resume;
