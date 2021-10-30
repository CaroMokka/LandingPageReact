import React from "react";

function Main() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">
				<div className="container-md">
					<a className="navbar-brand text-white" href="#">
						Navbar
					</a>
					<div className="nav text-white">
						<ul className="nav justify-content-end">
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Contact
								</a>
							</li>{" "}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Main;
