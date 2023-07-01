import ClientBox from "@/components/client-box";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="border-blue-500">
				{"hello"}
				<h1 className="text-xl text-blue-500">I am a page, server component</h1>
				<ClientBox />
			</div>
		</main>
	);
}
