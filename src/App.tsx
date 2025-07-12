import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePic from "./assets/icons/pfp.jpg";
import animationGif from "./assets/icons/giphy.gif";
import cardBackTexture from "./assets/textures/card_back.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const suits = ["♠️", "♦️", "♣️", "♥️"];

const projects = [
	{
		title: "Go Bots",
		desc: "Multiple competitive Go bots, including a 5x5 bot that plays at 6d level and 19x19 bots that play at the 2-dan level (intermediate) and beginner level.",
		link: "https://github.com/Keviny2007/GoBot",
		suit: suits[0],
	},
	{
		title: "Live Lyrics",
		desc: "An open source mobile app that listens to live music and displays synchronized lyrics in real-time. Built using React Native, Expo, and the AudD API.",
		link: "https://github.com/Keviny2007/livelyrics",
		suit: suits[1],
	},
	{
		title: "Model Architecture",
		desc: "Reimplementations and fine-tuning of foundational models like GPT-2, seq2seq, and BERT in PyTorch to better understand architecture fundamentals and customize for research.",
		link: "https://github.com/Keviny2007/llm",
		suit: suits[2],
	},
	{
		title: "Court Checker",
		desc: "A full-stack web app that shows basketball court availability at Brown using Django backend + React frontend, with calendar integration and dyanamic updates.",
		link: "https://github.com/Keviny2007/OMAC",
		suit: suits[3],
	},
];

export default function App() {
	const [flipped, setFlipped] = useState([false, false, false]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.4,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: "easeOut",
			},
		},
	};

	const toggleFlip = (index: number) => {
		const newFlipped = [...flipped];
		newFlipped[index] = !newFlipped[index];
		setFlipped(newFlipped);
	};

	return (
		<div className="min-h-screen bg-background text-stark transition-colors">
			<Navbar />
			<motion.main
				className="pt-24 px-6 py-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* Header */}
				<motion.section
					className="relative flex items-center justify-center mb-20"
					variants={itemVariants}
				>
					{/* Left Emojis */}
					<div className="hidden lg:flex gap-3 absolute left-12 xl:left-64 top-1/2 -translate-y-1/2 text-[4.5rem] xl:text-[5.5rem] opacity-40 lg:opacity-100 text-cyan-400 drop-shadow-[0_0_0.3rem_#38bdf8] pointer-events-none">
						<span className="rotate-[-20deg] animate-float">⚫</span>
						<span className="rotate-[-5deg] animate-float animation-delay-200">
							♘
						</span>
						<span className="rotate-[10deg] animate-float animation-delay-400">
							🂡
						</span>
					</div>

					{/* PFP and Name */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto z-10 relative">
						{/* Profile Picture */}
						<img
							src={profilePic}
							alt="Kevin Yang"
							className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/20 object-cover object-top"
						/>

						{/* Name and Typewriter */}
						<div className="text-center md:text-left space-y-2">
							<h1 className="text-5xl text-white font-terminal underline font-bold drop-shadow-[0_0_0.35rem_#38bdf8]">
								Kevin Yang
							</h1>
							<p className="text-lg text-stark-light font-terminal drop-shadow-[0_0_0.15rem_#67e8f9]">
								<span className="text-cyan-400 mr-2">&gt;</span>
								<Typewriter
									words={[
										"teaching robots to make decisions",
										"typing furiously in vscode 💻",
										"debugging at 2AM with lo-fi beats ☕",
										"training models and muscles (kind of)",
									]}
									loop={true}
									cursor
									cursorStyle="_"
									typeSpeed={70}
									deleteSpeed={40}
									delaySpeed={1200}
								/>
							</p>

							{/* Contact Icons */}
							<div className="flex mt-3 space-x-3 md:justify-start justify-center">
								<a
									href="https://github.com/Keviny2007"
									className="text-cyan-400 hover:text-cyan-600 transition-colors hover:scale-110 transform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-5 w-5" />
								</a>
								<a
									href="https://linkedin.com/in/kevin-yang-a06831320"
									className="text-cyan-400 hover:text-cyan-600 transition-colors hover:scale-110 transform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="mailto:kevin_c_yang@brown.edu"
									className="text-cyan-400 hover:text-cyan-600 transition-colors hover:scale-110 transform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Mail className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>

					{/* Right Emojis */}
					<div className="hidden lg:flex gap-3 absolute right-12 xl:right-64 top-1/2 -translate-y-1/2 text-[4.5rem] xl:text-[5.5rem] opacity-40 lg:opacity-100 text-cyan-400 drop-shadow-[0_0_0.3rem_#38bdf8] pointer-events-none">
						<span className="rotate-[20deg] animate-float">🂱</span>
						<span className="rotate-[5deg] animate-float animation-delay-300">
							♕
						</span>
						<span className="rotate-[-10deg] animate-float animation-delay-500">
							⚪
						</span>
					</div>
				</motion.section>

				{/* Animation & Terminal Section - Side by Side */}
				<motion.h2
					className="text-3xl text-center font-terminal underline mb-6 drop-shadow-[0_0_0.2rem_#38bdf8]"
					variants={itemVariants}
				>
					About Me
				</motion.h2>
				<motion.section
					className="flex flex-col md:flex-row gap-6 items-center justify-center my-12 max-w-6xl mx-auto"
					variants={itemVariants}
				>
					{/* Animation Section - Left Side */}
					<div className="w-full md:w-2/5 relative">
						<div className="relative aspect-[1/1] w-full">
							<img
								src={animationGif}
								alt="Kevin Yang Animation"
								className="w-full h-full object-cover rounded-lg shadow-lg"
							/>
						</div>
					</div>

					{/* Terminal Section - Right Side */}
					<div className="w-full md:w-3/5 relative">
						<div className="relative aspect-[3/2] w-full h-full">
							<section className="absolute inset-0 bg-black/80 text-white font-terminal text-sm md:text-base rounded-md shadow-lg overflow-hidden border border-slate-700 flex flex-col">
								{/* Windows-style Title Bar */}
								<div className="flex items-center justify-between bg-slate-800 text-white text-xs px-3 py-1 font-mono border-b border-slate-700">
									<span className="uppercase tracking-wider">
										C:\Windows\System32\aboutme.exe
									</span>
									<div className="flex space-x-[2px]">
										<div className="w-5 h-5 border border-white flex items-center justify-center hover:bg-slate-700">
											▁
										</div>
										<div className="w-5 h-5 border border-white flex items-center justify-center hover:bg-slate-700">
											▭
										</div>
										<div className="w-5 h-5 border border-white flex items-center justify-center hover:bg-red-600">
											✕
										</div>
									</div>
								</div>

								{/* Terminal Body */}
								<div className="p-4 flex-1 overflow-auto">
									<div className="mb-2">
										Microsoft Windows [Version 10.0.19045.2728] <br />
										(c) Microsoft Corporation. All rights reserved.
									</div>
									<div className="mb-2">
										C:\Users\kevinyang&gt;{" "}
										<span className="text-green-400">whoami</span>
									</div>
									<div>
										professional go player, researcher, builder, and current student
										at Brown University studying applied mathematics and computer
										science
									</div>
									<div className="mt-4">
										C:\Users\kevinyang&gt;{" "}
										<span className="text-green-400">_</span>
									</div>
								</div>
							</section>
						</div>
					</div>
				</motion.section>

				{/* Projects */}
				<motion.section
					id="projects"
					className="mb-24 font-terminal"
					variants={itemVariants}
				>
					<h2 className="text-3xl text-center underline mb-6 drop-shadow-[0_0_0.2rem_#38bdf8]">
						Projects
					</h2>
					<p className="text-center mb-6 text-slate-300 flex items-center justify-center">
						Click to reveal my cards!
					</p>
					<div className="mx-auto max-w-6xl px-4">
						<div className="grid md:grid-cols-3 gap-6 font-terminal">
							{projects.map((project, i) => (
								<motion.div
									key={i}
									onClick={() => toggleFlip(i)}
									className="cursor-pointer perspective-[1500px] hover:translate-y-[-5px] transition-transform"
									variants={itemVariants}
									custom={i}
								>
									<div
										className={`relative w-full aspect-[7/10] duration-500 ease-in-out transition-transform flip-card ${
											flipped[i] ? "rotate-y-180" : ""
										}`}
									>
										{/* FRONT */}
										<Card className="absolute inset-0 bg-white text-slate-900 rounded-[1rem] shadow-xl border-[1.5px] border-slate-300 p-4 sm:p-4 flex flex-col justify-between flip-card-front">
											<span className="absolute top-3 left-3 text-2xl sm:text-3xl md:text-4xl">
												{project.suit}
											</span>
											<span className="absolute bottom-3 right-3 text-2xl sm:text-3xl md:text-4xl rotate-180">
												{project.suit}
											</span>
											<CardContent className="flex flex-col justify-center items-center text-center h-full p-2 sm:p-4 md:p-6">
												<h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 line-clamp-2">
													{project.title}
												</h3>
												<p className="mb-2 sm:mb-4 text-sm sm:text-base md:text-lg text-slate-600 line-clamp-9 sm:line-clamp-10">
													{project.desc}
												</p>
												<Button
													className="bg-stark text-slate-900 text-xs sm:text-sm font-semibold hover:bg-stark-dark transition shadow-md shadow-cyan-500/20 px-2 py-1 sm:px-3 sm:py-2"
													asChild
												>
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
													>
														View on GitHub
													</a>
												</Button>
											</CardContent>
										</Card>

										{/* BACK */}
										<Card
											className="absolute inset-0 rounded-[1rem] overflow-hidden border-[1.5px] border-slate-700 flip-card-back bg-neutral-100"
											style={{
												backgroundImage: `url(${cardBackTexture})`,
												backgroundSize: "95% auto",
												backgroundPosition: "center",
												backgroundRepeat: "no-repeat",
											}}
										></Card>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				{/* Contact Section */}
				<motion.section
					id="contact"
					className="mb-24 font-terminal"
					variants={itemVariants}
				>
					<h2 className="text-3xl text-center underline mb-6 drop-shadow-[0_0_0.2rem_#38bdf8]">
						Contact
					</h2>
					<div className="max-w-2xl mx-auto text-center">
						<p className="text-lg mb-4">
							Interested in collaborating or just want to say hi? Feel free to
							reach out!
						</p>
						<p className="text-sm text-slate-500 mb-6">
							You can find me on various platforms:
						</p>
						<div className="flex justify-center space-x-4">
							<a
								href="https://github.com/Keviny2007"
								className="text-cyan-400 hover:text-cyan-600 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="inline-block h-6 w-6 mr-1" />
							</a>
							<a
								href="https://linkedin.com/in/kevin-yang-a06831320"
								className="text-cyan-400 hover:text-cyan-600 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="inline-block h-6 w-6 mr-1" />
							</a>
							<a
								href="mailto:kevin_c_yang@brown.edu" // Replace with your email address
								className="text-cyan-400 hover:text-cyan-600 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Mail className="inline-block h-6 w-6 mr-1" />
							</a>
						</div>
					</div>
				</motion.section>

				{/* Footer */}
				<motion.div
					className="mt-16 border-t border-slate-700 pt-8"
					variants={itemVariants}
				>
					<p className="text-center text-slate-400 text-sm">
						Thanks for visiting my website! Feel free to reach out if you have
						any questions or just want to chat about tech!
					</p>
				</motion.div>
				<motion.footer
					className="mt-16 text-center text-sm text-slate-400"
					variants={itemVariants}
				>
					<p>© 2025 Kevin Yang. All rights reserved.</p>
					<p>Built with ☕ using React and Tailwind CSS</p>
				</motion.footer>
			</motion.main>
		</div>
	);
}
