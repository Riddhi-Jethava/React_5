import React from 'react';
import { useSelector } from 'react-redux';

const CustomerList = () => {
    const customers = useSelector((state) => state.customers);

    return (
        <div>
            <h3>Customer List</h3>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
