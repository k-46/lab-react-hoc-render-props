import React, { useState } from "react";

const HOC = (OriginalComponent) => {
  const newComponent = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <OriginalComponent count={count} handleCount={handleCount} />
      </div>
    );
  };
  return newComponent;
};

export default HOC;
