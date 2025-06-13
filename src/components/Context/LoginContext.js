import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const localData = localStorage.getItem("formData");
  const [formData, setFormData] = useState(
    localData
      ? JSON.parse(localData)
      : {
          name: "",
          email: "",
        }
  );

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const resetForm = () => {
    const initialData = {
      name: "",
      email: "",
    };
    setFormData(initialData);
    localStorage.removeItem("formData"); // Clear from localStorage
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
