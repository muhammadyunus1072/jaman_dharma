import classes from "./authentication-logo.module.css";
function AuthenticationLogo() {
  return (
    <div className="w-100 h-100 text-center d-flex align-items-center">
      <div className="w-full">
        <h1 className={classes.heading}>JAMAN</h1>
        <h1 className={classes.heading}>DHARMA</h1>
        <h1 className="">Jaring Pengaman Dharma</h1>
      </div>
    </div>
  );
}
export default AuthenticationLogo;
