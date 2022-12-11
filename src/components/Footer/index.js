import "./style.css";

const Footer = (props) => {
  return (
    <div>
      <div className="footer" style={{color:props.color}}>
        © 2022 BllA, Inc. All rights reserved. <a href="https://blla.notion.site/Welcome-to-BllA-5aa11b676045477ba3282d5922b6292f" style={{color:props.color}} target="_blank" rel="noreferrer">• Terms </a> <a href="https://blla.notion.site/Privacy-Notice-67292195ec2f451f83b15eb420ca5732" style={{color:props.color}} target="_blank" rel="noreferrer">• Privacy</a>
      </div>
      <div className="mobfooter">
        © 2022 BllA, Inc. All rights reserved <a href="https://blla.notion.site/Welcome-to-BllA-5aa11b676045477ba3282d5922b6292f" style={{color:props.color}} target="_blank" rel="noreferrer">T&C</a> <a href="https://blla.notion.site/Privacy-Notice-67292195ec2f451f83b15eb420ca5732" style={{color:props.color}} target="_blank" rel="noreferrer">Privacy</a>
      </div>
    </div>
  );
};

export default Footer;
