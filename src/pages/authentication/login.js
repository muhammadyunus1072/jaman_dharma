import LoginContent from "../../../components/authentication/login/login-content";
import classes from "./login.module.css";
function LoginPage() {
  return (
    <div className={classes.login_page}>
      <LoginContent />
    </div>
  );
}
export default LoginPage;
