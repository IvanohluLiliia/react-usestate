import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    groupCode: "",
    email: ""
  });
  
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "email") {
      setEmailValid(value.includes("@"));
    }
  };

  const handleClear = () => {
    setFormData({ firstName: "", lastName: "", groupCode: "", email: "" });
    setEmailValid(true);
  };

  return (
    <div className="user-form-container">
      <h2>Форма користувача</h2>
      <form className="user-form">
        <label>
          Ім'я:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Прізвище:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
        </label>
        <br />
        <label>
          Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        {!emailValid && <p className="error">Некоректна електронна пошта</p>}
        <br />
        <button type="button" onClick={handleClear} className="clear-button">Очистити</button>
      </form>
      <h3>Введені дані:</h3>
      <ul className="user-data">
        <li><strong>Ім'я:</strong> {formData.firstName}</li>
        <li><strong>Прізвище:</strong> {formData.lastName}</li>
        <li><strong>Код групи:</strong> {formData.groupCode}</li>
        <li><strong>Електронна пошта:</strong> {formData.email}</li>
      </ul>
    </div>
  );
};

export default UserForm;