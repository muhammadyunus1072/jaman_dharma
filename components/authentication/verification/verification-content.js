import AuthenticationLogo from "../logo/authentication-logo";
import VerificationForm from "./verification-form";

function VerificationContent() {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center ">
      <div className="w-100 row mt-5">
        <div className="col-lg-6 order-lg-2">
          <AuthenticationLogo />
        </div>
        <div className="col-lg-6 order-lg-1">
          <VerificationForm />
        </div>
      </div>
    </div>
  );
}
export default VerificationContent;
