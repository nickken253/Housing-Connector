import {Link} from 'react-router-dom';
import './header.css';
import {Image} from "antd";
import logo from '../../../assets/logo.png';

const HeaderNavigation = () => {
    return (
        <div className={'header-container'}>
            <nav className={'header-navigation'}>
                <div className={'header-logo'}>
                    <Image src={logo} alt={'logo'}/>
                </div>
                <div className={'header-link'}>
                    <Link to="/">Rent</Link>
                    <Link to="/buy">Buy</Link>
                    <Link to="/sell">Sell</Link>
                    <Link to="/manage-property">
                        <span>Manage Property</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                    <Link to="/resources">
                        <span>Resources</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                </div>
                <div className={'header-login'}>
                    <Link to="/login">Login</Link>
                    <Link className={'ant-btn-primary'} to="/register">Register</Link>
                </div>
            </nav>
        </div>
    );
}

export default HeaderNavigation;