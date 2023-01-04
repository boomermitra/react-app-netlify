import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";

const AxiosApi = () => {
  const [data, setData] = useState(null);

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "4baf334e09msh61f8fad670a4ed1p186bc3jsn02e67035fc8a",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  if (data) console.log(data);

  return (
    <>
      <div>
        <h1>Free-to-Play Games Database - Using Axios</h1>
      </div>
      <div className="container" style={container}>
        {data &&
          data.map((items) => (
            <div className="card" style={card}>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={items.thumbnail} width="270" />
                <Card.Body>
                  <Card.Title>
                    <h3>{items.title}</h3>
                  </Card.Title>
                  <Card.Text>
                    <b>
                      <i>{items.short_description}</i>
                    </b>
                    <br />
                    <br />
                    <b>Publisher:</b> {items.publisher}
                    <br />
                    <b>Developer: </b> {items.developer}
                    <br />
                    <b>Gener: </b> {items.genre}
                    <br />
                  </Card.Text>
                  <a href={items.game_url} target="_blank" rel="noreferrer">
                    <Button variant="success">More Info</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

const container = {
  display: "flex",
  width: "100% vw",
  flexDirection: "row",
  margin: "auto",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const card = {
  display: "block",
  margin: "10px",
  padding: "20px",
  backgroundColor: "#ABBAEA",
  //   padding: "20 px",
};
export default AxiosApi;
