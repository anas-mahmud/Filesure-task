import { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import Feature from "./Feature";
import { getAllAccountant } from "../../api/accountantOperation";
import Accountants from "./Accountants";

const Home = () => {
  const [accountants, setAccountants] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getAllAccountant().then((res) => setArtists(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountantName = e.target.name.value;
    const accountant = artists.filter(
      (artist) => artist.name === accountantName
    );
    setAccountants(accountant);
    e.target.reset();
  };

  return (
    <>
      <Banner handleSubmit={handleSubmit} />
      <Accountants accountants={accountants} />
      <Content />
      <Feature />
    </>
  );
};

export default Home;
