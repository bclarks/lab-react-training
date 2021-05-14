import React from 'react';

export default function ClickablePicture() {
  const [picture, setPicture] = React.useState(false);

  function setPictureHandler() {
    return setPicture(!picture);
  }

  return (
    <div>
      <button onClick={setPictureHandler}>
        {picture ? (
          <img src="../img/persons/maxence-glasses.png" />
        ) : (
          <img src="../img/persons/maxence.png" />
        )}
      </button>
    </div>
  );
}
