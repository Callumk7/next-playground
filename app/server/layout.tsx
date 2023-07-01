"use client";

import ClientBox from "@/components/client-box";
import ServerBox2 from "@/components/second-server-box";
import Link from "next/link";
import { useState } from "react";

export default function ServerLayout({ children }: { children: React.ReactNode }) {
	const [layoutState, setLayoutState] = useState(100);

	const handleLayout = () => {
		setLayoutState(layoutState + 100);
	};

	return (
		<div className="absolute left-5 right-5 top-10 border border-blue-500 p-10">
			<nav className="m-2 flex w-full flex-row space-x-16 border border-lime-300 p-3">
				<Link href="/server">/SERVER</Link>
				<Link href="/server/sub-server">/SERVER/SUB-SERVER</Link>
			</nav>
			<h1 className="text-2xl text-blue-500">Server Layout</h1>
			<ClientBox />
			{children}
			<div className="mx-auto w-1/2">
				{layoutState}
				<button onClick={handleLayout} className="w-1/2 bg-cyan-200 p-5 text-cyan-950">
					INCREASE LAYOUT STATE
				</button>
				<ServerBox2 state={layoutState} handleClick={handleLayout} />
			</div>
		</div>
	);
}
