function Register() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="row">
            <div class="col">
              <img id="logo" src={logo}></img>
            </div>
          </div>
          <Navbar />
          <div class="container">
            <h1>WELCOME!</h1>
            <h4>This wesite is for online voting</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Register;
