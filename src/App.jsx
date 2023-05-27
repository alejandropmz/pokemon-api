import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Pokemons } from "./components/Pokemons";
import { SearchInput } from "./components/SearchInput";
import { NotFoundLoadingPokemon } from "./components/NotFoundPokemon";

function App() {
  const [pokemons, setPokemons] = useState();
  const [inputInfo, setInputInfo] = useState("pikachu");
  const [catchError, SetcatchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const recieveInfo = (data) => {
    setInputInfo(data);
  };

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + inputInfo?.toLowerCase();
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        SetcatchError(false);
        setPokemons(response.data);
      })
      .catch((error) => {
        SetcatchError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [inputInfo]);

  return (
    <>
      <SearchInput recieveInfo={recieveInfo} />
      {isLoading ? (
        <NotFoundLoadingPokemon
          img={"https://media.tenor.com/fSsxftCb8w0AAAAd/pikachu-running.gif"}
          text={"Loading pokemon..."}
        />
      ) : catchError ? (
        <NotFoundLoadingPokemon
          img={
            "https://media.tenor.com/ihqN6a3iiYEAAAAd/pikachu-shocked-face-stunned.gif"
          }
          text={"Sorry, pokemon not found"}
        />
      ) : (
        <Pokemons pokemons={pokemons} />
      )}
    </>
  );
}

export default App;
