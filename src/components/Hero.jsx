import tear from "../assets/img/tear.svg";
const Hero = () => {
  return (
    <div className="home-hero-bg-img">
      <img src={tear} alt="forme" className="home-hero-forme"></img>
      <div>
        <div className="home-hero-ready">
          Prêts à faire du tri dans vos placards ?
          <button>Commencer à vendre</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
