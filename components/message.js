import React from 'react';
import './message.css';

class Message extends React.Component {
    render() {
        let image="https://api.adorable.io/avatars/64/" + this.props.author + ".png";
        return (
            <div className="message">
                <div className="message-item">
                    <img className="message-img" src={image} alt="profile pic"></img>
                </div>
                <div className="message-item">
                    
                    <p><b>{this.props.author}</b> <span>{this.props.timespan}</span></p>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );

    }
}

export default Message;

