import Link from "next/link";
function RegisterForm() {
  return (
    <div className="card rounded-5 w-75">
      <div className="card-body">
        <h1 className="card-title mt-4 text-center fw-bold">Daftar</h1>
        <form>
          <div className="row w-75 mx-auto">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Foto KTP (optional)
                </label>
                <input
                  type="text"
                  className="form-control border-primary text-center"
                  placeholder="[upload]"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Foto Diri
                </label>
                <input
                  type="text"
                  className="form-control border-primary text-center"
                  placeholder="[upload]"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  NIK
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Ketik Nomor Induk Kependudukan(KTP)"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Ketik Nama sesuai KTP"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Tempat Tinggal
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Ketik tempat tinggal saar ini"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  className="form-control border-primary text-center"
                  placeholder="HH-BB-TTTT"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Jenis Kelamin
                </label>
                <select class="form-select">
                  <option value="male">Laki - Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Nomor Ponsel Aktif
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="+62 | 80 000 000 000"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Pekerjaan/Jabatan/Organisasi
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Pekerjaan/Jabatan/Organisasi"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Ketik nama identitas akun anda"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Minimal 8 karakter & berisi alfanumerik"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="txt-input-name" className="form-label">
                  Password Confirmation
                </label>
                <input
                  type="text"
                  className="form-control border-primary"
                  placeholder="Ketik ulang Password"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="d-grid">
                  <Link
                    href="/authentication/login"
                    className="btn btn-warning w-full mt-3"
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
export default RegisterForm;
