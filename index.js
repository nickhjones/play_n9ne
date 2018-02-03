const Stars = (props) => {
	var numOfStars = 1 + Math.floor(Math.random()*9);
  let stars = [];
  
  for (let i = 0; i < numOfStars; i++){
  	stars.push(<i key={i} className="fa fa-star"></i>);
  }
  
  return (
    <div className="col-5">
     {stars}
    </div>
  );
};

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
};

const Answer = (props) => {
  return (
    <div className="col-5">
      ...
    </div>
  );
};

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) =>
        <span key={i}>{number}</span>
        )}
      </div>
    </div>
  );
};

var arrayOfNumbers = _.range(1, 10);

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play n9ne</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
