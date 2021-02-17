/* eslint-disable no-console */
import React, { useState } from "react";

const Form = ({ isSubmit }) => {
  const [longUrl, setLongUrl] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLongUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setLongUrl(longUrl);
      console.log(longUrl);
      if (longUrl != "") {
        isSubmit(true);
      } else {
        isSubmit(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Shorten URL"
        name="longUrl"
        value={longUrl}
        onChange={handleInput}
      />
      <input type="submit" value="Shorten" />
    </form>
  );
};

export default Form;
