import logo from "./images/logo.png";
import "./App.css";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";

function App() {
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
              <div id="border" class="col">
                <h3>How to Vote</h3>
                <hr></hr>
                <div class="col">
                  The USVA is a new way to vote without going to your local
                  polls.
                  <br></br>
                  <br></br>
                  Due to the COVID-19 Crisis online voting has become a better
                  and safer way to vote.
                  <br></br>
                  <br></br>
                  If you would like to register to vote you can simply search
                  for the state in which you live and you will be redirected to
                  register.
                  <br></br>
                  <br></br>
                  Once youre registered you will be able to create an account
                  using your voter registration number and your SSN.
                  <br></br>
                  <br></br>
                  This is what keeps your vote secure and allows you to vote
                  confidentally.
                </div>
              </div>
              <div id="border" class="col">
                <h3>Register Here</h3>
                <hr></hr>
                <div className="form-group">
                  <input
                    id="state"
                    type="text"
                    className="form-control"
                    placeholder="What state do you live in?"
                  />
                  <a
                    id="search"
                    type="submit"
                    className="btn btn-danger"
                    href="https://www.vote.org/state/new-york"
                  >
                    Enter search
                  </a>
                </div>
              </div>
              <div id="border" class="col">
                <h3>VOTE ONLINE!</h3>
                <hr></hr>
                <div class="col">
                  <form>
                    <h5>Sign Up</h5>

                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
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
                      Sign Up
                    </button>
                    <p className="forgot-password text-right">
                      Already registered <Link to="/Vote"> sign in?</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div class="footer-limiter">
          <div class="footer-left">
            <p class="footer-links">Hackathon 2020</p>

            <p>United States Voters Association © 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
