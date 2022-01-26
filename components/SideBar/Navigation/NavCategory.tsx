import React from 'react';

interface ICategoryProps {
    name: string;
    children: any;
}

const NavCategory = (props: ICategoryProps) => {
    return (
        <div className="mb-8">
            <div className="relative flex items-center gap-5 text-gray mb-8">
                <span>{props.name}</span>
                <div className="h-[0.1px] flex-grow bg-gray"></div>
            </div>
            <div className="flex flex-col gap-5">
                {props.children}
            </div>
        </div>
    )
}

export default NavCategory;