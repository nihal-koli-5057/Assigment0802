import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import AddressForm from "./AddressForm";
import SubmittedData from "./SubmittedData";
import { Navigate, useNavigate } from "react-router-dom";
import { LOGOUT_USER, singleUserRequest } from "../redux/actions/action";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  // const users = useSelector((state) => state?.auth?.user?.id);

  useEffect(() => {
    if (user && user.id) {
      dispatch(singleUserRequest(user.id));
    }
  }, []);

  const handleLogout = () => {
    dispatch(LOGOUT_USER());
    navigate('/login')
  };

  const items = [
    {
      label: "logout",
      icon: "pi pi-home",
      command: () => handleLogout(),
    },
  ];

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Address Form</span>
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} />
      <div
        className="card flex justify-content-center"
        style={{ margin: "5px" }}
      >
        <Fieldset>
          {user && Object.entries(user).map(([key, value]) => (
            <div
              key={key}
              style={{ display: "flex", flexDirection: "row", gap: "8px" }}
            >
              <div style={{ fontWeight: "bold" }}>{key}:</div>
              <div>{value}</div>
            </div>
          ))}
        </Fieldset>
      </div>

      <Button
        label="Add Address"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
        style={{ margin: "5px" }}
      />

      <SubmittedData />

      <Dialog
        visible={visible}
        modal
        header={headerElement}
        style={{ width: "50rem" }}
        onHide={() => setVisible(false)}
      >
        <AddressForm />
      </Dialog>
    </div>
  );
}

export default HomePage;
