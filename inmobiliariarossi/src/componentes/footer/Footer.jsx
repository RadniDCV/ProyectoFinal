import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={"check-square"} />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={"check-square"} />
          </MDBBtn>
        </section>

        <section className="mb-4">
          <p>LAS PIEDRAS - CANELONES - URUGUAY</p>
        </section>

        <section className=""></section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:R&P
      </div>
    </MDBFooter>
  );
};

export default Footer;
