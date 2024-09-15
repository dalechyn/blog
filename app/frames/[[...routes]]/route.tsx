/** @jsxImportSource frog/jsx */
/* eslint-disable react/jsx-key */
import { allEssays } from "contentlayer/generated";
import fs from "fs/promises";
// import markdownToTxt from "markdown-to-txt";

import { Button, Frog } from "frog";
import { handle } from "frog/next";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import path from "path";

/// Frog
const app = new Frog({
	basePath: "/frames",
	title: "dalechyn.com",
	imageOptions: async () => ({
		fonts: [
			{
				name: "Verdana Bold",
				style: "normal",
				source: "buffer",
				weight: 700,
				data: await fs.readFile(
					path.resolve(process.cwd(), "public", "font", "Verdana-Bold.ttf"),
				),
			},
		],
	}),
});

app.frame("/essays/:slug", (c) => {
	// if (c.req.method === "GET") {
	return c.res({
		image: "/essays/:slug/img/first",
		intents: [
			<Button.Link href={`https://dalechyn.com/essays/${c.req.param("slug")}`}>
				Read
			</Button.Link>,
		],
	});
	// }
	// const essay = allEssays.find(
	// 	(essay) => essay.slugAsParams === c.req.param("slug"),
	// );
	//
	// if (!essay) {
	// 	throw new Error("No essay");
	// }
	//
	// const text = markdownToTxt(essay.body.raw);
	//
	// const paragraphs = text
	// 	.split("\n\n")
	// 	.slice(Number(c.req.param("offset")) ?? 0);
	// const paragraphSizes = paragraphs.map((paragraph) => paragraph.length);
	// const limit = (() => {
	// 	let currentLines = 0;
	// 	let limit = 0;
	// 	for (const paragraphSize of paragraphSizes) {
	// 		const paragraphLines = paragraphSize / 60 + 1;
	//
	// 		if (currentLines + paragraphSize >= 21) break;
	//
	// 		limit++;
	// 		currentLines += paragraphLines;
	// 	}
	// 	return limit;
	// })();
	//
	// return c.res({
	// 	image: "/img",
	// });
});

app.image("/essays/:slug/img/first", (c) => {
	const essay = allEssays.find(
		(essay) => essay.slugAsParams === c.req.param("slug"),
	);

	if (!essay) {
		throw new Error("No essay");
	}

	return c.res({
		image: (
			<div tw="flex flex-col h-full w-full bg-[#faebd7] text-black overflow-hidden text-4xl px-6 py-3 justify-center">
				<p tw="text-6xl font-bold">{essay.title}</p>
				<p tw="font-bold">{essay.description}</p>
			</div>
		),
	});
});

// app.image("/img/:offset?", (c) => {
// 	const essay = allEssays.find(
// 		(essay) => essay.slugAsParams === c.req.param("slug"),
// 	);
//
// 	if (!essay) {
// 		throw new Error("No essay");
// 	}
// 	const text = markdownToTxt(essay.body.raw);
//
// 	const paragraphs = text
// 		.split("\n\n")
// 		.slice(Number(c.req.param("offset")) ?? 0);
// 	const paragraphSizes = paragraphs.map((paragraph) => paragraph.length);
// 	const limit = (() => {
// 		let currentLines = 0;
// 		let limit = 0;
// 		for (const paragraphSize of paragraphSizes) {
// 			const paragraphLines = paragraphSize / 60 + 1;
//
// 			if (currentLines + paragraphSize >= 21) break;
//
// 			limit++;
// 			currentLines += paragraphLines;
// 		}
// 		return limit;
// 	})();
//
// 	// experimentally found that 60 chars take one line. thus every paragraph takes `length/60` + 1 (newline) lines.
// 	// we have 21 lines in the viewport.
//
// 	return c.res({
// 		image: (
// 			<div tw="flex flex-col h-full w-full bg-white text-black overflow-hidden text-4xl px-6 py-3">
// 				<div tw="grow flex flex-col">
// 					{paragraphs.map((t) => (
// 						<p tw="my-[25px]">{t.replaceAll("\n", " ")}</p>
// 					))}
// 				</div>
// 			</div>
// 		),
// 	});
// });

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
