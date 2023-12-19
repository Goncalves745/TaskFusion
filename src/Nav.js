import './MyApp.css';

function Nav({children}) {

  const enabled = false;
  const text = 'OK';
  const placeholder = 'input value...';
  const size = 20;

  return (
    <nav>
        <h2>My Section</h2>
        {children}
        <br />
        <input placeholder={placeholder} size={size} />
        <button disabled={!enabled}>{text}</button>
    </nav>
  );
}

export default Nav;