import React from "react";
import Star from "./Star";

function Rating(props: any) {
    switch (props.valueOfStar) {
        case 1: {
            return (
                <div className="raiting">
                    <Star value={'selected'}/>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
            );
        }
        case 2: {
            return (
                <div className="raiting">
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star />
                    <Star />
                    <Star />
                </div>
            );
        }
        case 3: {
            return (
                <div className="raiting">
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star />
                    <Star />
                </div>
            );
        }
        case 4: {
            return (
                <div className="raiting">
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star />
                </div>
            );
        }
        case 5: {
            return (
                <div className="raiting">
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                    <Star value={'selected'}/>
                </div>
            );
        }
        default : {
            return (
                <div className="raiting">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
            );
        }
    }
}

export default Rating;