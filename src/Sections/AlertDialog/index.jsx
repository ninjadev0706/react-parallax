import "./style.css";
import { X } from "react-feather";
function AlertDialog({ title, description, close = () => {} }) {
  return (
    <div className="alert_wrapper">
      {/* <div className="alet_overlay"> */}
      <div className="alert_box">
        <div className="alert_header">
          <h3>{title}</h3>
          <button onClick={() => close()} className=" close_button">
            <X />
          </button>
        </div>
        <div className="alert_body items-center">
          <p>{description}</p>
        </div>
        <div className="alert_footer">
          <button onClick={() => close()} className="cancel">
            OK
          </button>
          {/* <button className="delete">Delete</button> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AlertDialog;
