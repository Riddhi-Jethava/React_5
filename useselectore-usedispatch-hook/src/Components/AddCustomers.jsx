import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from './actions';

const AddCustomers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newCustomer = {
        id: Date.now(),
        name,
        email,
        phone,
      };
      dispatch(addCustomer(newCustomer));
      setName('');
      setEmail('');
      setPhone('');
    };
  
    return (
      <div>
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

export default AddCustomers
