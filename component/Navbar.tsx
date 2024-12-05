import Image from 'next/image'
import logo from '/public/images/logo.png';

interface NavbarProps {
    handleClick: (route: string) => void
}
const Navbar = ({ handleClick }: NavbarProps) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#629584' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image className='mx-1' src={logo} width={30} height={30} alt='LogoImage' />
                    <span className='logo-border fonts'>M</span>ovie<span className='logo-border'>M</span>astery
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuBar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: '0px auto' }}>
                        <li className="nav-item ">
                            <button className='nav-link color' onClick={() => handleClick('NowPlaying')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className='nav-link color' onClick={() => handleClick('Popular')}>Popular</button>
                        </li>
                        <li className="nav-item">
                            <button className='nav-link color' onClick={() => handleClick('TopRated')}>Top Rated</button>
                        </li>
                        <li className="nav-item">
                            <button className='nav-link color' onClick={() => handleClick('Upcoming')}>Upcoming</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar