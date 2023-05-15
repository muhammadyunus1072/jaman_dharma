import Link from "next/link";

function LoginForm() {
  return (
    <div className="card rounded-5 w-75">
      <div className="card-body">
        <h1 className="card-title mt-4 text-center">Jaring Aspirasi</h1>
        <h1 className="card-title text-center">Respon Cepat</h1>
        <form>
          <div className="row w-75 mx-auto">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Email atau Username
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Email atau Username"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control border-primary"
                  placeholder="Password"
                />
                <div className="mt-2 text-end">
                  <a className="">Lupa Password ?</a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="d-grid">
                  <Link
                    href="/authentication/verification"
                    className="btn btn-warning w-full"
                  >
                    MASUK
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <p>Belum memiliki akun?</p>
                  <Link href="/authentication/register">Daftar</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
