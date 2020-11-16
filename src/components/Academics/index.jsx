import React from 'react';

const Academics = () => (
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div className="col-md-12 example-title">
				<h2>Education </h2>
			</div>
			<div className="col-xs-12  col-xs-offset-1 col-sm-8 col-md-12 col-xl-12 col-sm-offset-2">
				<ul className="timeline timeline-centered ">
					<li className="timeline-item">
						<div className="timeline-info">
							<span> DECEMBER , 2020 </span>
						</div>
						<div className="timeline-marker"/>
						<div className="timeline-content">
							<h3 className="timeline-title mt-2">
								MBA - International Business
							</h3>
							<pre className="my-2 overflow-hidden">
                                    Pondicherry University
                                    <br/>
                                    Chennai, Tamil Nadu
                                </pre>
						</div>
					</li>
					<li className="timeline-item">
						<div className="timeline-info">
							<span>May 25, 2017 </span>
						</div>
						<div className="timeline-marker"/>
						<div className="timeline-content">
							<h3 className="timeline-title text-wrap mt-2 ">
								Electronics & Communication - Engineer
							</h3>
							<pre className="my-2 overflow-hidden">
                                    {' '}
								Meenakashi Univerisity
                                    <br/>
                                    Chennai, Tamil Nadu
                                </pre>
						</div>
					</li>
					<li className="timeline-item">
						<div className="timeline-info">
							<span> MAY, 2013 </span>
						</div>
						<div className="timeline-marker"/>
						<div className="timeline-content">
							<h3 className="timeline-title mt-2">Intermediate, Biology</h3>
							<pre className="my-2 overflow-hidden">
                                    Avichi Higher Secondary School
                                    <br/>
                                    Chennai, Tamil Nadu
                                </pre>
						</div>
					</li>
					<li className="timeline-item">
						<div className="timeline-info">
							<span>May, 2011 </span>
						</div>
						<div className="timeline-marker"/>
						<div className="timeline-content">
							<h3 className="timeline-title text-wrap mt-3">High School,</h3>
							<pre className="my-2 overflow-hidden">
                                    {' '}
								Pathipaga Chemmal K Ganapathy Government Higher secondary School
                                    <br/>
                                    Chennai, Tamil Nadu
                                </pre>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Academics;
