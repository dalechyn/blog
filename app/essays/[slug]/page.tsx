import { allEssays } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx-components";
import type { Metadata } from "next";
import { getFrameMetadata } from "frog/next";

interface EssayProps {
	params: {
		slug: string;
	};
}

async function getEssayFromParams(params: EssayProps["params"]) {
	const slug = params?.slug;
	const essay = allEssays.find((essay) => essay.slugAsParams === slug);

	if (!essay) {
		null;
	}

	return essay;
}

export async function generateMetadata({
	params,
}: EssayProps): Promise<Metadata> {
	const essay = await getEssayFromParams(params);

	if (!essay) {
		return {};
	}

	return {
		title: essay.title,
		description: essay.description,
		other: await getFrameMetadata(
			`https://dalechyn.com/frames/essays/${params.slug}`,
		),
	};
}

export async function generateStaticParams(): Promise<EssayProps["params"][]> {
	return allEssays.map((essay) => ({
		slug: essay.slugAsParams,
	}));
}

export default async function EssayPage({ params }: EssayProps) {
	const essay = await getEssayFromParams(params);

	if (!essay) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-2">{essay.title}</h1>
			{essay.description && <h2 className="mt-0">{essay.description}</h2>}
			<hr className="my-4" />
			<Mdx code={essay.body.code} />
		</>
	);
}
