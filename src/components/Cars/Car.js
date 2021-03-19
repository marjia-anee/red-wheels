import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import './Cars.css';

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Car = ({ car, handleCar }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const {
    _id,
    name,
    features,
    img,
    price,
    star,
    bestSeller,
    reviews,
    petrol,
    km,
    manual,
    sport,
    color,
    year,
  } = car;

  return (
    <Col xs={12} sm={6} md={8} onClick={() => handleCar(_id)}>
      <animated.div
        className="card-animated"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Card className="card-style mb-5">
          <Card.Body>
            <Card.Img
              variant="top"
              src={
                car &&
                `data:image/png;base64,${car.img.img ? car.img.img : car.img}`
              }
              className="w-75 m-3 card-img-top"
            />
            <Card.Title> Name: {name}</Card.Title>
            <Card.Text> Features: {features} </Card.Text>
            <Card.Text> Price: {price} </Card.Text>
            <Card.Text>
              {" "}
              Stars:
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStarHalf} />
              <FontAwesomeIcon className="text-warning" icon={faStarHalf} />
              ({star}){" "}
            </Card.Text>
            <Card.Text> {bestSeller && "Best Seller"} </Card.Text>
            <Card.Text>  {km}/km lifetime </Card.Text>
            <Card.Text> Reviews: {reviews} </Card.Text>
            <Card.Text> {petrol && "Petrol"} - {manual && "Manual"} -  {sport && "Sport"} </Card.Text>
            <Card.Text> Main Color: {color} </Card.Text>
            <Card.Text> Model Year: {year} </Card.Text>
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  );
};

export default Car;
