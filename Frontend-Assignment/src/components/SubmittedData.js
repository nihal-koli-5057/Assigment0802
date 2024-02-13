import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { REMOVE_ADDRESS } from '../redux/actions/action';

const SubmittedData = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.userAddress.userAddress);
  const removeAddress = (id) => {
    dispatch(REMOVE_ADDRESS(id));
  }

  return (
    <div>
      <h2>Submitted Address</h2>
      <div
        className="card flex justify-content-center"
        style={{ margin: "5px" }}
      >
        <Fieldset>
          {Array.isArray(addresses) && addresses?.map((val, index) => (
            <div key={index}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div style={{ fontWeight: "bold" }}>{`Street`}:</div>
                <div>{val.streetAddress}</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div style={{ fontWeight: "bold" }}>{`City`}:</div>
                <div>{val.city}</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div style={{ fontWeight: "bold" }}>{`State`}:</div>
                <div>{val.state}</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div style={{ fontWeight: "bold" }}>{`Postal Code`}:</div>
                <div>{val.postalCode}</div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <div style={{ fontWeight: "bold" }}>{`Country`}:</div>
                <div>{val.country}</div>
              </div>
              <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" onClick={() => removeAddress(val.id)} />
            </div>
          ))}
        </Fieldset>
      </div>
    </div>
  );
};

export default SubmittedData;
