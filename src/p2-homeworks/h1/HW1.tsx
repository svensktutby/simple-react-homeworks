import React from 'react';
import Message from './Message';

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Andrei',
  message: 'npm start нажимал?',
  time: '22:00',
};

function HW1() {
  const { avatar, name, message, time } = messageData;

  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={avatar}
        name={name}
        message={message}
        time={time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      {/*<hr />*/}
    </div>
  );
}

export default HW1;
