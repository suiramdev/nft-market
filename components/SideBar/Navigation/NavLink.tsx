import Link from "next/link";
import React from "react";
import classNames from "../../../utils/classNames";

interface ICategoryProps {
    href?: string;
    icon?: any;
    name: string;
    active?: boolean;
}

const NavLink = (props: ICategoryProps) => {
    return (
        <Link href={props.href || ""}>
            <a
                className={classNames(
                    "flex items-center gap-5 rounded px-5 py-2 font-semibold transition-all hover:cursor-pointer",
                    props.active
                        ? "bg-blue text-white drop-shadow-md"
                        : "hover:bg-blue hover:text-white hover:drop-shadow-md"
                )}
            >
                {props.icon}
                <span>{props.name}</span>
            </a>
        </Link>
    );
};

export default NavLink;