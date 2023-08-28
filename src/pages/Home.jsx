import { useState, useEffect } from "react";
import axios from "axios";
import Offers from "../components/Offers";
import Hero from "../components/Hero";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );

      setData(response.data);

      setIsLoading(false);
    };

    fetchData();
  }, []);
  //   console.log(data);
  return (
    <>
      <Hero />
      {isLoading === true ? (
        <div>En cours de chargement...</div>
      ) : (
        <Offers data={data} isLoading={isLoading} />
      )}
    </>
  );
};

export default Home;
