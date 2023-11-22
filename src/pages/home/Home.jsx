import { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import Feature from "./Feature";
import { getAllArtist } from "../../api/artistOperation";
import Accountants from "./Accountants";

const Home = () => {
  const [accountants, setAccountants] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getAllArtist().then((res) => setArtists(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountantName = e.target.name.value;
    const accountant = artists.filter(artist => artist.name === accountantName);
    setAccountants(accountant);
    e.target.reset();
  };

  return (
    <>
      <Banner handleSubmit={handleSubmit} />
      <Accountants accountants={accountants}/>
      <Content />
      <Feature />
    </>
  );
};

export default Home;
