import React, { useEffect } from "react";

const Home = ({ navExit, setNavExit }) => {
  document.title = "Dashboard | Home";

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      
    </>
  );
};

export default Home;