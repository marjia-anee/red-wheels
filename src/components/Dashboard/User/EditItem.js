import React from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
import "./User.css";

const EditItem = () => {

      const { detailsCar } = useContext(UserContext);

  const {
    _id,
    name,
    features,
    km,
    manual,
    bestSeller,
    color,
    petrol,
    price,
    reviews,
    sport,
    star,
    year,
  } = detailsCar;

  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      features,
      km,
      manual,
      bestSeller,
      color,
      petrol,
      price,
      reviews,
      sport,
      star,
      year,
    } = data;

    const formData = new FormData();

    const totalData = JSON.stringify({
      _id,
      name,
      features,
      km,
      manual,
      bestSeller,
      color,
      petrol,
      price,
      reviews,
      sport,
      star,
      year,
    });

    formData.append("total", totalData);
    formData.append("file", data.carImage[0]);

    fetch(`https://automobile-searching-app.herokuapp.com/update-car/`, {
      method: "PATCH",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert(
            `Congratulations! You have edited the car  ${name} info successfully.`
          );
          history.replace("/");
        }
      });
  };

  // Handle uplaod image/file
  const handleProjectFile = () => {
    document.getElementById("car-img-file").click();
  };

  // Handle delete functionality
  const handleDelete = () => {
    fetch(`https://automobile-searching-app.herokuapp.com/delete-car`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                _id,
            },
        })
        .then(data => {
            if(data){
                alert("You have successfully deleted the car");
                history.push("/")
            }
        })
  }

      return (
            <Container>
      <h2 className = "text-center mt-3 mb-3">Welcome to User's dashboard panel (Edit/Delete)</h2>
      <h6 className = "mb-3">Fill up the form and edit or delete item:</h6>
      <Form className="addNewForm" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
          <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              ref={register({ required: true })}
              placeholder="Car name*"
              defaultValue={name}
            />
            {errors.name && <span className="error">Car name is required</span>}
          </Col>
          <Col>
          <Form.Label>Features</Form.Label>
            <Form.Control
              name="features"
              type="text"
              ref={register({ required: true })}
              placeholder="Car features*"
              defaultValue={features}
            />
            {errors.features && (
              <span className="error">Car features are required</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>Kilometers in number</Form.Label>
            <Form.Control
              name="km"
              type="number"
              ref={register({ required: true })}
              placeholder="Lifetime Kilometer in numbers*"
              defaultValue={km}
            />
            {errors.km && (
              <span className="error mt-3 mb-0">
                Kilometer is required
              </span>
            )}
          </Col>
          <Col>
          <Form.Label>Manual Type</Form.Label>
            <select name="manual" ref={register({ required: true })}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.manual && (
              <span className="error">Manual type is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Best Sellers</Form.Label>
            <select name="bestSeller" ref={register({ required: true })}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.bestSeller && (
              <span className="error">Best Seller is required</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Label>Main Color </Form.Label>
            <Form.Control
              name="color"
              type="text"
              ref={register({ required: true })}
              placeholder="Main color of the car*"
              defaultValue={color}
            />
            {errors.color && (
              <span className="error">Car main color is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Petrol Type</Form.Label>
            <select name="petrol" ref={register({ required: true })}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.petrol && (
              <span className="error">Petrol type is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              ref={register({ required: true })}
              placeholder="Car price in numbers*"
              defaultValue={price}
            />
            {errors.price && (
              <span className="error">Car price is required</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Label>Reviews in numbers</Form.Label>
            <Form.Control
              name="reviews"
              type="number"
              ref={register({ required: true })}
              placeholder="Car reviews count in numbers*"
              defaultValue={reviews}
            />
            {errors.reviews && (
              <span className="error">Car reviews count is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Sport type</Form.Label>
            <select name="sport" ref={register({ required: true })}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.sport && (
              <span className="error">Car sport type is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Star out of 5</Form.Label>
            <Form.Control
              name="star"
              type="number"
              ref={register({ required: true })}
              placeholder="Customer feedback in stars*"
              defaultValue={star}
            />
            {errors.start && (
              <span className="error">Car Star feedback is required</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Label>Model Year</Form.Label>
            <Form.Control
              name="year"
              type="number"
              ref={register({ required: true })}
              placeholder="Car model Year*"
              defaultValue={year}
            />
            {errors.year && (
              <span className="error">Car model year is required</span>
            )}
          </Col>
          <Col>
          <Form.Label>Upload Car Image</Form.Label>
            <Form.Control
              hidden
              name="carImage"
              type="file"
              id="car-img-file"
              ref={register({ required: true })}
              placeholder="Upload*"
            />
          </Col>
          <Col>
            <Button className="btn btn-info btn-project-upload" onClick={handleProjectFile}>
              <i className="fas fa-cloud-upload-alt"></i> Upload
            </Button>
            {errors.carImage && (
              <span className="error">Sample Car Image is required</span>
            )}
          </Col>
        </Row>
        <br />
        <Button className="btn-brand send mt-0 mr-5" type="submit" variant="info">
          EDIT
        </Button>
        <Button
          onClick={handleDelete}
          className="btn-brand btn btn-danger send mt-0"
          variant="info"
        >
          DELETE
        </Button>
      </Form>
    </Container>
      );
};

export default EditItem;