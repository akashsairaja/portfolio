import React from 'react';

import images from '../../images';
import Pdf from '../../images/akash-resume.pdf';

import './style.scss';

function Profile() {

	return (
		<section className="about ml-auto">
			<div className="container bg-white">
				<div className="section-title">
					<h2 className="ml-auto d-flex">About Me <span role="img" aria-labelledby="simile">😊 </span></h2>
					<p>
						Over 2+ years of strong experience as Full Stack developer with solid
						understanding of front - end technologies, frameworks, Restful web services
						and Data Base designing.
					</p>
				</div>

				<div className="row py-5">
					<div className="col-lg-4">
						<img id="profile" src={images.profilePic} className="img-fluid" alt=""/>
					</div>
					<div className="col-lg-8 pt-4 pt-lg-0 content">
						<h3>FullStack Developer.</h3>
						<pre className="font-italic overflow-hidden text-wrap">
                            Currently Building Functional Apps using Technoloiges Like , React
                            ,Redux , Node JS , Spring boot , HDFS , Redis , PostgresSQL, Elastic
                            Search
                        </pre>
						<div className="row">
							<div className="col-lg-6">
								<ul className="text-left">
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Birthday:</strong> 15,July 1996
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Website:</strong> www.akashkiran.esy.es
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Phone:</strong> +91 - 8667556106
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Location:</strong> Chennai , TamilNadu , India
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul className="text-left">
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Age:</strong> 23
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Degree:</strong> MBA/ BE
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Email:</strong> akashsairaja@gmail.com
									</li>
									<li>
										<i className="fa fa-arrow-circle-right"/>{' '}
										<strong>Freelance:</strong> Available
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="d-flex justify-content-start">
							<a href={Pdf} target="_blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-primary btn-lg ml-5 px-3">
									Download <i className="fa fa-download px-2 mt-1"/>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile;