import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import Car from "./Car";
import "./Cars.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Cars = () => {
  const { cars, setCars, search, setDetailsCar } = useContext(UserContext);

  const [filter, setFilter] = useState([]);

  const history = useHistory();

  // When page is loaded, fetch api to get all cars
  useEffect(() => {
    fetch("https://automobile-searching-app.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // When no cars found in searching, the text shows "No Cars Found"
  useEffect(() => {
    setFilter(
      cars.filter((car) => car.name.toLowerCase().includes(search.trim()))
    );
  }, [search, cars]);

  const handleCar = (id) => {
    // Update state on which car is to be edited
    const selectedCar = cars.find((car) => car._id === id);
    setDetailsCar(selectedCar);
    // Redirect to details car page
    history.push(`/dashboard/user/details-car`);
  };

  return (
    <Container className="text-center mb-5">
      <Row>
        <h2 className="m-auto p-5">Featured Cars </h2>
      </Row>

      <Row className="justify-content-center">
        {cars.length === 0 && (
          <Button className="m-5 m-auto" variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Cars Loading...
          </Button>
        )}

        {filter.length ? (
          filter.map((car) => (
            <Car key={car._id} handleCar={handleCar} car={car} />
          ))
        ) : (
          cars.length !== 0 && <h2 style={{ color: "red" }}>No Cars Found</h2>
        )}
      </Row>
    </Container>
  );
};

export default Cars;
