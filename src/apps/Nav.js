import logo from "../assets/logo.png";

function Nav() {
  return (
    <nav>
      <ul>
        <li><img src={logo} alt="placeholder for logo"/></li>
        <li><a href="/home">Homepage</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/menu">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

/*
TODO:

*/
