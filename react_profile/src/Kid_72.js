import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>こんにちは、{props.name}さん！</h2>
      <p>年齢: {props.age}歳</p>
    </div>
  );
}

export default Profile;
