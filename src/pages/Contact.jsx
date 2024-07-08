import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function Contact() {
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
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-3">
          <label htmlFor="sender_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.sender_name ? "is-invalid" : ""}`}
            id="sender_name"
            {...register("sender_name", { required: "Name is required" })}
          />
          {errors.sender_name && (
            <div className="invalid-feedback">{errors.sender_name.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="sender_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              errors.sender_email ? "is-invalid" : ""
            }`}
            id="sender_email"
            {...register("sender_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.sender_email && (
            <div className="invalid-feedback">
              {errors.sender_email.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Send
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
