import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className="w-full text-center text-[#e7e7e7] py-8 min-[320px]:text-sm min-[320px]:py-9 min-[375px]:px-8 absolute bottom-0 right-0 sm:text-base">
			<p className="min-[320px]:px-2">Copyright © 2024 Entagk.com. All rights reserved</p>
			<Link
				href="https://forms.gle/uZmCpPJaXfukHx237"
				target="_blank"
				className="capitalize hover:text-white">
				report feature/issue
			</Link>
		</footer>
	);
}

export default Footer;
