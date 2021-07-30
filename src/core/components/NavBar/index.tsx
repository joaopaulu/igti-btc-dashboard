import ImgBtc from 'core/assets/images/btc.png';
import './style.scss';

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">                      
          <h1><img src={ImgBtc} alt="BTC" className="img-logo" /><span className="text-primary">Bitcoin</span> Info</h1>    
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
