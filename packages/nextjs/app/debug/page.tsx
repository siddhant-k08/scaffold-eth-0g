import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-center mt-8 bg-0g-purple-4 p-10">
        <h1 className="text-4xl my-0 text-0g-black">Debug Contracts</h1>
        <p className="text-0g-black">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-0g-gray-1 text-0g-black font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div>
      <DebugContracts />
    </div>
  );
};

export default Debug;
