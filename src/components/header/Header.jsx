import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faHatCowboy, faTaxi } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
  <div className='header'>
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faHatCowboy} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport Taxis</span>
        </div>
      </div>
      <h1 className="headerTitle">A lifetime of discounts? It's genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock savings of 10% or more with a free booking account.
        </p>
        <button className="headerBtn">Sign in / Register</button>
    </div>
  </div>
  )
}

export default Header