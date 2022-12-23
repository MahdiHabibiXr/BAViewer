import React from 'react';
import { useDispatch } from 'react-redux';



function getParam(param_name) {
  const params = new RegExp(
    `[?&]${encodeURIComponent(param_name)}=([^&]*)`,
  ).exec(window.location.href);
  if (params === null) {
    return undefined;
  }
  return decodeURIComponent(params[1]);
}

export default function Banner() {
  const dispatch = useDispatch();


  // possibly set the websocket url
  const websocket_url_from_argument = getParam('websocket_url');
  if (websocket_url_from_argument !== undefined) {
    dispatch({
      type: 'write',
      path: 'websocketState/websocket_url',
      data: websocket_url_from_argument,
    });
  }

  return (
    <div className="banner">      
      <div className="banner-logo">
        <img
          style={{ height: 30, margin: 'auto' }}
          src="https://i.ibb.co/GMWpzWc/icon.png"
          alt="The favicon."
        />
      </div>
    </div>
  );
}
