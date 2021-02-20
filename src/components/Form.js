/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";

const Form = ({ isSubmit, isLoading, setOutput }) => {
  const [longUrl, setLongUrl] = useState("");
  const [slug, setSlug] = useState("");

  const handleOutput = (data, error) => {
    setOutput({
      data: data,
      error: error,
    });
  };

  const handleUrlInput = (e) => {
    e.preventDefault();
    setLongUrl(e.target.value);
  };

  const handleSlugInput = (e) => {
    e.preventDefault();
    setSlug(e.target.value);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const url = process.env.API_URI;
      console.log(longUrl, slug);
      if (longUrl != "") {
        isSubmit(true); // request submitted
        isLoading(true); // loader on
        axios({
          method: "post",
          url,
          data: {
            longUrl,
            slug,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((data) => {
            isLoading(false); // request complete loader-off
            console.log(JSON.stringify(data));
            handleOutput(JSON.stringify(data), false);
          })
          .catch((err) => {
            isLoading(false); // request complete loader-off
            console.error(err);

            handleOutput(JSON.stringify(err), true);
          });
      } else {
        // TODO:: no input url - bad input notification
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
        onChange={handleUrlInput}
      />
      <input
        type="text"
        placeholder="Slug"
        name="slug"
        value={slug}
        onChange={handleSlugInput}
      />
      <input type="submit" value="Shorten" />
    </form>
  );
};

export default Form;
