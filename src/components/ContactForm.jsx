import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function ContactForm({ handleClose }) {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (data) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setToastMessage("Email sent successfully!");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 10000);
        reset();
        handleClose();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setToastMessage("Failed to send email. Please try again.");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 10000);
      }
    );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.sender_name ? "is-invalid" : ""}`}
            id="sender_name"
            placeholder="Name"
            {...register("sender_name", { required: "Name is required" })}
          />
          <label htmlFor="sender_name" className="form-label">
            Name
          </label>

          {errors.sender_name && (
            <div className="invalid-feedback">{errors.sender_name.message}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${
              errors.sender_email ? "is-invalid" : ""
            }`}
            id="sender_email"
            placeholder="name@example.com"
            {...register("sender_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <label htmlFor="sender_email" className="form-label">
            Email
          </label>

          {errors.sender_email && (
            <div className="invalid-feedback">
              {errors.sender_email.message}
            </div>
          )}
        </div>
        <div className="form-floating mb-3">
          <textarea
            className={`form-control h-25 ${
              errors.message ? "is-invalid" : ""
            }`}
            id="message"
            placeholder="Enter message"
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-dark text-primary m-3">
          SEND
        </button>
      </form>
      <div
        className={`toast position-fixed bottom-0 end-0 p-3 ${
          showToast ? "show" : ""
        }`}
        style={{ zIndex: 11 }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body d-flex justify-content-between">
          {toastMessage}
          <button
            type="button"
            className="btn-close ms-2 mb-1"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
      </div>
    </div>
  );
}
