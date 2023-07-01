import ClientBox from "@/components/client-box";
import ServerBox from "@/components/server-box";

export default function ServerPage() {
	return (
		<div className="p-4 border-blue-500">
			<h2 className="text-blue-500 text-l">Server Page</h2>
			<ClientBox />
		</div>
	);
}
