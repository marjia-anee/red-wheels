import React from 'react';
import EditItem from '../components/Dashboard/User/EditItem';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const ItemDetails = () => {
      return (
            <div>
                <Header/>
                <EditItem/>
                <Footer/>  
            </div>
      );
};

export default ItemDetails;