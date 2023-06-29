import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Input = (props) => {
  return (
    <div className="chatmsg">
        <div className='send'>
            <div className='inpText'>
            <input type="text" value={props.msg} placeholder='Type something...'  onChange={(e)=>props.typeHandler(e)}/>
            </div>
            <div class="inpbtn">
         <img style={{height:"40px" ,width:"40px",cursor:"pointer"}}src="data:image/png;base64,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" alt=""/>
         <input type="file" style={{display:"none"}} id="file"/>
         <label htmlFor='file'>
          <AttachFileIcon fontSize='large' style={{cursor:"pointer"}}/>
         </label>
         <button>
            <SendIcon fontSize='large' style={{cursor:"pointer"}} onClick={()=>props.clickHandler()}/>
         </button>
         </div>
        </div>

    </div>
  );
}

export default Input;
