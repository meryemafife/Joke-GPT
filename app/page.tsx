"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();
  const Subject = [
    { emoji: "🦝", value: "Animals" },
    { emoji: "🕵️", value: "Travel" },
    { emoji: "💑", value: "Family:" },
    { emoji: "🚀", value: "Technology" },
  ];
  const Types = [
    { emoji: "😊", value: "Pun" },
    { emoji: "😢", value: "Absurd" },
    { emoji: "😏", value: "Humor" },
    { emoji: "😂", value: "Wordplay" },
  ];

  const NarrativeStyle = [
    { emoji: "🎈", value: "Direct storytelling" },
    { emoji: "🎭", value: "Dialogue between characters" },
    { emoji: "🪡", value: "reference-based" },
  ];
   
  const Temperatures = [
    { emoji: "🤏", value: "low" },
    { emoji: "✋", value: "medium" },
    { emoji: "🔊", value: "high" },
  ];

  
  const [state, setState] = useState({
    Subject: "",
    Types: "",
	  NarrativeStyle:"",
    Temperature: "",
  }); 

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
			<div className="flex flex-col items-center relative min-h-screen">
				<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
					<span className="text-active">Funny AI</span> App
				</h2>
				<h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
					"Get ready because our humor-filled journey is about to begin: Welcome to the World of Jokes!"
				</h3>
			</div>

          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Subject</h3>

            <div className="flex flex-wrap justify-center">
              {Subject.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    value={value}
                    name="Subject"
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Types</h3>

            <div className="flex flex-wrap justify-center">
              {Types.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    name="Types"
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

		  <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">NarrativeStyle</h3>

            <div className="flex flex-wrap justify-center">
              {NarrativeStyle.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    name="NarrativeStyle"
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
          <h3 className="text-xl font-semibold">Level of fun</h3>
          <div className="flex flex-wrap justify-center">
              {Temperatures.map(({ value }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    name="Temperature"
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isLoading || (!state.Subject || !state.Types || !state.NarrativeStyle || !state.Temperature)}
            onClick={() =>
              append({
                role: "user",
                content: `Generate an ${state.Types} short joke and and ${state.Temperature} level of fun. The joke should be about ${state.Subject} and the narrative style should be ${state.NarrativeStyle}`,
				
              })
            }
          >
            Generate Joke
          </button>

          <div
            hidden={
              messages.length === 0 ||
              messages[messages.length - 1]?.content.startsWith("Generate")
            }
            className="bg-opacity-25 bg-gray-700 rounded-lg p-4"
          >
            {messages[messages.length - 1]?.content}
          </div>
        </div>
      </div>
    </main>
  );
}