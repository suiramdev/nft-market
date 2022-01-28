import React from "react";
import classNames from "../utils/classNames";

interface IFilterButtonProps {
    name: string;
    active?: boolean;
}

const FilterButton = (props: IFilterButtonProps) => {
    return (
        <a className={classNames(
            "rounded-2xl border-2 border-gray bg-blue bg-opacity-0 px-5 py-1 text-gray hover:cursor-pointer",
            props.active
                ? "border-lightblue bg-opacity-10 text-lightblue"
                : "hover:border-lightblue hover:bg-opacity-10 hover:text-lightblue"
        )}>
            {props.name}
        </a>
    );
};

export default FilterButton;