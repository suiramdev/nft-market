import React from 'react';

interface ICategoryProps {
    icon: any;
    name: string;
    active?: boolean;
}

const NavLink = (props: ICategoryProps) => {
    return (
        <a className={["navLink", props.active && "active"].join(" ")}>
            {props.icon}
            <span>{props.name}</span>
        </a>
    )
}

export default NavLink;