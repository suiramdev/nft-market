import React from "react";

interface IPopupProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const Popup = (props: IPopupProps) => {
    return (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-white px-14 py-10 drop-shadow-lg">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-semibold">
                        Are you sure ?
                    </span>
                    <span>You are about to bid 5eth.</span>
                </div>
                <div className="flex gap-8">
                    <button
                        className="rounded-lg bg-blue px-10 py-2 text-white transition-all hover:bg-darkblue"
                        onClick={props.onConfirm}
                    >
                        I'm sure
                    </button>
                    <button
                        className="rounded-lg border-2 border-gray px-5 py-2 text-gray transition-all hover:border-red hover:text-red   "
                        onClick={props.onCancel}
                    >
                        Take me back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
