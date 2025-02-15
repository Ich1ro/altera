import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-content'>
				<div className='footer-content-top'>
					<img src='/img/logo.svg' alt='logo' />
				</div>
				<div className='footer-content-middle'>
					<div className='footer-content-middle-left'>
						<div className='footer-content-middle-left-title'>
							<div className='footer-content-middle-left-title-dot'></div>
							<div className='footer-content-middle-left-title-text'>Sign Up for Private Beta</div>
						</div>
						<form action='' className='footer-content-middle-left-form'>
							<input type='email' placeholder='Email' />
							<p>Type:</p>
							<div className='footer-content-middle-left-form-checkbox'>
								<input type='checkbox' />
								<p>Investor</p>
							</div>
							<div className='footer-content-middle-left-form-checkbox'>
								<input type='checkbox' />
								<p>Partner</p>
							</div>
							<button>Submit</button>
						</form>
					</div>
					<div className='footer-content-middle-right'>
						<div className='footer-content-middle-right-links'>
							<h5>Quick Links</h5>
							<a href='/'>About</a>
							<a href='/'>Research</a>
							<a href='/'>What we are building</a>
							<a href='/'>Founders</a>
							<a href='/'>Contact</a>
						</div>
						<div className='footer-content-middle-right-links'>
							<h5>Documentation</h5>
							<a href='/'>Privacy Policy</a>
							<a href='/'>Terms of Use</a>
							<a href='/'>Company Documents</a>
							<a href='/'>Licenses</a>
						</div>
						<div className='footer-content-middle-right-links'>
							<h5>Social Media</h5>
							<a href='/'>LinkedIn</a>
							<a href='/'>Twitter</a>
						</div>
					</div>
				</div>
				<div className='footer-content-bottom'>
          <p>Copyright © 2024 Altera.All Rights Reserved.</p>
        </div>
			</div>
		</div>
	);
};

export default Footer;
