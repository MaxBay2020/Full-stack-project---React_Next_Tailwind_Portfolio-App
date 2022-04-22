import {FaLaptopCode, FaDatabase} from 'react-icons/fa'

import {IProject, IService, ISkill} from './type'
import {AiOutlineApi} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";


export const services:IService[] = [
    {
        title: 'Frontend Dev',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, <b>React.js</b> and <b>Redux</b>',
        Icon: FaLaptopCode,
    },
    {
        title: 'Backend Dev',
        about: 'Handle database, server, API using <b>Express.js</b> and <b>Sanity.io</b>',
        Icon: FaDatabase,
    },
    {
        title: 'API Developer',
        about: 'I can develop robust REST API using <b>Node API</b>',
        Icon: AiOutlineApi,
    }
]



export const languages:ISkill[] = [
    {
        name: 'React',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Next',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Redux',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Sanity.io',
        level: '60%',
        Icon: BsCircle
    },
    {
        name: 'Express',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Firebase',
        level: '60%',
        Icon: BsCircle
    },
]

export const tools:ISkill[] = [
    {
        name: 'Webstorm',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Git',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Postman',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Unity',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Photoshop',
        level: '80%',
        Icon: BsCircle
    },
]

export const projects:IProject[] = [
    {
        id: 1,
        name: 'Pizza E-commerce',
        description: 'This app is a full-stack E-commerce app including admin dashboard and payment process.',
        image_path: '/images/pizza.png',
        deployed_url: 'https://youtu.be/fJbzKAejVEk',
        github_url: 'https://github.com/MaxBay2020/Full-stack-project---Nextjs_Redux_Paypeljs_MongoDB-E-Commerce-Pizza-App-',
        category: ['Next', 'MongoDB'],
        key_techs: ['React', 'Next', 'Redux', 'MongoDB', 'Papal' ]
    },

    {
        id: 2,
        name: 'Netflix Clone',
        description: 'This app is a Netflix clone app with authentication and payment process.',
        image_path: '/images/netflix.png',
        deployed_url: 'https://congs-netflix.vercel.app/',
        github_url: 'https://github.com/MaxBay2020/Full-stack-project---React_Redux_Stripe_Firebase_Netflix-App',
        category: ['React', 'Firebase'],
        key_techs: ['React', 'Redux', 'Firebase', 'Stripe' ]
    },

    {
        id: 3,
        name: 'Airbnb Clone',
        description: 'This app is a Airbnb clone with dashboard using Sanity.io and Google map.',
        image_path: '/images/airbnb.png',
        deployed_url: 'https://congsairbnb.vercel.app/',
        github_url: 'https://github.com/MaxBay2020/Full-stack-project---Nextjs-Sanity_The-Walking-Dead-Airbnb-App',
        category: ['React', 'Next', 'Sanity.io'],
        key_techs: ['React', 'Next', 'Sanity']
    },
    {
        id: 4,
        name: 'Amazon Clone',
        description: 'This app is a Amazon clone with react, redux, firebase, and PayPal.',
        image_path: '/images/amazon.png',
        deployed_url: 'https://congs-amazon.vercel.app/',
        github_url: 'https://github.com/MaxBay2020/Full-stack-project---React_Redux_Firebase_PayPal_Amazon-Clone-App',
        category: ['React', 'Firebase'],
        key_techs: ['React', 'Redux', 'Firebase', 'PayPal']
    },

    // {
    //     id: 4,
    //     name: 'Recipe Records',
    //     description: 'This app is a recipe records with dashboard using Sanity.io.',
    //     image_path: '/images/example.png',
    //     deployed_url: '',
    //     github_url: 'https://github.com/MaxBay2020/Full-stack-project---Nextjs-Sanity_Recipe-App',
    //     category: ['React', 'Next', 'Sanity.io'],
    //     key_techs: ['React', 'Next', 'Sanity']
    // },

    // {
    //     id: 5,
    //     name: 'Travelling Sites Records',
    //     description: 'This is an app to record the sites travelled to.',
    //     image_path: '/images/example.png',
    //     deployed_url: '',
    //     github_url: 'https://github.com/MaxBay2020/Full-stack-project---Nextjs-MongoDB_Meetups-website',
    //     category: ['React', 'Next', 'MongoDB'],
    //     key_techs: ['React', 'Next', 'MongoDB']
    // },

    // {
    //     id: 6,
    //     name: 'Student Course Management System',
    //     description: 'This is to manage students and courses CRUD app.',
    //     image_path: '/images/example.png',
    //     deployed_url: '',
    //     github_url: 'https://github.com/MaxBay2020/Full-stack-App---React-Express-MongoDB---Student-Course-Management-System',
    //     category: ['React', 'Express', 'MongoDB'],
    //     key_techs: ['React', 'Express', 'MongoDB']
    // },
]

