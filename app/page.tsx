"use client";

import { SetStateAction, useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
	const { messages, append, isLoading } = useChat();

	// const [state, setState] = useState({
	// 	Subject: "",
	// 	Types: "",
	// 	Tone: "",
	// 	NarrativeStyle: "",
	// 	Temperature: 0,
	// });
	const [subject, setSubject] = useState("");
	const [tone, setTone] = useState("");
	const [style, setStyle] = useState("");
	const [temperature, setTemperature] = useState(0.5);
	const [joke, setJoke] = useState("");

	const Subject = [
		{ emoji: "🦝", value: "Animals" },
		{ emoji: "🕵️", value: "Travel" },
		{ emoji: "💑", value: "Family" },
		{ emoji: "🚀", value: "Technology" },
	];
	const Tone = [
		{ emoji: "😊", value: "Sarcastic" },
		{ emoji: "😢", value: "Silly" },
		{ emoji: "😏", value: "Dark" },
		{ emoji: "😂", value: "Goofy" },
	];

	const Style = [
		{ emoji: "🎈", value: "Pun" },
		{ emoji: "🎭", value: "Knock-knock" },
		{ emoji: "🪡", value: "Story" },
	];

	// const handleChange = ({
	// 	target: { name, value },
	// }: React.ChangeEvent<HTMLInputElement>) => {
	// 	setState({
	// 		...state,
	// 		[name]: value,
	// 	});
	// };

	const handleChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSubject(event.target.value);
	};

	const handleChangeTone = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTone(event.target.value);
	};

	const handleChangeStyle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStyle(event.target.value);
	};

	const handleChangeTemperature = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setTemperature(parseFloat(event.target.value));
	};

	const handleGenerateJoke = () => {
		const prompt = `Write a ${tone} ${Style} joke about ${subject}`;
	};

	return (
		<main className="mx-auto w-full">
			<div className="p4 m-4">
				<div className="flex flex-col items-center relative ">
					<h2 className="font-raleway font-bold text-6xl text-secondary pb-6 md:text-3xl">
						<span className="text-active">Funny AI</span> App{" "}
					</h2>
					<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
						Get ready because our humor-filled journey is about to begin:
						Welcome to the World of Jokes!{" "}
					</h3>
				</div>

				<div className="flex">
					<div className="w-1/4">
						<div className="space-y-1 bg-opacity-25 bg-gray-700 rounded-lg p-4">
							<h3 className="text-xl font-semibold">Subject</h3>

							<div className="flex flex-col mb-12">
								{Subject.map(({ value, emoji }) => (
									<div
										key={value}
										className="p-1 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
									>
										<input
											id={value}
											type="radio"
											value={value}
											name="Subject"
											onChange={handleChangeSubject}
										/>
										<label className="ml-2" htmlFor={value}>
											{`${emoji} ${value}`}
										</label>
									</div>
								))}
							</div>

							<h3 className="text-xl font-semibold ">Tone</h3>

							<div className="flex flex-col">
								{Tone.map(({ value, emoji }) => (
									<div
										key={value}
										className="p-1 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
									>
										<input
											id={value}
											type="radio"
											name="Tone"
											value={value}
											onChange={handleChangeTone}
										/>
										<label className="ml-2" htmlFor={value}>
											{`${emoji} ${value}`}
										</label>
									</div>
								))}
							</div>

							<h3 className="text-xl font-semibold ">Style</h3>

							<div className="flex flex-col">
								{Style.map(({ value, emoji }) => (
									<div
										key={value}
										className="p-1 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
									>
										<input
											id={value}
											type="radio"
											name="NarrativeStyle"
											value={value}
											onChange={handleChangeStyle}
										/>
										<label className="ml-2" htmlFor={value}>
											{`${emoji} ${value}`}
										</label>
									</div>
								))}
							</div>

							<h3 className="text-xl font-semibold">Temperature</h3>
							<div className="w-64">
								<input
									type="range"
									min="0"
									max="1"
									step="0.01"
									value={temperature}
									onChange={handleChangeTemperature}
									className="w-full"
								/>
								<div className="flex justify-between mt-2">
									<span>0</span>
									<span>{temperature}</span>
									<span>1</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1  mx-8">
						<div
							// hidden={
							// 	messages.length === 0 ||
							// 	messages[messages.length - 1]?.content.startsWith("Generate")
							// }
							className="bg-opacity-25 bg-gray-700 rounded-lg p-4 h-[90%]"
						>
							{/* {messages[messages.length - 1]?.content} */}
						</div>
						<div className="flex justify-center items-center">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 m-4 "
								disabled={isLoading || !subject || !tone || !style}
								onClick={handleGenerateJoke}
							>
								Generate Joke
							</button>

							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
								disabled={isLoading || !subject || !tone || !style}
								onClick={() => {}}
							>
								Evaluate Joke
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
