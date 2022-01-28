import React from "react";
import classNames from "../utils/classNames";

interface IPopupProps {
    trigger?: boolean;
    children: any;
    className?: string;
}

const Popup = (props: IPopupProps) => {
    return (
        <div
            className={classNames(
                "fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30",
                !props.trigger && "hidden"
            )}
        >
            <div className={classNames(
                "flex max-w-[500px] animate-scaleUp flex-col items-center gap-12 rounded-2xl bg-white px-14 py-10 text-center drop-shadow-lg",
                props.className
            )}>
                {props.children}
            </div>
        </div>
    );
};

export default Popup;
