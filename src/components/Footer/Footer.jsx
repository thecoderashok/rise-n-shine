import { Link } from 'react-router';
import footerLogo from '/images/logo.png';
import {
    FaAnglesRight,
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
    FaXTwitter,
} from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
    return (
        <>
            <div className='bg-PrimaryColor py-9'>
                <div className='Container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center'>
                        <div className='flex items-center gap-5'>
                            <div className='size-[60px] bg-BorderColor2 rounded-full flex items-center justify-center text-white'>
                                <FaRegEnvelope size={'22'} />
                            </div>
                            <div>
                                <h6 className='font-FiraSans text-[15px] text-white'>
                                    Say Hello
                                </h6>
                                <Link to={'/'}>
                                    <button className='font-FiraSans text-xl text-white font-medium'>
                                        example@gmail.com
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex md:justify-center md:border-l lg:border-l-0 xl:border-x-2 border-BorderColor2 py-2'>
                            <Link to={'/'}>
                                <img
                                    src={footerLogo}
                                    draggable='false'
                                />
                            </Link>
                        </div>
                        <div className='flex lg:justify-end'>
                            <ul className='flex gap-3 items-center'>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
                                    >
                                        <ImFacebook2 size={'15'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
                                    >
                                        <FaXTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
                                    >
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
                                    >
                                        <FaInstagram />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-[url('/images/footer_bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
                <div className='Container'>
                    <div className='grid grid-cols-12 gap-6 lg:gap-0'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6'>
                            <h4 className='font-FiraSans text-2xl text-HeadingColor font-medium'>
                                About Us
                            </h4>
                            <p className='font-FiraSans text-TextColor2 text-[15px] mt-5 mb-8 max-w-[290px] w-full'>
                                Continually plagiarize virtual web service with resource
                                maximizing monotonectally reintermediate expanded
                            </p>
                        </div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-3'>
                            <h4 className='font-FiraSans text-2xl text-HeadingColor font-medium mb-[30px]'>
                                Company
                            </h4>
                            <ul className='overflow-hidden'>
                                <li>
                                    <Link
                                        to={'/about'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            About Us
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/team'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Meet Our Team
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Ingrations
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/contact'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Contact Us
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/blog'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Blog
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-3'>
                            <h4 className='font-FiraSans text-2xl text-HeadingColor font-medium mb-[30px]'>
                                Services
                            </h4>
                            <ul className='overflow-hidden'>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Consultant
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Web Development
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            UI Design
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1 mb-3'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            Networking
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className='inline-block'
                                    >
                                        <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor transition-all duration-500 hover:text-PrimaryColor hover:gap-1'>
                                            <FaAnglesRight className='text-xs text-PrimaryColor' />
                                            SEO Marketing
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='Container flex flex-col gap-5 md:flex-row md:gap-0 justify-between mt-[120px] py-6 border-t border-HeadingColor border-opacity-20'>
                    <p className='font-FiraSans text-HeadingColor text-[15px]'>
                        Copyright © 2025{' '}
                        <Link
                            to={'/'}
                            className='text-PrimaryColor'
                        >
                            advisar
                        </Link>{' '}
                        . Designed & Developed by Dream-IT
                    </p>
                    <div>
                        <ul className='flex gap-7'>
                            <li>
                                <Link to={'/'}>
                                    <button className='font-FiraSans text-HeadingColor text-[15px] transition-all duration-500 hover:text-PrimaryColor'>
                                        Privacy & Terms
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <button className='font-FiraSans text-HeadingColor text-[15px] transition-all duration-500 hover:text-PrimaryColor'>
                                        FAQ
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <button className='font-FiraSans text-HeadingColor text-[15px] transition-all duration-500 hover:text-PrimaryColor'>
                                        Contact Us
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
