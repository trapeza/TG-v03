"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Copy, Check, AlertCircle, Shield, Code2, GitBranch, GitPullRequest } from "lucide-react"

interface TokenCodeProps {
  token: {
    symbol: string
    name: string
    address: string
  }
}

export default function TokenCode({ token }: TokenCodeProps) {
  const [activeTab, setActiveTab] = useState("contract")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(token.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Mock data for contract details
  const contractDetails = {
    address: token.address,
    blockchain: "Ethereum",
    tokenType: "ERC-20",
    deployedAt: "2020-09-17",
    compiler: "Solidity 0.7.6",
    license: "MIT",
    verified: true,
    audited: true,
    audits: [
      {
        name: "OpenZeppelin",
        date: "2020-08-15",
        url: "#",
      },
      {
        name: "Trail of Bits",
        date: "2020-08-22",
        url: "#",
      },
    ],
    github: "https://github.com/Uniswap/uniswap-v3-core",
    implementation: "0x5678...9012",
    proxy: true,
  }

  // Mock data for contract code
  const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UniswapToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Uniswap", "UNI") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
`

  // Mock data for contract ABI
  const contractABI = `[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]`

  // Mock data for GitHub activity
  const githubActivity = [
    {
      type: "commit",
      title: "Fix rounding error in fee calculation",
      author: "dev1",
      date: "2 days ago",
      url: "#",
    },
    {
      type: "pull",
      title: "Add support for permit signatures",
      author: "dev2",
      date: "1 week ago",
      url: "#",
      status: "merged",
    },
    {
      type: "issue",
      title: "Gas optimization for large transfers",
      author: "dev3",
      date: "2 weeks ago",
      url: "#",
      status: "open",
    },
    {
      type: "commit",
      title: "Update dependencies and security patches",
      author: "dev4",
      date: "3 weeks ago",
      url: "#",
    },
    {
      type: "pull",
      title: "Implement EIP-2612 for gasless approvals",
      author: "dev5",
      date: "1 month ago",
      url: "#",
      status: "merged",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Contract Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Contract Address</p>
                <div className="flex items-center mt-1">
                  <p className="text-sm font-medium text-bright-cyan truncate">{contractDetails.address}</p>
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-1" onClick={handleCopy}>
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span className="sr-only">Copy Address</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ExternalLink className="h-3 w-3" />
                    <span className="sr-only">View on Explorer</span>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Blockchain</p>
                  <p className="text-sm font-medium">{contractDetails.blockchain}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Token Type</p>
                  <p className="text-sm font-medium">{contractDetails.tokenType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Deployed</p>
                  <p className="text-sm font-medium">{contractDetails.deployedAt}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Compiler</p>
                  <p className="text-sm font-medium">{contractDetails.compiler}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary-green/20 text-primary-green hover:bg-primary-green/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
                <Badge className="bg-primary-green/20 text-primary-green hover:bg-primary-green/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Audited
                </Badge>
                {contractDetails.proxy && (
                  <Badge className="bg-bright-cyan/20 text-bright-cyan hover:bg-bright-cyan/30">Proxy</Badge>
                )}
                <Badge className="bg-muted/20 text-muted-foreground hover:bg-muted/30">{contractDetails.license}</Badge>
              </div>

              {contractDetails.audited && (
                <div>
                  <p className="text-sm text-muted-foreground">Audits</p>
                  <div className="space-y-2 mt-1">
                    {contractDetails.audits.map((audit, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{audit.name}</span>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{audit.date}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <ExternalLink className="h-3 w-3" />
                            <span className="sr-only">View Audit</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {contractDetails.github && (
                <div>
                  <p className="text-sm text-muted-foreground">GitHub Repository</p>
                  <div className="flex items-center mt-1">
                    <a
                      href={contractDetails.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-bright-cyan hover:underline flex items-center"
                    >
                      <GitBranch className="h-3 w-3 mr-1" />
                      {contractDetails.github.split("/").slice(-2).join("/")}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo md:col-span-2">
          <CardHeader className="pb-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Contract Code</CardTitle>
                <TabsList>
                  <TabsTrigger value="contract">Contract</TabsTrigger>
                  <TabsTrigger value="abi">ABI</TabsTrigger>
                  <TabsTrigger value="github">GitHub</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="contract" className="mt-0">
              <div className="relative">
                <pre className="bg-near-black/30 p-4 rounded-md overflow-auto max-h-[400px] text-xs">
                  <code>{contractCode}</code>
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => navigator.clipboard.writeText(contractCode)}
                >
                  <Copy className="h-3 w-3 mr-1" />
                  Copy Code
                </Button>
              </div>
              <div className="flex items-center mt-4 text-xs text-muted-foreground">
                <AlertCircle className="h-3 w-3 mr-1" />
                <span>This is a simplified version of the contract. View the full code on Etherscan or GitHub.</span>
              </div>
            </TabsContent>
            <TabsContent value="abi" className="mt-0">
              <div className="relative">
                <pre className="bg-near-black/30 p-4 rounded-md overflow-auto max-h-[400px] text-xs">
                  <code>{contractABI}</code>
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => navigator.clipboard.writeText(contractABI)}
                >
                  <Copy className="h-3 w-3 mr-1" />
                  Copy ABI
                </Button>
              </div>
              <div className="flex items-center mt-4 text-xs text-muted-foreground">
                <AlertCircle className="h-3 w-3 mr-1" />
                <span>This is a partial ABI. Download the full ABI from Etherscan.</span>
              </div>
            </TabsContent>
            <TabsContent value="github" className="mt-0">
              <div className="space-y-4">
                {githubActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-deep-indigo/30 last:border-0">
                    {activity.type === "commit" ? (
                      <Code2 className="h-4 w-4 text-bright-cyan mt-0.5" />
                    ) : activity.type === "pull" ? (
                      <GitPullRequest className="h-4 w-4 text-primary-green mt-0.5" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-[#E0115F] mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <a href={activity.url} className="font-medium hover:text-bright-cyan">
                          {activity.title}
                        </a>
                        {activity.status && (
                          <Badge
                            className={
                              activity.status === "merged"
                                ? "bg-primary-green/20 text-primary-green"
                                : "bg-[#E0115F]/20 text-[#E0115F]"
                            }
                          >
                            {activity.status}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{activity.author}</span>
                        <span className="mx-2">•</span>
                        <span>{activity.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View on GitHub
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </TabsContent>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Contract Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Security Score</h3>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-green">92</span>
                </div>
                <div className="ml-4">
                  <Badge className="bg-primary-green/20 text-primary-green hover:bg-primary-green/30">
                    <Shield className="h-3 w-3 mr-1" />
                    Secure
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Last updated: 2 weeks ago</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Code Quality</span>
                  <span className="text-primary-green">95/100</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Security Audits</span>
                  <span className="text-primary-green">100/100</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Centralization Risks</span>
                  <span className="text-bright-cyan">85/100</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Governance</span>
                  <span className="text-bright-cyan">88/100</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="text-sm font-medium">Security Analysis</h3>
              <div className="space-y-3">
                <div className="p-3 bg-near-black/30 rounded-md">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-primary-green mr-2" />
                    <h4 className="font-medium">Multiple Security Audits</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The contract has been audited by multiple reputable firms including OpenZeppelin and Trail of Bits.
                  </p>
                </div>
                <div className="p-3 bg-near-black/30 rounded-md">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-primary-green mr-2" />
                    <h4 className="font-medium">Open Source Verification</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The contract code is open source and verified on Etherscan, allowing for public scrutiny.
                  </p>
                </div>
                <div className="p-3 bg-near-black/30 rounded-md">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-bright-cyan mr-2" />
                    <h4 className="font-medium">Proxy Implementation</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The contract uses a proxy pattern which allows for upgrades. While this provides flexibility, it
                    also introduces potential centralization risks.
                  </p>
                </div>
                <div className="p-3 bg-near-black/30 rounded-md">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-primary-green mr-2" />
                    <h4 className="font-medium">Time-Tested</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The contract has been live for over 2 years with no security incidents, demonstrating its
                    resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
