import React from "react";

const changeNames = () => {
    const names = ["Pierce", "Paige", "Gabrielle"];
    const random = Math.floor(Math.random() * 3);
    return names[random];
};

const Test = () => {
    return (
        <div>
            <p>{changeNames()}</p>
        </div>
    );
};

export default Test;