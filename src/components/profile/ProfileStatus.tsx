import React from 'react';

type ProfileStatusPropsType = {
    userStatus: string
}

export default class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        statusEditMode: false
    }

    toggleEditMode = () => {
        this.setState({
            statusEditMode: !this.state.statusEditMode
        })
    }

    render() {
        console.log(this.props)
        return <div>
            {
                !this.state.statusEditMode
                    ? <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.userStatus}</span>
                    : <input autoFocus onBlur={this.toggleEditMode.bind(this)} value={this.props.userStatus} type="text"/>
            }
        </div>
    }
}