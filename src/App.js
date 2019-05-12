import React from "react";
import SearchButton from "./components/SearchButton";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      styling: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event) {
    console.log(event.target.innerHTML);
    const house = event.target.innerHTML;
    if(house === 'Slytherin'){
      this.setState({
        styling: 'rgb(17, 82, 33)',
      })
    }
    else if (house === 'Gryffindor'){
      this.setState({
        styling: 'rgb(122, 38, 38)',
      })
    }
    else if (house === 'Ravenclaw'){
      this.setState({
        styling: 'rgb(38, 55, 110)',
      })
    }
    else if (house === 'Hufflepuff'){
      this.setState({
        styling: 'rgb(172, 163, 37)',
      })
    }
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Selecciona una casa</h1>
          <nav>
            <SearchButton onClick={this.handleSearch} label="Gryffindor" />
            <SearchButton onClick={this.handleSearch} label="Slytherin" />
            <SearchButton onClick={this.handleSearch} label="Ravenclaw" />
            <SearchButton onClick={this.handleSearch} label="Hufflepuff" />
          </nav>
        </header>
        <main>
          <ul className="list">
            {this.state.data.map(character => {
              return (
               <a target="blank" href={`https://harrypotter.fandom.com/es/wiki/${character.name}`}> <li className="itemList" >
                  <h2
                    className="nameList" style={{
                      backgroundColor: `${this.state.styling}`
                    }}
                  >
                    {character.name}
                  </h2>
                  <div
                    className="photo"
                    style={{
                      backgroundImage: `url(${character.image})`
                    }}
                  />
                </li>
                </a>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}



export default App;
