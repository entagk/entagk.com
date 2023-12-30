import Link from "next/link";
import Logo from "./icons/logo";

export default function Home() {
	return (
		<main className="flex absolute w-full h-full top-0 right-0">
			<div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto">
				<h1 className="font-sans mb-5 flex lg:text-7xl md:text-6xl sm:text-5xl min-[320px]:text-2xl min-[375px]:text-3xl min-[425px]:text-[2rem] min-[500px]:text-[2.5rem]">
					<span>Welcome at </span>
					<span className="font-semibold text-[#ff002f] flex items-center justify-center min-[350px]:ml-2 min-[320px]:ml-1">
						<Logo /> Entagk.com
					</span>
				</h1>
				<p className="mb-5 text-center lg:text-2lg md:max-w-2xl lg:max-w-3xl sm:max-w-2lg min-[320px]:px-3 min-[425px]:px-4 min-[320px]:text-sm sm:text-base">
					Enhance productivity with Entagk: your all-in-one toolkit featuring a
					Pomodoro timer, sticky notes, to-do lists, and an activity tracker.
				</p>
				<Link
					href="https://app.entagk.com/"
					target="_self"
					className="bg-white rounded-[30px] px-6 py-2 text-[#333] mb-5 capitalize font-medium hover:shadow hover:text-[#000]">
					go to app
				</Link>
			</div>
		</main>
	);
}
