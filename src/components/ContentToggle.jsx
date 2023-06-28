import React, {  useState, useRef } from 'react';

/*

want to make a 3 buttons each button add active class
    to clickedButton.index div[button[i]] container

1. make a useState
2. get the button id 
*/


const ContentToggle = ({}) => {

  const arr = ['btn1', 'btn2', 'btn3'];

    function clickHandler(key) { 
    console.log('key index: ', key.target);
    }


  return (
    <div>
    {arr.map((element, key) => (
      <div onClick={evenet => clickHandler(evenet, key)} key={key}>
      {element}
      <hr />
    </div>
    ))}
    </div>
  )
}

export default ContentToggle;
