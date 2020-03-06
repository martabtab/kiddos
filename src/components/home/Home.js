import React from "react";
import Header from "./Header";
import Missions from "./Missions";
import Events from "./eventi/Events";
import Partner from "./Partner";
import Numbers from "./Numbers";
import Reviews from "./Reviews";
import Community from "./Community";
import Form from "./Form";
import Footer from "../Footer";
// export default () => <h1>Home</h1>;

function Home({ history }) {
  return (
    <div className="home-container">
      <Header></Header>
      <Missions></Missions>
      <Events history={history}></Events>
      <Partner></Partner>
      <Numbers></Numbers>
      <Reviews></Reviews>
      <Community></Community>
      {/* <Form></Form> */}
    </div>
  );
}

export default Home;
