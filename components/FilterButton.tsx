import React from 'react';

interface IFilterButtonProps {
    name: string;
    active?: boolean;
}

const FilterButton = (props: IFilterButtonProps) => {
    return (
        <a className={["filterButton", props.active && "active"].join(" ")}>{props.name}</a>
    );
};

export default FilterButton;