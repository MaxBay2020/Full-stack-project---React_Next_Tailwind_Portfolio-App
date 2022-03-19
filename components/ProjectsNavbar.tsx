import React, {FunctionComponent} from 'react';
import NavItem from "./NavItem";

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className='flex space-x-3 px-3 py-2 list-none overflow-x-auto'>
            <NavItem {...props} value='all' />
            <NavItem {...props} value='React' />
            <NavItem {...props} value='Next' />
            <NavItem {...props} value='Node' />
            <NavItem {...props} value='Express' />
            <NavItem {...props} value='MongoDB' />
            <NavItem {...props} value='Sanity.io' />
            <NavItem {...props} value='Firebase' />
        </div>
    );
};

export default ProjectsNavbar;
