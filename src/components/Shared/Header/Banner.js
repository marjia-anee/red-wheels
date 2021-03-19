import React from 'react';
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";
import { UserContext } from "../../../App";
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import './Header.css';

const Banner = () => {

      const { search, setSearch, setSearchBtn } = useContext(UserContext);

      const path = useLocation().pathname;
    
      const handleSearchBtn = (e) => {
        e.preventDefault();
        setSearchBtn(search.toLowerCase());
      };

      return (
            <div className="container-fluid text-center">
      <div style={{backgroundColor: "#e9ecef"}}>
      </div>
      
      {(path === "/" || path === "/") && (
        <Jumbotron className="jumbotronHeader">
          <h2> <b>Welcome to Red Wheels-For Ultimate Automobile Searching App!</b> </h2>
 
          <div className="w-50 m-auto">
            <Form className="d-flex">
              <FormControl
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="form-control jumbotronHeader__search"
              />
              <div className="ml-2">
                {" "}
                <Button
                  onClick={handleSearchBtn}
                  type="submit"
                  variant="contained"
                  className="btn btn-danger"
                >
                  {" "}
                  Submit
                </Button>
              </div>
            </Form>
          </div>{" "}
        </Jumbotron>
      )}
    </div>
      );
};

export default Banner;