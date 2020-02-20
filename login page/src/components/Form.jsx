import React, { useState } from "react";
import Switch from "react-input-switch";
function Form(props) {
  const me = "MEMORIZE:  ";
  const [value, setValue] = useState("yes");
  return (
    <form className="form">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <label className="switch">
        {me}
        {value}
        <Switch on="yes" off="no" value={value} onChange={setValue} />
      </label>
      <button type="submit"> Login</button>
      <p>
        No account? <a href="#">Register now </a>
      </p>
    </form>
  );
}
export default Form;
