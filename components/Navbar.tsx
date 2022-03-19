import React, {useState, useEffect, FunctionComponent} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')

    const {pathname} = useRouter()

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActiveItem('About')
                break
            case 'projects':
                setActiveItem('Projects')
                break
            case 'resume':
                setActiveItem('Resume')
                break
        }
    }, []);

    const NavItem:FunctionComponent<{
        activeItem:string,
        setActiveItem: Function,
        name: string,
        route: string
    }> = ({activeItem, name, route, setActiveItem}) => {
        return (
            activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span className='hover:text-blue' onClick={() => setActiveItem(name)}>{name}</span>
                </a>
            </Link>
        ):null)
    }



    return (
        <div className='flex justify-between px-5 py-3 mg-3'>
            <span className='font-bold text-blue text-x1 border-b-4 border-blue md:text-2xl'>{activeItem}</span>
            <div className='text-lg flex space-x-5 '>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
            </div>
        </div>
    );
};

export default Navbar;
