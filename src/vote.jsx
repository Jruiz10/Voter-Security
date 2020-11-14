import logo from "./images/logo.png";

function Vote() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="row">
            <div class="col">
              <img id="logo" src={logo}></img>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <form>
                  <h1>Sign In</h1>

                  <div className="form-group">
                    <label>SSN</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Social Security Number"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>

                  <button type="submit" className="btn btn-danger">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Vote;
