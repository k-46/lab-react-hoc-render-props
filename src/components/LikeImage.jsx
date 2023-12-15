import React, { useState } from "react";
import HOC from "./HOC";

function LikeImage(props) {
  const { count, handleCount } = props;

  // const [likeImageCounter, setLikeImageCounter] = useState(0);

  // const handleLikeImageCounter = ()=>{
  //   setLikeImageCounter(likeImageCounter+1);
  // }

  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}
export default HOC(LikeImage);
