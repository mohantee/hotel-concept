import { Modal } from "antd";
import { useState } from "react";
import "./forgot-password-modal.css";

export function ForgotPasswordModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span className="login__forgot" aria-role="button" onClick={showModal}>
        Forgot Password?
      </span>
      <Modal
        title="Forgot Password"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form className="email-form">
          <label htmlFor="email">Please enter your email address</label>
          <input type="email" id="email" className="email-form__input" />
          <button
            type="button"
            className="btn email__submit-btn"
            onClick={handleCancel}
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
}
