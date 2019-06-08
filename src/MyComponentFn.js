import React from 'react';
import './msg-service/msg-service';

const MyComponentFn = ({hello}) => {
  return (<div>
    <p>Welcome {hello}</p>
    <msg-service src="http://localhost:8080/lib/connect.html" />
  </div>);
};

export default MyComponentFn;
