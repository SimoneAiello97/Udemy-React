import logo from './logo.svg';
import './App.css';
import Recensioni from './Recensioni';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App bg-dark">
      <Recensioni/>
    </div>
  );
}

/* 
function App() {
  const [length, setLength] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleDataFromChild = (data) => {
    setLength(data);
  };

  useEffect(() => {
    handleDataFromChild(counter);
  }, []);
  
  const moveNext = () => {
    console.log("counter:", counter)
    const container = document.querySelector('.card-container');
    setCounter((prevValue) => {
      if (prevValue === length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });

    if (counter < 3) {
      anime({
        targets: [container],
        delay: 0,
        keyframes: [
          { translateX: -1200 * (counter + 1)},
        ],
        duration: 500,
        easing: 'linear',
        loop: false,
        complete: () => {
          
        }
      })
    } else {
      anime({
        targets: [container],
        delay: 0,
        keyframes: [
          {opacity: 0},
          {opacity: 0, translateX:0},
          {opacity: 1},
        ],
        duration: 500,
        easing: 'linear',
        loop: false,     
        complete: () => {
          setCounter(0);
        }
    })
    }
  };

  const movePrev = () => {
    console.log("counter:", counter)
    const container = document.querySelector('.card-container');
    setCounter((prevValue) => {
      if (prevValue === 0) {
        return 4;
      } else {
        return prevValue - 1;
      }
    });

    if (counter !== 0) {
      anime({
        targets: [container],
        delay: 0,
        keyframes: [
          { translateX: -1200 * (counter - 1)},
        ],
        duration: 500,
        easing: 'linear',
        loop: false,
        complete: () => {
          
        }
      })
    } else {
      anime({
        targets: [container],
        delay: 0,
        keyframes: [
          {opacity: 0},
          {opacity: 0, translateX:-3600},
          {opacity: 1},
        ],
        duration: 500,
        easing: 'linear',
        loop: false,     
        complete: () => {
          setCounter(3);
        }
    })
    }
  };


  return (
    <div className="App bg-dark d-flex justify-content-center" style={{ width: '100vw', height: '100vh' }}>
      <div className='slider-container position-relative overflow-x-hidden d-flex align-items-start' style={{ width: '600px'}}>
        <Slide sendDataToParent={handleDataFromChild}></Slide>
        <div className='w-100 d-flex justify-content-around'>
          <button className='btn btn-info' onClick={() => movePrev()}>Prev</button>
          <button className='btn btn-info' onClick={() => moveNext()}>Next</button>
        </div>
      </div>
    </div>
  );
}
 */
export default App;
