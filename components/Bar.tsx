import React, {FunctionComponent} from 'react';
import {ISkill} from "../type"
import { motion } from "framer-motion"

const Bar:FunctionComponent<{
    data:ISkill
}> = ({data: {Icon, level, name}}) => {

    const bar_width=`${level}`
    const variants={
        initial: {width:0},
        animate:{
            width: bar_width,
            transition:{
                duration: 0.5,
                type:'spring',
                damping: 10,
                stiffness: 100,
            }
        }
    }



    return (
        <div className='text-white my-2 bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-dark-500'>
            <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
                style={{width: bar_width}}
                className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue to-green-600 ">
                <Icon className='mr-3' />
                {name}
            </motion.div>
        </div>

    );
};

export default Bar;
