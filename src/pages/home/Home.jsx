import { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import Feature from "./Feature";
import { getAllArtist } from "../../api/artistOperation";

const Home = () => {
  const [artist, setArtist] = useState([]);
  console.log(artist);

  useEffect(() => {
    getAllArtist().then((res) => setArtist(res));
  }, []);

  return (
    <>
      <Banner />
      <Content />
      <Feature />
    </>
  );
};

export default Home;
