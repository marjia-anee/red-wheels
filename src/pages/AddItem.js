import React from 'react';
import AddNewItem from '../components/Dashboard/User/AddINewtem';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const AddItem = () => {
      return (
            <div>
                  <Header/>
                  <AddNewItem/>
                  <Footer/>
            </div>
      );
};

export default AddItem;