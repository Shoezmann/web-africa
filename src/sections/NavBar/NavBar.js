import React from 'react';

import {TailwindNavbar} from 'tailwind-navbar-react';

import './NavBar.scss';



const links =  [
    {
        name: "Get Fast Fibre",
        link: "./"
    },
    {
        name: "Get Fast Fibre",
        link: "./"
    },
    {
        name: "Get Fast Fibre",
        link: "./"
    },

];
class NavBar extends React.Component{
    
    

    render(){
        return (
            <div>
                <div className="bg-navy-bar  h-6 relative w-full">
                    <div className="container grid grid-cols-2 gap-8 text-right text-white">
                        <span className="">
                            Anouncement bar
                        </span>
                        <span className="">
                            Anouncement bar
                        </span>
                    </div>
                </div>
                <TailwindNavbar brand={<img src="" width="40" height="40" alt="WebAfrica" />}
                    className="py-1 bg-navbar-color relative"
                >
                    <nav>
                    <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
                        {links.map(link => {
                            return (
                                <li key="{link}">
                                    <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4" href="{link.link}">{link.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                    </nav>
                </TailwindNavbar>
            </div>

            
        )
    }
}
 
export default NavBar;

