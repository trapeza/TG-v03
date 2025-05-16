// This function generates a limited set of token symbols for static generation
// Only needed if we decide to use static generation in the future
export async function generateStaticParams() {
  // Pre-generate pages for the most popular tokens
  return [
    { symbol: "btc" },
    { symbol: "eth" },
    { symbol: "sol" },
    { symbol: "link" },
    { symbol: "uni" },
    { symbol: "aave" },
    { symbol: "cake" },
    { symbol: "jup" },
    { symbol: "mkr" },
  ]
}

import TokenProfileClientPage from "./TokenProfileClientPage"

export default function TokenProfilePage({ params }: { params: { symbol: string } }) {
  return <TokenProfileClientPage params={params} />
}
