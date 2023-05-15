import classes from "./input-otp.module.css";
function InputOtp() {
  return <input type="text" className={classes.input_otp} maxLength="1" />;
}
export default InputOtp;
