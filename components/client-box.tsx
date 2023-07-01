"use client";

import { useState } from "react";
import ServerBox from "./server-box";

export default function ClientBox() {
	const [state, setState] = useState(0);

	const handleClick = () => {
		setState(state + 1);
	};

	return (
		<div className="border-2 border-dotted">
			<span className="text-xl">I am a client component</span>
			<p>
				Current state: <span className="text-red-500">{state}</span>
			</p>
			<br />
			<button className="bg-green-400 p-3" onClick={handleClick}>
				increase state
			</button>
			<ServerBox state={state} handleClick={handleClick} />
		</div>
	);
}
