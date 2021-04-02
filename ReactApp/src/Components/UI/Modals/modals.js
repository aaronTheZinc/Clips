import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Modal, ModalBody, ModalHeader } from "shards-react";
import { Button } from "../MicroComponents/buttons";
import { appState } from "../../State/Context";
export const Account = ({ open, toggle }) => {
  const {uid, setUid} = useContext(appState);

  return (
    <div>
      <Modal open={open} toggle={toggle}>
        <ModalHeader>{`@${uid}`}</ModalHeader>
        <ModalBody>
          <section style={{ display: "flex" }}>
            <Button title="Log Out" action={() => {}} />
          </section>
        </ModalBody>
      </Modal>
    </div>
  );
};
