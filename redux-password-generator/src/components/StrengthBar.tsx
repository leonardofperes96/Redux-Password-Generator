
type passString = {
  passStrength: string;
  passColor: string;
};

const StrengthBar = ({ passStrength, passColor }: passString) => {
  
  return (
    <div
      style={{ width: passStrength, background: passColor, height: "0.5rem" }}
    ></div>
  );
};

export default StrengthBar;
