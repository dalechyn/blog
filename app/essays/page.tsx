import Link from "next/link";
import { allEssays } from "@/.contentlayer/generated";
import { Fragment } from "react";

export default function Essays() {
	return (
		<>
			<h1>Essays</h1>
			{allEssays.map((essay) => (
				<Fragment key={essay._id}>
					<Link href={essay.slug}>
						<h3>{essay.title}</h3>
					</Link>
					{essay.description && <p>{essay.description}</p>}
				</Fragment>
			))}
		</>
	);
}
