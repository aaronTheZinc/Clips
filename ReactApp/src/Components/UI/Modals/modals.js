import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Modal, ModalBody, ModalHeader } from "shards-react";
import { Button } from "../MicroComponents/buttons";
import { appState } from "../../State/Context";
export const Account = ({ open, toggle, username }) => {
  const {state, dispatch} = useContext(appState);

  

  return (
    <div>
      <Modal open={open} toggle={toggle}>
        <ModalHeader>{`@${username}`}</ModalHeader>
        <ModalBody>
          <section style={{ display: "flex" }}>
            <Button title="Log Out" action={() => dispatch({type:'logout', value: null})}/>
          </section>
        </ModalBody>
      </Modal>
    </div>
  );
};
