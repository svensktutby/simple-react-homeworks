import React from 'react';
import classes from './Message.module.css';

type messageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message({ avatar, name, message, time }: messageDataType) {
  return (
    <div className={classes.message}>
      <div className={classes.avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={classes.bubble}>
        <span className={classes.name}>{name}</span>
        <p className={classes.text}>{message}</p>
        <span className={classes.time}>{time}</span>
      </div>
    </div>
  );
}

export default Message;
