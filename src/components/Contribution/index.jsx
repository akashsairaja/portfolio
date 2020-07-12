import React from 'react';


function OpenSourceContribution() {

	return (
		<div className="container">
			<h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Open Source Contributions</h1>
			<hr className="mt-2 mb-5"/>
			<div className="row text-center text-lg-left">
				<div className="col-lg-6 col-md-6 col-6">
					<div className="text-dark my-2">
						Music Player App - HTML5 - React - Nodejs
						<span className="ml-5 page-link float-right">
							<a
								rel="noopener noreferrer"
								target="_blank" href="https://github.com/akashsairaja/Audio-Player-HTML5-React-NodeJS">
							<i className="fa fa-git-square"/>  view code
							</a>
						</span>
					</div>
					<a rel="noopener noreferrer" href="!#" className="d-block mb-4 h-100">
						<img className="img-fluid img-thumbnail" src={require('../../images/app.gif')}
							 alt="musicplayer"/>
					</a>
				</div>
				<div className="col-lg-6 col-md-6 col-6">
					<div className="text-dark my-2">
						Todo App Starter Kit for React - Redux / Node JS
						<span className="ml-5 page-link float-right">
							<a
								rel="noopener noreferrer"
								target="_blank" href="https://github.com/akashsairaja/todo-application">
							<i className="fa fa-git-square"/>  view code
							</a>
						</span>
					</div>
					<a href="!#" className="d-block mb-4 h-100">
						<img className="img-fluid img-thumbnail" src={require('../../images/todo.gif')}
							 alt="todoApp"/>
					</a>
				</div>
				<div className="col-lg-6 col-md-6 col-6">
					<div className="text-dark my-2">
						Set as your home page
						<span className="ml-5 page-link float-right">
							<a
								rel="noopener noreferrer"
								target="_blank" href="https://github.com/akashsairaja/set-your-homepage">
							<i className="fa fa-git-square"/>  view code
							</a>
						</span>
					</div>
					<a href="!#" rel="noopener noreferrer" target="_blank"
					   className="d-block mb-4 h-100">
						<img className="img-fluid img-thumbnail" src={require('../../images/homepage.gif')}
							 alt="todoApp"/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default OpenSourceContribution;
