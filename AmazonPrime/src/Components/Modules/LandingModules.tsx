import React from "react";
import Nav from "../Reuse_Components/Nav";
import  Footer  from "../Reuse_Components/Footer";
import "../../App.css";

const LandingModules = () => {
  return (
    <div className="Landingmodule">
      <Nav />
      <div className="bgi1">
        <div className="wtclr agn1">
          <h2>Welcome to Prime Video</h2>
          <h4>
            Watch the latest movies, TV shows, and award-winning Amazon
            Originals
          </h4>
          <button>Sign in to join prime</button>
        </div>
      </div>
      <div className="bgi2">
        <div className="wtclr agn2">
          <h2>Movie rentals on Prime Video</h2>
          <h4>Early Access to new movies, before digital subscription</h4>
          <button>Rent Now</button>
        </div>
      </div>
      <div className="bgi3">
        <div className="wtclr agn3">
          <h2>Even better with Fire TV Stick</h2>
          <h4>
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
            Press the voice button on the remote and say the name of the title
            you want to watch to find it in seconds.
          </h4>
          <button>Get Started</button>
        </div>
      </div>
      <div className="bgi4">
        <div className="wtclr agn4">
          <h2>Family Friendly</h2>
          <h4>
            With easy to use Parental Controls and a dedicated kids page, enjoy
            secure, ad-free kids entertainment. Kids can enjoy popular TV shows
            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </h4>
          <button>Get Started</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingModules;
