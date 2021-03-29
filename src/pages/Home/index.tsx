import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { HomeButton } from "./styles";
import "rsuite/lib/styles/index.less";
import Auth from "@aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { Button, Loader, Modal } from "rsuite";
import { userLogOut } from "../../store/actions";

export const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadingState = useSelector(
    (state: JobApplicationState) => state.userLoading
  );

  const isLogged = useSelector(
    (state: JobApplicationState) => state.userLogged
  );

  const logOut = async () => {
    setLoading(true);
    try {
      await Auth.signOut();
      setLoading(false);
      dispatch(userLogOut());
      history.push("/login");
      console.log("Signed out successfully");
    } catch (error) {
      console.log("Something went wrong in signing out.", error);
    }
  };

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      {loadingState ? (
        <>
          <Loader size="lg" center />
        </>
      ) : isLogged ? (
        <>
          <HomeButton
            color="blue"
            onClick={() => {
              history.push("/form");
            }}
          >
            Register a new job application
          </HomeButton>
          <HomeButton
            color="blue"
            onClick={() => {
              history.push("/jobs");
            }}
          >
            All job applications
          </HomeButton>

          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              bottom: "20px",
              textAlign: "center",
              position: "absolute",
            }}
          >
            <HomeButton loading={loading} color="red" onClick={openModal}>
              Log out
            </HomeButton>
          </div>
        </>
      ) : (
        <Redirect to="/login" />
      )}
      {console.log("Is logged in? ", isLogged)}
      <Modal size="xs" show={show} onHide={closeModal}>
        <Modal.Body>
          <p>Are you shure you want log out?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={logOut}>
            Yes
          </Button>
          <Button appearance="subtle" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
