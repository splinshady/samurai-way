import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../state/redux-store";
import Header from "./Header";

type MapStatePropsType = {

}

type MapDispatchPropsType = {

}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    render() {
        return <Header />;
    }
}

const MapStateProps = (state: stateType) => {
    return {

    }
}

connect(MapStateProps, {})(HeaderContainer)