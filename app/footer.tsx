import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className="w-full text-center text-[#e7e7e7] p-4 absolute bottom-0 right-0">
			<div className="row">
				Copyright © 2024 Entagk.com. All rights reserved
			</div>
			<div className="row">
				<Link
					href="#"
					target="_blank"
					className="capitalize hover:text-white">
					report feature/issue
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
