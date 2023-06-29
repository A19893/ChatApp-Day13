import React from 'react';
import { getTime as GetTime } from "./Time.jsx";
const OwnerMessage = (props) => {
  return (
    <div>
      <div className="message owner">
    <div className="messageinfo">
        <img src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais" alt="missing" className='Avatar'/>
        <span><GetTime timestamp={props?.timestamp}/></span>
    </div>
    <div className="messagecontent">
        <p>{props.msg}</p>
        <img src="" alt=""/>
    </div>
    </div>
    </div>
  );
}

export default OwnerMessage;
