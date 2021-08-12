import React, { useState } from "react";
import Box from "./Box"


/** Form for creating a new box to add to a list.
 *
 * Has state for the height, width, backgroundColor of the item;
 *  on submission, sends {height, width, backgroundColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  // updates local state with a new box
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  // submits {height, width, backgroundColor} to parent
  function handleSubmit(evt) {
    evt.preventDefault();
    // do something with the data submitted
    addBox(formData)
  }

  // renders forms
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