import './homepage.css';
import HeaderNavigation from '../misc/HeaderNavigation/HeaderNavigation';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <HeaderNavigation/>
            <div className={'homepage-introduction'}>
                <div className={'homepage-introduction-left'}>
                    <span >Invest into new property easily with</span>
                    <span>Housing Connector</span>
                    <span>Where Smart Real Estate Investments Happen!</span>
                    <div className={'homepage-introduction-status'}>
                        <div className={'homepage-introduction-status-item'}>
                            <div className={'left-vertical-line'}></div>
                            <div className={'homepage-introduction-status-item-vertical-line'}>
                                <span>50k+</span>
                                <span>Find Property</span>
                            </div>
                        </div>
                        <div className={'homepage-introduction-status-item'}>
                            <div className={'left-vertical-line'}></div>
                            <div className={'homepage-introduction-status-item-vertical-line'}>
                                <span>10k+</span>
                                <span>Investors</span>
                            </div>
                        </div>
                    </div>
                    <div className={'homepage-introduction-right'}>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default HomePage;