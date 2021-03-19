import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Dashboard.css';
import { Button } from "react-bootstrap";


const Dashboard = () => {

      const history = useHistory();
      const addNewCar = () => {
        history.push("/dashboard/user/add-item");
      };

      return (
            <div>
                  <Header />
                  <div className="dashboard__area">
                  <h2 style={{ textAlign: "center" }}>Welcome to dashboard</h2>
                  <Button onClick={addNewCar} variant="outline-danger">
                  Add a car
                  </Button>
            </div>
            
                  <Footer /> 
            </div>
      );
};

export default Dashboard;