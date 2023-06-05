import "./SignUpStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Hero from "../components/Hero";
// import FormImg from "../images/form.jpeg";

function SignUp() {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${require("../images/form.jpeg")})`,
        backgroundsize: "cover"
      }}
    >
      <Navbar />
      <div className="container">
        <h1>Welcome!</h1>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Phone:
            <input type="phone" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
