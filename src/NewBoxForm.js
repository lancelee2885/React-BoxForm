import React, { useState } from "react";
import Box from "./Box"

function NewBoxForm({ addBox }) {

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    bckgroundColor: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // do something with the data submitted
    addBox(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="hegiht">Height: </label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color: </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>

    </form>
  );
}

export default NewBoxForm;