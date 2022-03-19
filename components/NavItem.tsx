import React, {FunctionComponent} from 'react';
import {Category} from '../type'

const NavItem:FunctionComponent<{value:Category | 'all', handlerFilterCategory: Function, active:string}> = ({
    value,
    handlerFilterCategory,
    active
}) => {

    let className='cursor-pointer hover:text-blue capitalize'

    if(active===value){
        className += ' text-blue'
    }

    return (
        <li
            className={className}
            onClick={()=>handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

export default NavItem;
