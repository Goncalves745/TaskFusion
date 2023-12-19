import './MyApp.css';

function Header() {

  return (
      <header className="page-header">
        <h1>Logo</h1>
        <div style={{width: "70%",}}>
          <input style={{width: 100,}}></input>
          <button>Search</button>
        </div>
        <div className="Reg-login">
          <a style={{paddingRight: 10,}} href='#'>Register</a>
          <a href='#'>Login</a>          
          {/*<p style={{paddingRight: 10,}}>Reg</p>
          <p>Log</p>*/}
        </div>
      </header>
  );
}

export default Header;