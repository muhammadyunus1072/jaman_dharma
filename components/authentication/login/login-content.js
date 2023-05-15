import AuthenticationLogo from "../logo/authentication-logo";
import LoginForm from "./login-form";
function LoginContent() {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center ">
      <div className="w-100 row mt-5">
        <div className="col-sm-12 col-lg-6 order-lg-2">
          <AuthenticationLogo />
        </div>
        <div className="col-sm-12 col-lg-6 order-lg-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default LoginContent;
