import "./style.css";
// import metamask from "../../assets/Icons/metamask.svg";
import MacosIcon from "../../assets/Icons/macos";
import WindowsIcon from "../../assets/Icons/windows";
import AppleIcon from "../../assets/Icons/apple";
import googlePlayIcon from "../../assets/Icons/googlePlay.png";
const SigninBtn = (props) => {
  return (
    <div className="btn-container">
      {/* <div className="row m-0">
        <div className="sign-btn d-flex justify-content-center align-items-center mb-5">
          <span className="me-3">Sign in with</span>
          <span>
            <img className="me-3" src={metamask} alt="" width="30px" /> METAMASK
          </span>
        </div>
      </div> */}
      <div style={{ display: 'flex' }}>
        {/* <span className="me-3 ico-text">or</span> */}
        <div className="icon-grp">
          <MacosIcon className="icon-item" color={props.color} />
          <WindowsIcon className="icon-item" color={props.color} />
          <AppleIcon className="icon-item" color={props.color} />
          <img className="icon-item" src={googlePlayIcon} alt=""></img>
        </div>
      </div>
      <div className="backGrey" style={{ backgroundColor: props.background }}>
      </div>
    </div>
  );
};

export default SigninBtn;
