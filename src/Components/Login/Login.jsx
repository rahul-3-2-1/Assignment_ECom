import React from "react";
import "./login.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Login(props) {
  const { setLogin, setNo } = props;

  const [data, setData] = React.useState("");
  const handleSubmit = () => {
    console.log(data);
    if (data === "") return;
    setNo(data);
    setLogin(true);

    props.setCheckout(true);
    props.setType("");
  };
  return (
    <div s className="cartContainer">
      <div className="cdh">
        <h2>Login</h2>
        <div onClick={() => props.setType("")} className="back">
          <KeyboardBackspaceIcon />
        </div>
      </div>
      <p style={{ marginTop: "9px" }} className="line"></p>
      <div className="inputContainer">
        <input
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter your phone number"
        />
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
        <p>Will do it later</p>
      </div>
    </div>
  );
}

export default Login;
