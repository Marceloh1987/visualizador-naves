import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [valor, setValor] = useState(" ");
  const url = "https://swapi.dev/api/starships/";

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setData(responseJSON.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (event) => {
    if(event.target.value === "default"){
      setState(false);
    }else{
      setState(true);
      let key = event.target.value;
      setValor(data[key]);
    };
    }

  console.log(valor);

  return (
    <div className="app">
      <div className="container">
        <select
          className="select"
          defaultValue="Seleccione una nave..."
          onChange={handleChange}
        >
          <option value="default">Seleccione una nave...</option>
          {data.map((option, i) => (
            <option className="options" value={i} key={i}>
              {option.name}
            </option>
          ))}
        </select>
        {state === true ? (
          <div>
            <div className="container-body">
              <div className="titulo1">{valor.name ? valor.name : " "}</div>
              <div className="text">{valor.model ? valor.model : " "}</div>
              <hr></hr>
              <div className="titulo2">Frabricante</div>
              <div className="text">
                {valor.manufacturer ? valor.manufacturer : " "}
              </div>
              <div className="titulo2">Largo</div>
              <div className="text">{valor.length ? valor.length : " "}</div>
              <div className="titulo2">Valor</div>
              <div className="text">
                {valor.cost_in_credits ? valor.cost_in_credits : " "} de
                creditos
              </div>
              <div className="titulo2">Cantidad Pasajeros</div>
              <div className="text">
                {valor.passengers ? valor.passengers : " "}
              </div>
            </div>

            <div className="container-base">
              <div className="titulo1">pasajeros</div>
              <hr></hr>
              <div className="text">Chewbacca</div>
              <div className="text">Han Solo</div>
              <div className="text">Lando Calrissian</div>
              <div className="text">Nien nunb</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
