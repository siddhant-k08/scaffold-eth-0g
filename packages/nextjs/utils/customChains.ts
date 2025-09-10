import { defineChain } from "viem";

// TODO: Add Chain details here.
export const OGTestnet = defineChain({
  id: 16601,
  name: "0G Testnet",
  nativeCurrency: { name: "0G", symbol: "0G", decimals: 18 },
  rpcUrls: {
    default: {
      // TODO: Add 0G RPC URL
      http: [process.env.NEXT_PUBLIC_OG_RPC_URL || "https://evmrpc-testnet.0g.ai"],
    },
  },
  blockExplorers: {
    default: {
      name: "0G Testnet Explorer",
      // TODO: Add Explorer URL
      url: "https://explorer.0g.ai",
    },
  },
});
