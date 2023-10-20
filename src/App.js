import './App.css';

function App() {
  return (
    <>
      <div className="cards">
        <div>
          <div className="text-center">
            <p className="fs-1">Congratulations</p>
          </div>
          <div className="bg-primary-subtle p-5">
              <div className="text-center">
                  <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
              </div>
              <div className="text-center">
                  <p className='fs-3'>Kiran V</p>
                  <p className='fs-5'>Vishnu Institute of Computer Education and Technology</p>
                  <p className='fs-5'>Bhimavaram</p>
              </div>
              <div className="text-center">
                  <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
