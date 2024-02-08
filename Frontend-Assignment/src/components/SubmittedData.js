import React from 'react';
import { useSelector } from 'react-redux';

const SubmittedData = () => {
  const addresses = useSelector((state) => state.addresses);

  return (
    <div>
      <h2>Submitted Data</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            <strong>Street:</strong> {address.street}, <strong>City:</strong> {address.city}, <strong>State:</strong>{' '}
            {address.state}, <strong>Postal Code:</strong> {address.postalCode}, <strong>Country:</strong> {address.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmittedData;
