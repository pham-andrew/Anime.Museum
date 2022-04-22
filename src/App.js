import React, { useState, useEffect } from 'react';

function App() {
  const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth})

  useEffect(() => {
    function handleResize() {
      setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
        window.removeEventListener('resize', handleResize)
    }
  }) 
  
  return (
    <iframe width={dimensions.width-3} height={dimensions.height-4} src="https://www.artsteps.com/embed/625e86630af57c094377b932/1280/720" frameborder="0" allowfullscreen />
  );
}

export default App;
