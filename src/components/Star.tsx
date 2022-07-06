import React from "react";

function Star (props: any) {
    if (props.value === 'selected') {
        return (
            <span className="star"><b>star</b></span>
        );
    }
    return (
        <span className="star">star</span>
    );
}

export default Star;