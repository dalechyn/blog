import marked from "marked";
import escape from "lodash.escape";
import unescape from "lodash.unescape";

const block = (text: string) => text + "\n\n";
const escapeBlock = (text: string) => (0, escape)(text) + "\n\n";
const line = (text: string) => text + "\n";
const inline = (text: string) => text;
const newline = () => "\n";
const empty = () => "";
const TxtRenderer = {
	// Block elements
	code: escapeBlock,
	blockquote: block,
	html: empty,
	heading: block,
	hr: newline,
	list: (text: string) => block(text.trim()),
	listitem: line,
	checkbox: empty,
	paragraph: block,
	table: (header: string, body: string) => line(header + body),
	tablerow: (text: string) => line(text.trim()),
	tablecell: (text: string) => text + " ",
	// Inline elements
	strong: inline,
	em: inline,
	codespan: inline,
	br: newline,
	del: inline,
	link: (_0: any, _1: any, text: string) => text,
	image: (_0: any, _: any1, text: string) => text,
	text: inline,
	// etc.
	options: {},
};
/**
 * Converts markdown to plaintext using the marked Markdown library.
 * Accepts [MarkedOptions](https://marked.js.org/using_advanced#options) as
 * the second argument.
 *
 * NOTE: The output of markdownToTxt is NOT sanitized. The output may contain
 * valid HTML, JavaScript, etc. Be sure to sanitize if the output is intended
 * for web use.
 *
 * @param markdown the markdown text to txtify
 * @param options  the marked options
 * @returns the unmarked text
 */
function markdownToTxt(markdown: string, options: any) {
	const unmarked = (0, marked.marked)(markdown, {
		async: false,
		renderer: TxtRenderer,
	});
	const unescaped = (0, unescape)(unmarked);
	const trimmed = unescaped.trim();
	return trimmed;
}
exports.markdownToTxt = markdownToTxt;
exports.default = markdownToTxt;
