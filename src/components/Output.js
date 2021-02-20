/* eslint-disable no-console */
import React from "react";
import spinner from "../../img/loader.gif";

export default function Output({ output, loading }) {
  const loader = <img src={spinner} alt="spinner" />;

  console.log(output);

  return (
    <div>
      {loading ? (
        loader
      ) : (
        <div>
          <h3>Request output::</h3>
          <p>{output.data}</p>
        </div>
      )}
    </div>
  );
}
