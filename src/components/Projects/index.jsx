import React from 'react';

const Projects = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12 col-xl-12">
				<div className="card my-4">
					<div className="card d-flex card-title py-2">
                            <span className="d-flex">
                                <strong className="d-flex-inline mr-auto ">
                                    <i className="fa fa-cloud ml-5 text-orange"/> Lima - Cloud
                                    Enteripise Data HUB
                                </strong>
                                <strong className=" d-flex-inline ml-auto mr-3">
                                    Client : Intel / Nokia{' '}
                                </strong>
                            </span>
					</div>
					<div className="card-body text-wrap text-left">
						<p>
							{' '}
							Create and manage remote data source connections such as File
							Systems (HDFS, S3, etc.), Database Systems (MSSQL, ORALCE, MySQL,
							MongoDB, etc.) and to load the data into different systems using Node ,
							Go API. Clients can create transformations such as to perform query
							operations like Join, Union and Upsert etc. from UI. Node will help
							to generate data and pass to backend to perform the Big Data
							Operations using Spark and NodeJS. Workflows are set of
							transformations and data load that can be scheduled. Scheduling is
							done through Node scheduler Micro service. In Node Part we have made
							the Architecture as to Micro services and Standalone Apps. Each
							Micro service will serve REST API’s for each modules. Load Balancer
							service is used to balance and reroute all REST API’s hits from UI.
						</p>
					</div>
					<div className="card-footer">
                            <span className="d-flex mr-auto">
                                <strong className="px-2">Company : </strong> Aline - Consulting Oy
                            </span>
					</div>
				</div>

				<div className="card my-4">
					<div className="card d-flex card-title py-2">
                            <span className="d-flex">
                                <strong className="d-flex-inline mr-auto ">
                                    <i className="fa fa-chain ml-5 text-orange"/> DEMAND MANAGEMENT
                                    AND PLANNING
                                </strong>
                                <strong className=" d-flex-inline ml-auto mr-3">
                                    Client : Nokia{' '}
                                </strong>
                            </span>
					</div>
					<div className="card-body text-wrap text-left">
						<p>
							{' '}
							The project was done as to handle Big Data from NodeJS. Users will
							upload their large scale files from UI, Node will process and parse
							the files and made as JSON object based on metadata, then backend
							did queries and process such as data validation, referential
							verification & auto create functionality. Then finally load the
							valid records into master tables and invalid into log tables which
							is flexible to check business users.
						</p>
					</div>
					<div className="card-footer">
                            <span className="d-flex mr-auto">
                                <strong className="px-2">Company : </strong> Aline - Consulting Oy
                            </span>
					</div>
				</div>

				<div className="card my-4">
					<div className="card d-flex card-title py-2">
                            <span className="d-flex">
                                <strong className="d-flex-inline mr-auto ">
                                    <i className="fa fa-tripadvisor ml-5 text-orange"/> ONLINE
                                    BOOKING HOTELS, CARS, TAXI AND ACTIVITES
                                </strong>
                                <strong className=" d-flex-inline ml-auto mr-3">
                                    Client : XeniApp{' '}
                                </strong>
                            </span>
					</div>
					<div className="card-body text-wrap text-left">
						<p>
							{' '}
							XeniApp is a travel booking portal that allows you to browse and
							build your trip itinerary on a single page. You can add flights,
							hotels, car rentals, transfer and Activities by simply dragging and
							dropping them into your itinerary and book multiple items in one
							click.
						</p>
					</div>
					<div className="card-footer">
                            <span className="d-flex mr-auto">
                                <strong className="px-2">Company : </strong> XeniApp
                            </span>
					</div>
				</div>

				<div className="card my-4">
					<div className="card d-flex card-title py-2">
                            <span className="d-flex">
                                <strong className="d-flex-inline mr-auto ">
                                    <i className="fa fa-terminal ml-5 text-orange"/> Web Scrapping
                                    Tool
                                </strong>
                            </span>
					</div>
					<div className="card-body text-wrap text-left">
						<p>
							The project was done as to Scrap the product information’s like
							category, specifications, technical description, images, review’s
							from Amazon. UI driven triggering the python scripts, from there
							script produce data , updating it in MY-SQL and exporting file
						</p>
					</div>
					<div className="card-footer">
                            <span className="d-flex mr-auto">
                                <strong className="px-2">Company : </strong> EVERDEAR INFRACON
                                PRIVATE LIMITED
                            </span>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
