import React from 'react';


interface IDimButtonProps {
  content: string;
}

const DimButton = (props: IDimButtonProps) => {
    return (
        <button className="dimButton">
            <span>{props.content}</span>
        </button>
    );
};

export default DimButton;