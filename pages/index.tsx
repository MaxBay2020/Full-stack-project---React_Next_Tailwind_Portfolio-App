
import {GetServerSidePropsContext} from "next";
import axios from "axios";
import ServiceCard from "../components/ServiceCard"
import {services} from "../data"
import { motion } from "framer-motion"
import {fadeInUp, routeAnimation, stagger} from "../animations"
import Head from 'next/head'

const About = () => {
    return (
        <motion.div className='flex flex-col px-6 pt-1 flex-grow' variants={routeAnimation} initial='initial' animate='animate' exit='exit' >
            <Head>
                <title>
                    Web Developer | Portfolio | About | Cong Wang
                </title>
            </Head>

            <h5 className='my-3 font-medium pb-10'>
                I am currently pursuing Advanced Diploma(Final Year)
                in Game Programming from Centennial College. I have 3+ years of experience
                in Web Development.
            </h5>
            <div className='p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100'
                 style={{marginLeft: '-1.5rem', margin: '-1.5rem'}}
            >
                <h6 className='my-3 font-semibold text-xl tracking-wide'>What I Offer?</h6>
                <motion.div className='grid gap-6 my-3 md:grid-cols-2' variants={stagger} initial='initial' animate='animate'>
                    {
                        services.map((service, index) => (
                            <motion.div
                                variants={fadeInUp}
                                key={index}
                                className='bg-gray-200 rounded-lg lg:col-span-1  dark:bg-dark-200'>
                                <ServiceCard service={service} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    );
};

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//
//     const response = await axios.get('http://localhost:3000/api/services')
//     if(response.status === 200)
//         return {
//             props: {
//                 services: response.data
//             }
//         }
// }

export default About;
