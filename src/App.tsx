import React from 'react';
import Carousel from './Carousel';


const App: React.FC = () => {
  return (
    <Carousel>
        <img src="https://picsum.photos/200/300" alt="random" />
        <img src="https://picsum.photos/200/300" alt="random" />
        <img src="https://picsum.photos/200/300" alt="random" />
    </Carousel>
  )
}

export default App;
