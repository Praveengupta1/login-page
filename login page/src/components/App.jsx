import React, { useState } from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <section>
      <div className="container">
        <h1>Login</h1>
        <Form isregister={userIsRegistered} />
      </div>
      <div className="facebook">
        <a class="btn btn-block btn-social btn-facebook" href="#" role="button">
          <i class="fab fa-facebook-f" />
          CONNECT WITH FACEBOOK
        </a>
      </div>
    </section>
  );
}

export default App;
