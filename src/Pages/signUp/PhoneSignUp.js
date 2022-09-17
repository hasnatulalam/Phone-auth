import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Phone Authentication</h2>
        {error && <div className="alert alert-error shadow-lg">{error}</div>}
        <form onSubmit={getOtp}  style={{  display: !flag ? "block" : "none", width: "200px",height:"200px" }} >
          <div className="div">
          <PhoneInput
              defaultCountry="BD"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
          </div>
           
            <div id="recaptcha-container"></div>
         
          <div>
            <Link to="/">
            <button className="btn btn-active">Cancel</button>
            </Link>
            &nbsp;
            <button className="btn btn-active">
              Send Otp
            </button>
          </div>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <div>
            <input
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div>
            <Link to="/">
              <button className="btn btn-active">Cancel</button>
            </Link>
            &nbsp;
            <button type="submit" className="btn btn-active">
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneSignUp;