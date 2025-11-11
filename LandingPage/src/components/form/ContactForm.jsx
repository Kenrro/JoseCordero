import { useRef, useState } from "react";
import { Regex } from "../../utils/regex";
import "./contactForm.css";
import { sendMail } from "../../services/emailService";

export const ContactForm = () => {
  const formRef = useRef(null);
  const [userData, setUserData] = useState({ name: "", email: "", number: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const message = Regex[name](value);

    setErrors(prev => {
      const newErrors = { ...prev };
      if (message) newErrors[name] = message;
      else delete newErrors[name];
      return newErrors;
    });

    return message;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMail(formRef.current, () => {
      formRef.current.reset();
      setUserData({ name: "", email: "", number: "" });
      setErrors({});
    });
  };

  const isFormInvalid =
    Object.keys(errors).length > 0 ||
    Object.values(userData).some(value => value.trim() === "");

  return (
    <section className="contact" id="contact-section">
      

        <section className="contact__form">
            <header className="contact__header">
            <h2>Contacta</h2>
          </header>
        <form ref={formRef} onSubmit={onSubmit}>
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            value={userData.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            value={userData.email}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
          <FormInput
            name="number"
            type="tel"
            placeholder="Telf"
            value={userData.number}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
          <fieldset>
            <button
              type="submit"
              disabled={isFormInvalid}
              className={isFormInvalid ? "btn--disabled" : "btn--enabled"}
            >
              Enviar
            </button>
          </fieldset>
        </form>
      </section>
    </section>
  );
};


const FormInput = ({ name, type, placeholder, value, handleChange, onBlur }) => {
  const [error, setError] = useState("");

  const handleBlur = (e) => {
    const message = onBlur(e);
    setError(message || "");
  };

  return (
    <fieldset>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span className="input-error">{error}</span>}
    </fieldset>
  );
};