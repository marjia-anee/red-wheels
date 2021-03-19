import React from 'react';
import AdminPanel from '../components/Dashboard/Admin/AdminPanel';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Admin = () => {
      return (
            <div>
                  <Header/>
                  <AdminPanel/>
                  <Footer/>
                  
            </div>
      );
};

export default Admin;