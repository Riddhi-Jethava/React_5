// AddInteraction.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInteraction } from './actions';

const AddInteraction = () => {
  const [customerId, setCustomerId] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInteraction = { id: Date.now(), customerId, type, date, notes };
    dispatch(addInteraction(newInteraction));
    setCustomerId('');
    setType('');
    setDate('');
    setNotes('');
  };

  return (
    <div>
      <h2>Add Interaction</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button type="submit">Add Interaction</button>
      </form>
    </div>
  );
};

export default AddInteraction;
