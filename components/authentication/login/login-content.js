import AuthenticationLogo from "../logo/authentication-logo";
import LoginForm from "./login-form";
function LoginContent() {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center ">
      <div className="w-100 row mt-5">
        <div className="col-md-6">
          <LoginForm />
        </div>
        <div className="col-md-6">
          <AuthenticationLogo />
        </div>
      </div>
    </div>
  );
}
export default LoginContent;
