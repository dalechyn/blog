import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col items-center">
        <h1 className="mb-2">Vladyslav Dalechyn (dalechyn.eth)</h1>
        <h4 className="mt-4 text-center">full stack engineer building performant and high-assurance applications</h4>
        <h6 className="text-center">contact me via <a href="mailto:vladyslav@spilnota.xyz">mail</a> or view my <a href="https://github.com/dalechyn">github</a> or <a href="https://twitter.com/dalechyn">twitter</a> or <a href="https://warpcast.com/dalechyn.eth">warpcast</a></h6>
      </div>
      <hr/>
      <h1 id="actively-contributing">Actively Contributing</h1>
      <ul>
        <li><a className="font-mono" href="https://github.com/wevm/frog">wevm/frog</a> – framework for Farcaster Frames. Actively collaborating.</li>
      </ul>
           <hr/>
      <h1 id="sponsorship">Sponsorship</h1>
      <p>If you are a business using Frog to build a revenue-generating product, please consider supporting my work on Frog and other OSS projects through the following options:</p>
<ul>
  <li><a href="https://hypersub.withfabric.xyz/s/frog-supporter-1sre7szwdgtts">Become a sponsor via HyperSub</a></li>
<li>Send 300$ in ETH/USDC equivalent to dalechyn.eth (0x7389Ec4FB686a16966f2975758e9F1B8345f5e63)</li>
<li>Contact <a href="mailto:vlad.dalechin@gmail.com">vlad.dalechin@gmail.com</a>/<a href="https://warpcast.com/dalechyn.eth">me on farcaster</a> with questions</li>
</ul>

<p>Sponsoring development ensures the tool that your product relies on stays healthy and actively maintained.</p>
      <h2>Active sponsors</h2>
      <ul>
        <li><a href="https://wevm.dev/">wevm</a></li>
      </ul>
      <hr/>
      <h1 id="open-source-work">Open Source Work</h1>
      <ul>
        <li><a className="font-mono" href="https://github.com/wevm/frog">wevm/frog</a> – framework for Farcaster Frames. Actively collaborating.</li>
        <li><a className="font-mono" href="https://github.com/spilnotaxyz/chyn">spilnotaxyz/chyn</a> – a headless web3 ui component library built with shadcn and wagmi. An open-source experiment.</li>
        <li><a className="font-mono" href="https://github.com/AbstractSDK/abstract.js">abstractSDK/abstract.js</a> – a typescript sdk for interacting with Abstract CosmWasm contracts and generating contract-specific React/Node.js code. Author.</li>
        <li><a className="font-mono" href="https://github.com/valorem-labs-inc/typescript-sdk">valorem-labs-inc/typescript-sdk</a> – a typescript sdk for interacting with valorem&apos;s <a className="font-mono" href="https://github.com/valorem-labs-inc/clear">clear</a> protocol and <a className="font-mono" href="https://github.com/valorem-labs-inc/trade-interfaces">trade-api</a>; Collaborated in past.</li>
        <li><a className="font-mono" href="https://github.com/valorem-labs-inc/clear-periphery">valorem-labs-inc/clear-periphery</a> – a cash settlement periphery contract using <a className="font-mono" href="https://github.com/Uniswap/v3-core">uniswap-v3</a> flash loans for exercising options in <a className="font-mono" href="https://github.com/valorem-labs-inc/clear">clear</a> protocol; Collaborated in past.</li>
        <li><a className="font-mono" href="https://github.com/valorem-labs-inc/trade-interfaces">valorem-labs-inc/trade-interfaces</a> – a trade api enabling peer-to-peer, signature-based, noncustodial digital asset trading via low latency <a href="https://grpc.io/docs/what-is-grpc/introduction/">grpc</a> and <a href="https://github.com/grpc/grpc-web">grpc-web</a> tls-encrypted version 3 protocol buffer interfaces, with order settlement via <a className="font-mono" href="https://github.com/ProjectOpenSea/seaport">seaport</a> protocol; Collaborated in past.</li>
        <li><a className="font-mono" href="https://github.com/paradigmxyz/flux">paradigmxyz/flux</a> – a graph-based LLM power tool for exploring many completions in parallel; Contributed with ideas.</li>
        <li><a className="font-mono" href="https://github.com/h0tw4t3r/arbitrageur">h0tw4t3r/arbitrageur</a> – an attempt to extract cross-dex mev amongst <a className="font-mono" href="https://github.com/Uniswap/v2-core">uniswap-v2</a> and <a className="font-mono" href="https://github.com/Uniswap/v3-core">uniswap-v3</a> forks; My failed attempt to become MEV searcher.</li>
        <li><a className="font-mono" href="https://github.com/h0tw4t3r/abi-signature-bruteforcer">h0tw4t3r/abi-signature-bruteforcer</a> – a cpu-based solidity function signature bruteforcer to save extra gas on calls; Author.</li>
        <li><a className="font-mono" href="https://github.com/spilnotaxyz/nfting-frontend">spilnotaxyz/nfting-frontend</a> & <a className="font-mono" href="https://github.com/spilnotaxyz/nfting-backend">spilnotaxyz/nfting-backend</a>  – a web application that gathers ethereum account data and outputs nft statistics;</li>
      </ul>
      <hr/>
      <h1 id="closed-source-work">Closed Source Work</h1>
      <ul>
        <li><a className="font-mono" href="https://valorem.xyz">valorem-labs-inc/trade-app</a> – a frontend for interacting with valorem&apos;s <a className="font-mono" href="https://github.com/valorem-labs-inc/clear">clear</a> protocol and <a className="font-mono" href="https://github.com/valorem-labs-inc/trade-interfaces">trade-api</a>;</li>
        <li><a className="font-mono" href="https://spilnota.xyz/">spilnotaxyz/landing</a> – a landing page of <a href="https://spilnota.xyz/">spilnota.xyz</a>;</li>
        <li><a className="font-mono" href="https://app.spilnota.xyz/">spilnotaxyz/app</a> – a marketplace frontend for startups to get first 100 users and crowdfund safely using fundriasing protocol;</li>
        <li><a className="font-mono" href="https://spilnota.xyz/">spilnotaxyz/contracts</a> – a permisionless fundraising protocol based on iterative building enabling users to refund and invest safely;</li>
        <li><a className="font-mono" href="https://spilnota.xyz/">spilnotaxyz/microservices</a> – a cluster of microservices serving the <a className="font-mono" href="https://app.spilnota.xyz/">spilnotaxyz/app</a> and publishing activity report of discord servers with the help of <a href="https://openai.com/gpt-4">gpt-4</a> llm;</li>
        <li><a className="font-mono" href="https://www.kanji.io/">kanji/marketplace</a> & <a className="font-mono" href="https://www.kanji.io/">kanji/backend</a> – a marketplace for creating and selling erc-721 and erc-1155 collections;</li>
        <li><a className="font-mono" href="https://www.kanji.io/">kanji/indexer</a> – an indexer for analyzing the blockchain data for nft collections analytics purposes;</li>
        <li><a className="font-mono" href="https://lab.localtrade.cc/">localtradecc/defi-lab</a> – a defi frontend for swapping, staking and liquidity provision of localtrade&apos; utility token;</li>
        <li><a className="font-mono" href="https://t.me/zerox_exchange_bot">localtradecc/zerox</a> – a telegram crypto wallet for swapping tokens based on <a className="font-mono" href="https://0xpay.app">localtradecc/0xpay</a> crypto-processing infrastructure;</li>
        </ul>
      <hr/>
      <h1 id="hackathons">Hackathons</h1>
      <ul>
        <li><a href="https://twitter.com/collective_eth">nft-bali 2023</a> – #2 place: <a className="font-mono" href="https://github.com/spilnotaxyz/partnerships-app">spilnotaxyz/partnerships-app</a> & <a className="font-mono" href="https://github.com/spilnotaxyz/partnerships-contracts">spilnotaxyz/partnerships-contracts</a> – a partnerships marketplace for projects to collab;</li>
        <li><a href="https://twitter.com/kyivtechsummit">kyivtechsummit 2022</a> – <a href="https://devpost.com/software/tok3nised">most impactful project built on ethereum award</a>: <a className="font-mono" href="https://github.com/spilnotaxyz/hackathon-kts-2022-frontend">spilnotaxyz/hackathon-kts-2022-frontend</a> & <a className="font-mono" href="https://github.com/spilnotaxyz/hackathon-kts-2022-backend">spilnotaxyz/hackathon-kts-2022-backend</a> & <a className="font-mono" href="https://github.com/spilnotaxyz/hackathon-kts-2022-contracts">spilnotaxyz/hackathon-kts-2022-contracts</a> – a platform to fundraise transparently and fight corruption in donation aids for Ukraine;</li>
      </ul>
      <hr/>
    
      {allPosts.length !== 0 && <><hr/><h1>Posts</h1></>}
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
