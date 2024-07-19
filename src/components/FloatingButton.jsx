import React from "react";
import ContactForm from "./ContactForm";

export default function FloatingButton() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary text-secondary fixed-bottom fs-2 fw-bold py-3 "
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        CONTACT ME
      </button>

      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content  bg-light">
            <div className="modal-header">
              <h5 className="modal-title fs-3" id="contactModalLabel">
                Contact Me
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
