import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
  userStatus: string
  updateStatus: (status: string) => void
}

export default class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    statusEditMode: false,
    status: this.props.userStatus
  }

  toggleEditMode = () => {
    this.setState({
      statusEditMode: !this.state.statusEditMode
    })
  }

  onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  updateStatus = () => {
    this.toggleEditMode()
    this.props.updateStatus(this.state.status)
  }

  render() {
    return <div>
      {
        !this.state.statusEditMode
          ? <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.userStatus}</span>
          : <input autoFocus onBlur={this.updateStatus} onChange={this.onChangeStatus} value={this.state.status} type="text"/>
      }
    </div>
  }
}