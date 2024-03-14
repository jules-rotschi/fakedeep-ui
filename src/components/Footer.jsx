import { Link } from "react-router-dom"
import './footer.css'

export default function Footer() {
  return(
    <footer>
      <div className="footer-content">
        <div className="footer-content__left headline headline-medium">Claire Voyance</div>
        <div className="footer-content__right">
          <menu className="footer-content__menu">
            <li className="footer-content__menu__item label label-small"><Link to="/">Accueil</Link></li>
            <li className="footer-content__menu__item label label-small"><Link to="/404">Prendre rendez-vous</Link></li>
            <li className="footer-content__menu__item label label-small"><Link to="/404">À propos</Link></li>
          </menu>
        </div>
      </div>
    </footer>
  ) 
}