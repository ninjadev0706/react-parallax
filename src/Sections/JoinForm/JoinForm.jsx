import { useEffect, useState } from "react";
import { submitBetaJoinForm } from "../services/beta-join";
import { CheckCircle, AlertCircle } from "react-feather";
import "./style.css";
import AlertDialog from "../AlertDialog";
function JoinForm({ color }) {
  const [isLoading, setisLoading] = useState(false);
  const [isAlreadySubmitted, setisAlreadySubmitted] = useState(false);
  const [betaJoinFormData, setbetaJoinFormData] = useState({
    email: "",
    username: "",
    walletAddress: "",
  });
  const [remoteValidationResults, setremoteValidationResults] = useState({
    uniqueUsername: true,
    uniqueEmail: true,
    uniqueWalletAddress: true,
  });
  const [isRemoteCheckRunning, setisRemoteCheckRunning] = useState(false);
  const [alertDialogDisplay, setalertDialogDisplay] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setbetaJoinFormData({
      ...betaJoinFormData,
      [name]: value.trim(),
    });
  };
  const checkfieldsAvailability = async () => {
    setisRemoteCheckRunning(true);
    try {
      const baseUrl = "https://us-central1-blla-n.cloudfunctions.net";
      // const response = await axios.get(`${baseUrl}/message?address=${address}`);
      const query = `?email=${
        betaJoinFormData.email
      }&username=${betaJoinFormData.username.toLowerCase()}&walletAddress=${
        betaJoinFormData.walletAddress
      }`;
      const response = await fetch(
        `${baseUrl}/checkFieldsAvailability${query}`
      );
      const data = await response.json();
      setremoteValidationResults(data);
      setisRemoteCheckRunning(false);
      console.log({ data });
    } catch (error) {
      setisRemoteCheckRunning(false);
      console.log({ error });
    }
  };
  const validateFields = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const lettersAndNumbersRegex = /^[a-zA-Z0-9._-]+$/;
    const { email, username, walletAddress } = betaJoinFormData;
    if (!email || !username || !walletAddress) {
      return false;
    }
    if (!lettersAndNumbersRegex.test(username)) return false;
    if (username.length < 5) return false;
    if (walletAddress.length < 42) return false;
    if (!emailRegex.test(email)) return false;

    return true;
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      // alert("Please fill all the fields correctly");
      setalertDialogDisplay({
        title: "Check Fields",
        description: "Please fill all the fields correctly",
      });
      return;
    }
    if (
      !remoteValidationResults.uniqueEmail ||
      !remoteValidationResults.uniqueUsername ||
      !remoteValidationResults.uniqueWalletAddress
    ) {
      // alert(
      //   "Fields are not unique. Please check if you have already submitted the form"
      // );
      setalertDialogDisplay({
        title: "Check Fields",
        description: (
          <ul>
            <li>Wallet address should not be submitted already</li>
            <li>
              Username should be at least 5 characters or more and can include
              ’_-.’only
            </li>
            <li>
              Make sure you have a valid email address in order to receive your
              access details
            </li>
          </ul>
        ),
      });
      return;
    }
    setisLoading(true);
    try {
      await submitBetaJoinForm({
        ...betaJoinFormData,
        username: betaJoinFormData.username.toLowerCase(),
      });
      setbetaJoinFormData({
        email: "",
        username: "",
        walletAddress: "",
      });
      setisAlreadySubmitted(true);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  const validateUsername = () => {
    const lettersAndNumbersRegex = /^[a-zA-Z0-9._-]+$/;
    if (!lettersAndNumbersRegex.test(betaJoinFormData.username)) {
      return false;
    }
    if (betaJoinFormData.username.length < 5) {
      return false;
    }
    if (!remoteValidationResults.uniqueUsername) return false;
    return true;
  };
  const validateWalletAddress = () => {
    if (betaJoinFormData.walletAddress.length < 42) {
      return false;
    }
    if (!remoteValidationResults.uniqueWalletAddress) return false;
    return true;
  };

  useEffect(() => {
    if (isAlreadySubmitted) {
      setalertDialogDisplay({
        title: "",
        description: "Thank you, will send you an email when we are live.",
      });
    }
  }, [isAlreadySubmitted]);

  return (
    <div className="join-form__container w-full">
      {alertDialogDisplay && (
        <AlertDialog
          close={() => setalertDialogDisplay(null)}
          title={alertDialogDisplay.title}
          description={alertDialogDisplay.description}
        />
      )}
      {/* <p className="form-title" style={{ color: color }}>
        Reserve your username!
      </p> */}
      <form className="form flex">
        <div className="w-full">
          <div
            className={`form-group  with_appen ${color}`}
            style={{ position: "relative" }}
          >
            <span>blla.net/</span>
            <input
              value={betaJoinFormData.username}
              name="username"
              onChange={handleOnChange}
              onBlur={checkfieldsAvailability}
              style={{ color: color, borderColor: color }}
              type="text"
              className={`form-control ${color}`}
              id="username"
              placeholder="username"
              autoComplete="off"
            />
            {/* {betaJoinFormData.username &&
            remoteValidationResults.uniqueUsername &&
            !isRemoteCheckRunning && (
              <span style={{ position: "absolute", right: "10px", top: "0%" }}>
                <CheckCircle size={15} stroke={"green"} />
              </span>
            )} */}
            {!validateUsername() &&
              betaJoinFormData.username.length > 0 &&
              !isRemoteCheckRunning && (
                <span
                  style={{ position: "absolute", right: "10px", top: "0%" }}
                >
                  <AlertCircle size={15} stroke={"red"} />
                </span>
              )}{" "}
            {validateUsername() && (
              <span style={{ position: "absolute", right: "10px", top: "0%" }}>
                <CheckCircle size={15} stroke={"green"} />
              </span>
            )}
          </div>
          <div className="form-group" style={{ position: "relative" }}>
            <input
              value={betaJoinFormData.walletAddress}
              name="walletAddress"
              onChange={handleOnChange}
              onBlur={checkfieldsAvailability}
              style={{ color: color, borderColor: color }}
              type="text"
              className={`form-control ${color}`}
              id="address"
              placeholder="Wallet Address (CEX wallets are not accepted)"
            />
            {validateWalletAddress() && (
              <span style={{ position: "absolute", right: "10px", top: "25%" }}>
                <CheckCircle size={15} stroke={"green"} />
              </span>
            )}{" "}
            {!validateWalletAddress() &&
              betaJoinFormData.walletAddress.trim().length > 0 &&
              !isRemoteCheckRunning && (
                <span
                  style={{ position: "absolute", right: "10px", top: "25%" }}
                >
                  <AlertCircle size={15} stroke={"red"} />
                </span>
              )}
            {/* {betaJoinFormData.walletAddress &&
            !remoteValidationResults.uniqueWalletAddress &&
            !isRemoteCheckRunning && (
              <span style={{ position: "absolute", right: "10px", top: "25%" }}>
                <AlertCircle size={15} stroke={"red"} />
              </span>
            )} */}
          </div>
          <div className="form-group" style={{ position: "relative" }}>
            <input
              value={betaJoinFormData.email}
              name="email"
              onChange={handleOnChange}
              onBlur={checkfieldsAvailability}
              style={{ color: color, borderColor: color }}
              type="email"
              className={`form-control ${color}`}
              id="email"
              placeholder="Email Address"
              autoComplete="off"
            />
            {betaJoinFormData.email &&
              remoteValidationResults.uniqueEmail &&
              !isRemoteCheckRunning && (
                <span
                  style={{ position: "absolute", right: "10px", top: "25%" }}
                >
                  <CheckCircle size={15} stroke={"green"} />
                </span>
              )}
            {betaJoinFormData.email &&
              !remoteValidationResults.uniqueEmail &&
              !isRemoteCheckRunning && (
                <span
                  style={{ position: "absolute", right: "10px", top: "25%" }}
                >
                  <AlertCircle size={15} stroke={"red"} />
                </span>
              )}
          </div>
        </div>
        <div
          onClick={handleOnSubmit}
          style={{
            color: color === "white" ? "black" : "white",
            cursor: "pointer",
          }}
          className="flex justify-end flex-column my-[18px] mx-[10px] md:m-[13px] lg:m-[13px] xl-[10px]"
        >
          <img
            src="./items/lock/Path.svg"
            alt=" "
            className="w-[60px] md:w-[50px] lg:w-[60px] xl:w-[70px]"
          />
        </div>
        {/* <div className="form-group">
          <button
            onClick={handleOnSubmit}
            className={`button_${color}`}
            disabled={isLoading || isAlreadySubmitted}
            style={{ color: color === "white" ? "black" : "white" }}
          >
            {isLoading ? "..." : isAlreadySubmitted ? "Thank you" : "Submit"}
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default JoinForm;
