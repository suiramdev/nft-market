import React from "react";
import classNames from "../utils/classNames";

interface IPopupProps {
    trigger?: boolean;
    setTrigger?: (trigger: boolean) => void;
    onConfirm?: () => void;
    onCancel?: () => void;
    title: string;
    message?: string;
    confirmText: string;
    cancelText?: string;
}

const Popup = (props: IPopupProps) => {
    return (
        <div
            className={classNames(
                "fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30",
                !props.trigger && "hidden"
            )}
        >
            <div className="animate-scaleUp flex max-w-[500px] flex-col items-center gap-12 rounded-2xl bg-white px-14 py-10 text-center drop-shadow-lg">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-semibold">
                        {props.title}
                    </span>
                    <span className="text-lg">{props.message}</span>
                </div>
                <div className="flex gap-8">
                    <button
                        className="rounded-lg bg-blue px-10 py-2 text-white transition-all hover:bg-darkblue"
                        onClick={props.onConfirm}
                    >
                        {props.confirmText}
                    </button>
                    <button
                        className="rounded-lg border-2 border-gray px-5 py-2 text-gray transition-all hover:border-red hover:text-red"
                        onClick={() => {
                            props.setTrigger && props.setTrigger(false);
                            props.onCancel && props.onCancel();
                        }}
                    >
                        {props.cancelText || "Take me back"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
