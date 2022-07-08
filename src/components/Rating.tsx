import React from "react";
import Star from "./Star";

type RatingPropsType = {
    valueOfStar: 0|1|2|3|4|5
}

function Rating(props: RatingPropsType) {
    switch (props.valueOfStar) {
        case 1: {
            return (
                <div className="raiting">
                    <Star value = {true}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                </div>
            );
        }
        case 2: {
            return (
                <div className="raiting">
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                </div>
            );
        }
        case 3: {
            return (
                <div className="raiting">
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                </div>
            );
        }
        case 4: {
            return (
                <div className="raiting">
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {false}/>
                </div>
            );
        }
        case 5: {
            return (
                <div className="raiting">
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                    <Star value = {true}/>
                </div>
            );
        }
        default : {
            return (
                <div className="raiting">
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                    <Star value = {false}/>
                </div>
            );
        }
    }
}

export default Rating;