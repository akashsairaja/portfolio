import React from 'react';

import config from '../../config';

const Experience = () => (
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div className="col-md-12 example-title">
				<h2>Professional Work Experience </h2>
			</div>
			<div className="col-xs-12  col-xs-offset-1 col-sm-8 col-md-12 col-xl-12 col-sm-offset-2">
				<ul className="timeline timeline-centered">
					{

						config.experience.map(({
												   timeline, designation, icon, isLink,
												   company, location, developed, isNewStart = false,
											   }, index) => (
							<React.Fragment>

								{
									isNewStart ? (
										<li className="timeline-item period">
											<div className="timeline-info"/>
											<div className="timeline-marker"/>
											<div className="timeline-content">
												<h2 className="timeline-title">
													{timeline}
												</h2>
											</div>
										</li>
									) : (
										<li className="timeline-item" key={index}>
											<div className="timeline-info">
												<span>{timeline} </span>
											</div>
											<div className="timeline-marker"/>
											<div className="timeline-content">
												<h3 className="timeline-title mt-2">{designation}</h3>
												<pre className="my-2 overflow-hidden">
													{company}
													<br/>
													{location}
                                				</pre>
												<ul className="list">
													{
														developed.map((item, index) => (
															<li className="list-group my-2" key={index}>
																<span className="d-inline-flex text-dark text-left">
																	<i className={`${icon} text-orange mx-2 mt-1`}/>
																	{
																		isLink ? (
																			<pre
																				className="btn btn-link py-0 px-2 overflow-hidden"
																				onClick={() => window.open(item, '_target')
																				}
																			>
																				{item}
																			</pre>
																		) : item
																	}
																</span>
															</li>
														))
													}
												</ul>
											</div>
										</li>
									)
								}
							</React.Fragment>
						))
					}
				</ul>
			</div>
		</div>
	</div>
);

export default React.memo(Experience);
