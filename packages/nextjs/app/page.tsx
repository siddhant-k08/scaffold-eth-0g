"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BoltIcon, BookOpenIcon, BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-0g-white min-h-screen">
        <div className="px-5">
          <h1 className="text-center text-regola">
            <span className="block text-2xl mb-2 text-0g-black font-medium">Welcome to</span>
            <span className="block text-4xl font-bold text-0g-purple-shade">Scaffold-ETH-0G</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row mt-6">
            <p className="my-2 font-medium text-0g-black">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg text-0g-black mt-6">
            Get started by editing{" "}
            <code className="italic bg-0g-gray-1 text-0g-black text-base font-bold max-w-full break-words break-all inline-block px-2 py-1 rounded text-geist-mono">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg text-0g-black mt-4">
            Edit your smart contract{" "}
            <code className="italic bg-0g-gray-1 text-0g-black text-base font-bold max-w-full break-words break-all inline-block px-2 py-1 rounded text-geist-mono">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-0g-gray-1 text-0g-black text-base font-bold max-w-full break-words break-all inline-block px-2 py-1 rounded text-geist-mono">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        <div className="flex-grow bg-0g-gray-1 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <div className="flex flex-col bg-0g-white border-2 border-0g-purple-shade px-8 py-8 text-center items-center max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BoltIcon className="h-8 w-8 text-0g-purple-shade mb-4" />
              <p className="text-0g-black font-medium">
                Get testnet funds from the{" "}
                <Link
                  href="https://faucet.0g.ai/"
                  passHref
                  className="link text-0g-purple-shade hover:text-0g-purple-1 font-semibold"
                >
                  Faucet
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-0g-white border-2 border-0g-purple-shade px-8 py-8 text-center items-center max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BugAntIcon className="h-8 w-8 text-0g-purple-shade mb-4" />
              <p className="text-0g-black font-medium">
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link text-0g-purple-shade hover:text-0g-purple-1 font-semibold">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-0g-white border-2 border-0g-purple-shade px-8 py-8 text-center items-center max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <MagnifyingGlassIcon className="h-8 w-8 text-0g-purple-shade mb-4" />
              <p className="text-0g-black font-medium">
                Explore your transactions with the{" "}
                <Link
                  href="https://explorer.0g.ai/"
                  passHref
                  className="link text-0g-purple-shade hover:text-0g-purple-1 font-semibold"
                  target="_blank"
                >
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-0g-white border-2 border-0g-purple-shade px-8 py-8 text-center items-center max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BookOpenIcon className="h-8 w-8 text-0g-purple-shade mb-4" />
              <p className="text-0g-black font-medium">
                Learn more about{" "}
                <Link
                  href="https://dev.0g.ai/"
                  passHref
                  className="link text-0g-purple-shade hover:text-0g-purple-1 font-semibold"
                  target="_blank"
                >
                  0G
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
