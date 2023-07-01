import ServerBox from "./server-box";

interface ServerBoxProps {
	state: number;
	handleClick: () => void;
}

export default function ServerBox2({ state, handleClick }: ServerBoxProps) {
	return (
		<div className="border-2 border-blue-500">
			<span className="text-xl">I am a server component</span>
			<p>Current state: {state}</p>
			<button className="bg-green-400 p-3" onClick={handleClick}>
				increase state
			</button>
			<ServerBox state={state} handleClick={handleClick} />
		</div>
	);
}
