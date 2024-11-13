import logo from "../assets/logo_footer.png";

function Footer() {
    return (
      <footer>
      <img src={logo} alt="placeholder for logo"/>
      <ul>
        <h3>Website Navigation</h3>
        <li><a href="/home">Homepage</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/menu">Login</a></li>
      </ul>
      <ul>
        <h3>Contact</h3>
        <li>Adress</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <ul>
        <h3>Social Media</h3>
        <li>Adress</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      </footer>
    );
  }

  export default Footer;

  /*
  TODO:

  */