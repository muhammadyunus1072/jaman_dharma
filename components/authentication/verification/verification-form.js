import Link from "next/link";
import InputOtp from "./input-otp";

function VerificationForm() {
  return (
    <div className="card rounded-5">
      <div className="card-body">
        <h1 className="card-title mt-4 text-center">Verifikasi</h1>
        <p className="text-center">Kode OTP telah dikirimkan ke email anda</p>
        <form>
          <div className="row mx-auto">
            <div className="col-md-12">
              <div className="mb-3 d-flex justify-content-evenly">
                <InputOtp />
                <InputOtp />
                <InputOtp />
                <InputOtp />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <p className="fs-6 text-nowrap">Belum menerima kode?</p>
                  <a className="fs-6 text-nowrap">Kirim kode kembali</a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="d-grid">
                  <Link
                    className="btn btn-warning w-full"
                    href="/authentication/login"
                  >
                    MASUK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default VerificationForm;
