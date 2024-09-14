export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1>Vladyslav Dalechyn</h1>
				<small>
					Co-founder of{" "}
					<a href="https://beliefs.social" target="_blank" rel="noreferrer">
						beliefs.social
					</a>
					, MS (Computer Engineering), powerlifter.
					<br />
				</small>
			</div>
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
					– framework for Farcaster Frames. <b>Actively collaborating</b>.
					<aside id="sponsorship">
						<br />
						If you are a business using <i>Frog</i> to build a
						revenue-generating product, please consider supporting my work on{" "}
						<i>Frog</i> and other OSS projects through the following options:
						<ul>
							<li>
								Become a sponsor on{" "}
								<a
									href="https://www.drips.network/app/projects/github/wevm/frog?exact"
									target="_blank"
									rel="noreferrer"
								>
									drips.network
								</a>
								;
							</li>
							<li>
								Send 300$ in ETH/USDC equivalent to{" "}
								<a
									href="https://rainbow.me/dalechyn.eth"
									target="_blank"
									rel="noreferrer"
								>
									<i>dalechyn.eth</i>;
								</a>
							</li>
						</ul>
						<p>
							Sponsoring development ensures the tool that your product relies
							on stays healthy and actively maintained.
						</p>
						Active sponsors:
						<ul>
							<li>
								<a target="_blank" href="https://wevm.dev/" rel="noreferrer">
									wevm
								</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://warpcast.com/christopher"
									rel="noreferrer"
								>
									christopher
								</a>
							</li>
						</ul>
						<p>
							Contact me after if you want a placement at{" "}
							<a href="https://frog.fm" target="_blank" rel="noreferrer">
								frog.fm
							</a>{" "}
							website.
						</p>
					</aside>
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/chyn"
						rel="noreferrer"
					>
						spilnotaxyz/chyn
					</a>{" "}
					– a headless web3 ui component library built with shadcn and wagmi. An
					open-source experiment.
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
						href="https://github.com/valorem-labs-inc/typescript-sdk"
						rel="noreferrer"
					>
						valorem-labs-inc/typescript-sdk
					</a>{" "}
					– a typescript sdk for interacting with valorem&apos;s{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/clear"
						rel="noreferrer"
					>
						clear
					</a>{" "}
					protocol and{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/trade-interfaces"
						rel="noreferrer"
					>
						trade-api
					</a>
					;
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/clear-periphery"
						rel="noreferrer"
					>
						valorem-labs-inc/clear-periphery
					</a>{" "}
					– a cash settlement periphery contract using{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/Uniswap/v3-core"
						rel="noreferrer"
					>
						uniswap-v3
					</a>{" "}
					flash loans for exercising options in{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/clear"
						rel="noreferrer"
					>
						clear
					</a>{" "}
					protocol;
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/valorem-labs-inc/trade-interfaces"
						rel="noreferrer"
					>
						valorem-labs-inc/trade-interfaces
					</a>{" "}
					– a trade api enabling peer-to-peer, signature-based, noncustodial
					digital asset trading via low latency{" "}
					<a
						target="_blank"
						href="https://grpc.io/docs/what-is-grpc/introduction/"
						rel="noreferrer"
					>
						grpc
					</a>{" "}
					and{" "}
					<a
						target="_blank"
						href="https://github.com/grpc/grpc-web"
						rel="noreferrer"
					>
						grpc-web
					</a>{" "}
					tls-encrypted version 3 protocol buffer interfaces, with order
					settlement via{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/ProjectOpenSea/seaport"
						rel="noreferrer"
					>
						seaport
					</a>{" "}
					protocol; Collaborated in past.
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/paradigmxyz/flux"
						rel="noreferrer"
					>
						paradigmxyz/flux
					</a>{" "}
					– a graph-based LLM power tool for exploring many completions in
					parallel; Contributed with ideas.
				</li>
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/dalechyn/arbitrageur"
						rel="noreferrer"
					>
						dalechyn/arbitrageur
					</a>{" "}
					– an attempt to extract cross-dex mev amongst{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/Uniswap/v2-core"
						rel="noreferrer"
					>
						uniswap-v2
					</a>{" "}
					and{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/Uniswap/v3-core"
						rel="noreferrer"
					>
						uniswap-v3
					</a>{" "}
					forks; My failed attempt to become MEV searcher.
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
				<li>
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/nfting-frontend"
						rel="noreferrer"
					>
						spilnotaxyz/nfting-frontend
					</a>{" "}
					&{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/nfting-backend"
						rel="noreferrer"
					>
						spilnotaxyz/nfting-backend
					</a>{" "}
					– a web application that gathers ethereum account data and outputs nft
					statistics;
				</li>
			</ul>
			<h2>Contacts</h2>
			<article>
				<ul>
					<li>
						<a
							target="_blank"
							href="mailto:vladyslav@spilnota.xyz"
							rel="noreferrer"
						>
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
					– #2 place:{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/partnerships-app"
						rel="noreferrer"
					>
						spilnotaxyz/partnerships-app
					</a>{" "}
					&{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/partnerships-contracts"
						rel="noreferrer"
					>
						spilnotaxyz/partnerships-contracts
					</a>{" "}
					– a partnerships marketplace for projects to collab;
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
					</a>
					:{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/hackathon-kts-2022-frontend"
						rel="noreferrer"
					>
						spilnotaxyz/hackathon-kts-2022-frontend
					</a>{" "}
					&{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/hackathon-kts-2022-backend"
						rel="noreferrer"
					>
						spilnotaxyz/hackathon-kts-2022-backend
					</a>{" "}
					&{" "}
					<a
						target="_blank"
						className="font-mono"
						href="https://github.com/spilnotaxyz/hackathon-kts-2022-contracts"
						rel="noreferrer"
					>
						spilnotaxyz/hackathon-kts-2022-contracts
					</a>{" "}
					– a platform to fundraise transparently and fight corruption in
					donation aids for Ukraine;
				</li>
			</ul>
		</>
	);
}
