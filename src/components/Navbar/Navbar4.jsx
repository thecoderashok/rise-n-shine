import { useEffect, useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router';
import Logo from '/images/logo.png';
import {
	FaChevronDown,
	FaEnvelope,
	FaFacebookF,
	FaLinkedinIn,
	FaPinterestP,
	FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLightMode, MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { LuMoveRight } from 'react-icons/lu';

const Navbar4 = () => {
	//sticky

	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	});

	/* Method that will fix header after a specific scrollable */
	const isSticky = () => {
		const header = document.querySelector('.header-sticky');
		const scrollTop = window.scrollY;
		scrollTop >= 250
			? header.classList.add('is-sticky')
			: header.classList.remove('is-sticky');
	};

	//Menu Sidebar

	const menuSideBarRef = useRef(null);
	const sidebarContentRef = useRef(null);
	const bodyOverlay2Ref = useRef(null);
	const closeBtn2Ref = useRef(null);

	useEffect(() => {
		const menuSideBar = menuSideBarRef.current;
		const sidebarContent = sidebarContentRef.current;
		const bodyOverlay2 = bodyOverlay2Ref.current;
		const closeBtn2 = closeBtn2Ref.current;

		const addClasses = () => {
			sidebarContent.classList.add('opened');
			bodyOverlay2.classList.add('apply');
		};

		const removeClasses = () => {
			sidebarContent.classList.remove('opened');
			bodyOverlay2.classList.remove('apply');
		};

		if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
			menuSideBar.addEventListener('click', addClasses);
			closeBtn2.addEventListener('click', removeClasses);
			bodyOverlay2.addEventListener('click', removeClasses);
		}

		return () => {
			if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
				menuSideBar.removeEventListener('click', addClasses);
				closeBtn2.removeEventListener('click', removeClasses);
				bodyOverlay2.removeEventListener('click', removeClasses);
			}
		};
	}, []);

	//Menu Bar
	const menuBarRef = useRef(null);
	const offcanvasRef = useRef(null);
	const bodyOverlayRef = useRef(null);
	const closeBtnRef = useRef(null);

	useEffect(() => {
		const menuBar = menuBarRef.current;
		const offcanvas = offcanvasRef.current;
		const bodyOverlay = bodyOverlayRef.current;
		const closeBtn = closeBtnRef.current;

		const addClasses = () => {
			offcanvas.classList.add('opened');
			bodyOverlay.classList.add('apply');
		};

		const removeClasses = () => {
			offcanvas.classList.remove('opened');
			bodyOverlay.classList.remove('apply');
		};

		if (menuBar && offcanvas && bodyOverlay && closeBtn) {
			menuBar.addEventListener('click', addClasses);
			closeBtn.addEventListener('click', removeClasses);
			bodyOverlay.addEventListener('click', removeClasses);
		}

		return () => {
			if (menuBar && offcanvas && bodyOverlay && closeBtn) {
				menuBar.removeEventListener('click', addClasses);
				closeBtn.removeEventListener('click', removeClasses);
				bodyOverlay.removeEventListener('click', removeClasses);
			}
		};
	}, []);

	let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

	useEffect(() => {
		const mainMenuContent = document.querySelector('.main-menu-content');
		const mainMenuMobile = document.querySelector('.main-menu-mobile');

		if (mainMenuContent && mainMenuMobile) {
			const navContent = mainMenuContent.outerHTML;
			mainMenuMobile.innerHTML = navContent;

			const arrows = document.querySelectorAll(
				'.main-menu-mobile .has-dropdown > a'
			);

			arrows.forEach((arrow) => {
				const arrowBtn = document.createElement('BUTTON');
				arrowBtn.classList.add('dropdown-toggle-btn');
				arrowBtn.innerHTML = headerIcon;

				arrow.appendChild(arrowBtn);

				arrowBtn.addEventListener('click', (e) => {
					e.preventDefault();
					arrowBtn.classList.toggle('dropdown-opened');
					arrow.parentElement.classList.toggle('expanded');
					arrow.parentElement.parentElement.classList.add('dropdown-opened');
					arrow.parentElement.parentElement
						.querySelectorAll('.submenu')
						.forEach((submenu) => {
							submenu.style.display =
								submenu.style.display === 'block' ? 'none' : 'block';
						});
					arrow.parentElement.parentElement
						.querySelectorAll('.has-dropdown')
						.forEach((sibling) => {
							if (sibling !== arrow.parentElement) {
								sibling.classList.remove('dropdown-opened');
								sibling.querySelectorAll('.submenu').forEach((submenu) => {
									submenu.style.display = 'none';
								});
							}
						});
				});
			});
		}
	}, [headerIcon]);

	return (
		<div>
			<div className='offcanvas-area'>
				<div
					ref={offcanvasRef}
					className='offcanvas'
				>
					<div className='offcanvas_close-btn'>
						<button
							ref={closeBtnRef}
							className='close-btn'
						>
							<FaTimes />
						</button>
					</div>
					<div className='offcanvas_logo'>
						<Link to={'/'}>
							<img
								src={Logo}
								draggable='false'
							/>
						</Link>
					</div>
					<div className='offcanvas_title'>
						<p>
							Business consultation provides expert advice to improve
							performance.
						</p>
					</div>
					<div className='main-menu-mobile lg:none'></div>
					<div className='offcanvas_contact-info'>
						<div className='offcanvas_contact-title'>
							<h5>Contact Us</h5>
						</div>
						<ul>
							<li>
								<MdLocationPin />
								<Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
							</li>
							<li>
								<FaEnvelope />
								<Link to={'/'}>needhelp@company.com</Link>
							</li>
							<li>
								<FaPhoneAlt />
								<Link to={'/'}>+48 555 223 224</Link>
							</li>
						</ul>
					</div>
					<div className='offcanvas_input'>
						<div className='offcanvas_input-title'>
							<h4>Get Update</h4>
						</div>
						<form
							action='#'
							method='post'
						>
							<div className='relative'>
								<input
									type='email'
									name='email'
									placeholder='Enter E-Mail'
									required
								/>
								<button type='submit'>
									<IoMdPaperPlane />
								</button>
							</div>
						</form>
						<div className='status'></div>
					</div>
					<div className='offcanvas_social'>
						<div className='social-icon'>
							<Link to={'/'}>
								<FaFacebookF />
							</Link>
							<Link to={'/'}>
								<FaXTwitter />
							</Link>
							<Link to={'/'}>
								<FaPinterestP />
							</Link>
							<Link to={'/'}>
								<FaLinkedinIn />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				ref={bodyOverlayRef}
				className='body-overlay'
			></div>
			<div
				id='header-sticky'
				className='header-area header-sticky header-classic'
			>
				<div className='Container'>
					<div className='flex items-center justify-between lg:grid lg:grid-cols-12'>
						<div className='col-span-2'>
							<div className='header-logo'>
								<Link to={'/'}>
									<img
										src={Logo}
										draggable='false'
									/>
								</Link>
							</div>
						</div>
						<div className='col-span-8 hidden lg:block'>
							<div className='header-main-menu text-center'>
								<nav className='main-menu-content'>
									<ul>
										<li className='has-dropdown'>
											<Link to={'/'}>
												Home
												<span>
													<FaChevronDown />
												</span>
											</Link>
											<ul className='submenu'>
												<li>
													<Link to={'/'}>IT Consulting</Link>
												</li>
												<li>
													<Link to={'/home2'}>Business Advising</Link>
												</li>
												<li className='has-dropdown'>
													<Link to={'/home3'}>
														Business Consulting 01
														<span>
															<FaChevronDown />
														</span>
													</Link>
													<ul className='submenu !top-[102px]'>
														<li>
															<Link to={'/home3'}>
																Business Consulting Creative
															</Link>
														</li>
														<li>
															<Link to={'/home4'}>
																Business Consulting Classic
															</Link>
														</li>
														<li>
															<Link to={'/home5'}>
																Business Consulting Dark
															</Link>
														</li>
													</ul>
												</li>
												<li className='has-dropdown'>
													<Link to={'/home6'}>
														Business Consulting 02
														<span>
															<FaChevronDown />
														</span>
													</Link>
													<ul className='submenu !top-[154px]'>
														<li>
															<Link to={'/home6'}>
																Business Consulting Creative
															</Link>
														</li>
														<li>
															<Link to={'/home7'}>
																Business Consulting Classic
															</Link>
														</li>
														<li>
															<Link to={'/home8'}>
																Business Consulting Dark
															</Link>
														</li>
													</ul>
												</li>
												<li className='has-dropdown'>
													<Link to={'/home9'}>
														Finance Consulting
														<span>
															<FaChevronDown />
														</span>
													</Link>
													<ul className='submenu !top-[206px]'>
														<li>
															<Link to={'/home9'}>
																Finance Consulting Creative
															</Link>
														</li>
														<li>
															<Link to={'/home10'}>
																Finance Consulting Classic
															</Link>
														</li>
														<li>
															<Link to={'/home11'}>
																Finance Consulting Dark
															</Link>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<Link to={'/about'}>About</Link>
										</li>
										{/* <li className='has-dropdown'>
											<Link to={'/service'}>
												Service
												<span>
													<FaChevronDown />
												</span>
											</Link>
											<ul className='submenu'>
												<li>
													<Link to={'/service'}>service</Link>
												</li>
												<li>
													<Link to={'/service_details'}>service details</Link>
												</li>
											</ul>
										</li>
										<li className='has-dropdown'>
											<Link to={'/'}>
												Pages
												<span>
													<FaChevronDown />
												</span>
											</Link>
											<ul className='submenu'>
												<li>
													<Link to={'/about'}>About</Link>
												</li>
												<li>
													<Link to={'/service'}>service</Link>
												</li>
												<li>
													<Link to={'/service_details'}>service details</Link>
												</li>
												<li>
													<Link to={'/team'}>Team Member</Link>
												</li>
												<li>
													<Link to={'/pricing'}>Pricing</Link>
												</li>
												<li>
													<Link to={'/portfolio'}>Portfolio</Link>
												</li>
												<li>
													<Link to={'/portfolio_details'}>
														Portfolio details
													</Link>
												</li>
												<li>
													<Link to={'/contact'}>Contact</Link>
												</li>
											</ul>
										</li> */}
										<li className='has-dropdown'>
											<Link to={'/'}>
												Portfolio
												<span>
													<FaChevronDown />
												</span>
											</Link>
											<ul className='submenu'>
												<li>
													<Link to={'/portfolio'}>Portfolio</Link>
												</li>
												<li>
													<Link to={'/portfolio_details'}>
														Portfolio details
													</Link>
												</li>
											</ul>
										</li>
										<li className='has-dropdown'>
											<Link to={'/'}>
												Blog
												<span>
													<FaChevronDown />
												</span>
											</Link>
											<ul className='submenu'>
												<li>
													<Link to={'/blog_grid'}>blog grid</Link>
												</li>
												<li>
													<Link to={'/blog_details'}>blog details</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to={'/contact'}>Contact</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className='col-span-2'>
							<div className='header-right-box flex items-center gap-10 lg:gap-4 2xl:gap-8 justify-end'>
								<div className='header-btn hidden lg:block'>
									<Link to={'/contact'}>
										get a quote<span></span>
										<LuMoveRight />
									</Link>
								</div>
								<div className='hidden xl:block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[27px] before:h-20 before:w-[1px] before:bg-HeadingColor-0 before:opacity-10'>
									<Link
										to={'/home5'}
										className='text-white flex items-center justify-center size-9 rounded-full bg-white bg-opacity-15'
									>
										<MdLightMode size={'20'} />
									</Link>
								</div>
								<div className='header-bar lg:hidden'>
									<button
										ref={menuBarRef}
										className='menu-bar'
									>
										<span></span>
										<span></span>
										<span></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='sidebar-content'>
				<div
					ref={sidebarContentRef}
					className='sidebar'
				>
					<div className='sidebar_close-btn'>
						<button
							ref={closeBtn2Ref}
							className='close-btn2'
						>
							<FaTimes />
						</button>
					</div>
					<div className='sidebar_logo'>
						<Link to={'/'}>
							<img
								src={Logo}
								draggable='false'
							/>
						</Link>
					</div>
					<div className='sidebar_title'>
						<p>
							Business consultation provides expert advice to improve
							performance.
						</p>
					</div>
					<div>
						<ul>
							<li>
								<Link to={'/'}>
									<button>Managed IT Services</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Cloud Services</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Cybersecurity Services</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Network Services</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Data Analytics</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>IT Consulting Services</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Backup and Disaster Recovery</button>
								</Link>
							</li>
							<li>
								<Link to={'/'}>
									<button>Website Development</button>
								</Link>
							</li>
						</ul>
					</div>
					<div className='sidebar_contact-info'>
						<div className='sidebar_contact-title'>
							<h5>Contact Us</h5>
						</div>
						<ul>
							<li>
								<MdLocationPin />
								<Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
							</li>
							<li>
								<FaEnvelope />
								<Link to={'/'}>needhelp@company.com</Link>
							</li>
							<li>
								<FaPhoneAlt />
								<Link to={'/'}>+48 555 223 224</Link>
							</li>
						</ul>
					</div>
					<div className='sidebar_input'>
						<div className='offcanvas_input-title'>
							<h4>Get Update</h4>
						</div>
						<form
							action='#'
							method='post'
						>
							<div className='relative'>
								<input
									type='email'
									name='email'
									placeholder='Enter E-Mail'
									required
								/>
								<button type='submit'>
									<IoMdPaperPlane />
								</button>
							</div>
						</form>
						<div className='status'></div>
					</div>
					<div className='sidebar_social'>
						<div className='sidebar-social-icon'>
							<Link to={'/'}>
								<FaFacebookF />
							</Link>
							<Link to={'/'}>
								<FaXTwitter />
							</Link>
							<Link to={'/'}>
								<FaPinterestP />
							</Link>
							<Link to={'/'}>
								<FaLinkedinIn />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				ref={bodyOverlay2Ref}
				className='body-overlay2'
			></div>
		</div>
	);
};

export default Navbar4;
