import React from 'react';

import config from '../../config';

import './style.scss';

const images = config.images;

const Profile = ({ isDarkMode }) => (
	<section className="about ml-auto">
		<div className="container bg-white">
			<div className="section-title">
				<h2 className="ml-auto d-flex">About Me <span role="img" aria-labelledby="simile">😊 </span></h2>
				<p> {config.profile.aboutme}</p>
			</div>
			<div className="row py-5">
				<div className="col-md-12"><h3> {config.designation} </h3></div>
				<div className="col-lg-4">
					<img id="profile"
						 style={{ filter: isDarkMode ? 'invert(100%) hue-rotate(180deg)' : '' }}
						 src={isDarkMode ? images.profileBE : images.profilePic} className={`img-fluid`}
						 alt=""/>
				</div>
				<div className="col-lg-8 pt-4 pt-lg-0 content">
					<div className="row py-2">
						<div className="col-lg-6">
							<ul className="text-left">
								<li>
									<i className="fa fa-arrow-circle-right"/>{' '}
									<strong>Birthday:</strong> {config.profile.dob}
								</li>
								<li>
									<i className="fa fa-arrow-circle-right"/>{' '}
									<strong>Location:</strong> {config.profile.location}
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<ul className="text-left">
								<li>
									<i className="fa fa-arrow-circle-right"/>{' '}
									<strong>Degree:</strong> {config.profile.degree}
								</li>
								<li>
									<i className="fa fa-arrow-circle-right"/>{' '}
									<strong>Email:</strong> {config.profile.email}
								</li>
							</ul>
						</div>
					</div>
				</div>
				{
					config.resume !== '' && (
						<div className="col-lg-12 col-md-12 my-2">
							<div className="d-flex justify-content-start">
								<a href={config.resume} target="_blank" rel="noopener noreferrer">
									<button type="button" className="btn btn-primary btn-lg ml-5 px-3">
										Download <i className="fa fa-download px-2 mt-1"/>
									</button>
								</a>
							</div>
						</div>
					)
				}
			</div>
		</div>
	</section>
);

export default React.memo(Profile);
