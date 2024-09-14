import Link from "next/link";
import { allEssays } from "@/.contentlayer/generated";

export default function Essays() {
	return (
		<>
			<h2>Essays</h2>
			{allEssays.map((essay) => (
				<article key={essay._id}>
					<Link href={essay.slug}>
						<h3>{essay.title}</h3>
					</Link>
					{essay.description && <p>{essay.description}</p>}
				</article>
			))}
		</>
	);
}
