export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1>Vladyslav Dalechyn</h1>
				<small>
					Ex-co-founder of Spilnota, where we built{" "}
					<a href="https://x.com/tradeonmidas" target="_blank" rel="noreferrer">
						Midas
					</a>{" "}
					and{" "}
					<a href="https://x.com/beliefssocial" target="_blank" rel="noreferrer">
						beliefs.social
					</a>
					, MS (Computer Engineering), powerlifter.
					<br />
				</small>
			</div>
			<h2 id="about">About</h2>
			<article>
				<p>
					I&apos;m a software engineer who&apos;s worked across the entire stack
					since my first commercial role in 2020, most of it in crypto. I write Solidity and the applied math
					behind AMMs and bonding curves; I&apos;ve run our own Base node with a
					custom Rust indexer chewing through terabytes of ERC-20 transfers and
					swaps; and I build the backends, SDKs, Telegram bots, and frontends on
					top of it.
				</p>
				<p>
					I&apos;ve authored codegen SDKs that generate contract-specific
					TypeScript on the fly, shipped an options-trading protocol&apos;s
					client libraries, and as a technical co-founder taken products from an
					empty repo to launch with a team of two. I like owning a product end
					to end &ndash; from the contract to the pixel &ndash; and I care more
					about shipping something real than about it being theoretically
					perfect.
				</p>
				<p>
					As of now I&apos;m free from work &ndash; taking courses through the
					end of summer and thinking about what&apos;s next. If there&apos;s
					something you&apos;d want to build together, send me an{" "}
					<a href="mailto:vlad@dalechyn.com" rel="noreferrer">
						email
					</a>{" "}
					&ndash; you&apos;ll also find it below.
				</p>
			</article>
			<h2 id="experience">Experience</h2>
			<ul>
				<li>
					<b>Spilnota</b>{" "}
					<small className="opacity-50">Dec 2022 &ndash; Jun 2026</small> &ndash;
					co-founder &amp; CTO. Built{" "}
					<a href="https://x.com/beliefssocial" target="_blank" rel="noreferrer">
						beliefs.social
					</a>
					, a <i>bonding</i> memecoin launchpad on Base with timed buy
					whitelists, custom liquidity provisioning, and heavy contract +
					applied-math work; then{" "}
					<a href="https://x.com/tradeonmidas" target="_blank" rel="noreferrer">
						Midas
					</a>
					, a memecoin trading platform (Axiom / bullx style) on our own Base
					node and a custom Rust indexer ingesting terabytes of on-chain data,
					built end to end by two engineers.
				</li>
				<li>
					<b>Abstract Money</b>{" "}
					<small className="opacity-50">Nov 2023 &ndash; May 2024</small> (
					<a
						href="https://docs.abstract.money"
						target="_blank"
						rel="noreferrer"
					>
						abstract.money
					</a>
					, part-time) &ndash; senior software engineer. Led frontend
					development and authored{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/AbstractSDK/abstract.js"
						rel="noreferrer"
					>
						abstract.js
					</a>
					, a codegen SDK that generates contract-specific TypeScript on the fly
					for Cosmos abstract accounts.
				</li>
				<li>
					<b>Valorem</b>{" "}
					<small className="opacity-50">May 2023 &ndash; Oct 2023</small> (
					<a href="https://valorem.xyz" target="_blank" rel="noreferrer">
						valorem.xyz
					</a>
					, contract) &ndash; senior full-stack engineer across frontend and
					smart contracts for a protocol writing physically-settled options on
					any ERC-20 pair; authored the{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/typescript-sdk"
						rel="noreferrer"
					>
						TypeScript SDK
					</a>{" "}
					and cash-settlement periphery contracts.
				</li>
				<li>
					<b>Curra</b>{" "}
					<small className="opacity-50">Feb 2023 &ndash; Jul 2023</small>{" "}
					(contract) &ndash; technical web3 advisor on intensive smart-contract
					gas optimizations: argument packing, Seaport-style custom pointers with
					data reuse, and Solady&apos;s ERC1967 proxy.
				</li>
				<li>
					<b>Kanji</b>{" "}
					<small className="opacity-50">Nov 2022 &ndash; May 2023</small>{" "}
					(France, contract) &ndash; senior full-stack engineer
					leading web3 across all development teams. Rewrote, migrated and
					test-covered the contract suite, built a React SDK on top of{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/wevm/wagmi"
						rel="noreferrer"
					>
						@wagmi/cli
					</a>{" "}
					codegen, and designed a custom indexer for historical on-chain data.
				</li>
				<li>
					<b>LocalTrade</b>{" "}
					<small className="opacity-50">Oct 2021 &ndash; Nov 2022</small> (Dubai)
					&ndash; full-stack engineer and primary
					developer of the DeFi app for the LTT utility token: static &amp;
					dynamic farming, single-asset liquidity providing (an optimization of
					Uniswap&apos;s AMM formula), and an off-chain NFT collection. Also
					owned CI/CD &ndash; GitLab pipelines deploying to Google Cloud across
					environments, with automated MythX contract analysis.
				</li>
				<li>
					<b>Hack The Box</b>{" "}
					<small className="opacity-50">Mar 2020 &ndash; Jul 2022</small>{" "}
					(part-time) &ndash; full-stack engineer on the ParrotOS website and
					internal tooling (React, TypeScript, Next.js, Electron, Redux);
					mentored a junior developer to React/TypeScript proficiency.
				</li>
				<li>
					<b>KTraffic</b>{" "}
					<small className="opacity-50">Dec 2020 &ndash; Jun 2021</small> &ndash;
					co-founder of an affiliate-marketing company running campaigns on
					Facebook, Google and Picsart for clients across Ukraine and Canada.
					Left to pursue engineering and web3.
				</li>
			</ul>
			<h2 id="open-source-work">Open Sourced Work</h2>
			<ul>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/wevm/frog"
						rel="noreferrer"
					>
						wevm/frog
					</a>{" "}
					– framework for Farcaster Frames.
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/AbstractSDK/abstract.js"
						rel="noreferrer"
					>
						abstractSDK/abstract.js
					</a>{" "}
					– a typescript sdk for interacting with Abstract CosmWasm contracts
					and generating contract-specific React/Node.js code. Author.
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/dalechyn/abi-signature-bruteforcer"
						rel="noreferrer"
					>
						dalechyn/abi-signature-bruteforcer
					</a>{" "}
					– a cpu-based solidity function signature bruteforcer to save extra
					gas on calls; Author.
				</li>
			</ul>
			<h2>Contacts</h2>
			<article>
				<ul>
					<li>
						<a target="_blank" href="mailto:vlad@dalechyn.com" rel="noreferrer">
							Mail
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://github.com/dalechyn"
							rel="noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://twitter.com/dalechyn"
							rel="noreferrer"
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://warpcast.com/dalechyn.eth"
							rel="noreferrer"
						>
							Warpcast
						</a>
					</li>
					<li>
						<a target="_blank" href="https://t.me/dalechyn" rel="noreferrer">
							Telegram
						</a>
					</li>
				</ul>
			</article>
			<h2 id="hackathons">Hackathons</h2>
			<ul>
				<li>
					<a
						target="_blank"
						href="https://twitter.com/collective_eth"
						rel="noreferrer"
					>
						nft-bali 2023
					</a>{" "}
					– #2 place – a partnerships marketplace for projects to collab;
				</li>
				<li>
					<a
						target="_blank"
						href="https://twitter.com/kyivtechsummit"
						rel="noreferrer"
					>
						kyivtechsummit 2022
					</a>{" "}
					–{" "}
					<a
						target="_blank"
						href="https://devpost.com/software/tok3nised"
						rel="noreferrer"
					>
						most impactful project built on ethereum award
					</a>{" "}
					– a platform to fundraise transparently and fight corruption in
					donation aids for Ukraine;
				</li>
			</ul>
		</>
	);
}
