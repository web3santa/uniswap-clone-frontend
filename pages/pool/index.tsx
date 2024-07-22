import type { NextPage } from "next";
import { useAccount, useReadContracts } from "wagmi";
import { useWriteContract } from "wagmi";
import { Hex, formatEther, parseEther } from "viem";
import { useBalance } from "wagmi";
import { PairABI } from "../../abi/PairABI";
import { RouterABI } from "../../abi/RouterABI";
import { IERC20ABI } from "../../abi/IERC20ABI";

import {
  Pair_A_B_Address,
  RouterAddress,
  TokenA_Addreess,
  TokenB_Address,
} from "../../utils/address";
import { useState } from "react";

const PairContract = {
  address: Pair_A_B_Address,
  abi: PairABI,
} as const;

const RouterContract = {
  address: RouterAddress,
  abi: RouterABI,
} as const;

const TokenA_Contract = {
  address: TokenA_Addreess,
  abi: IERC20ABI,
} as const;

const TokenB_Contract = {
  address: TokenB_Address,
  abi: IERC20ABI,
} as const;

const Home: NextPage = () => {
  const { writeContract } = useWriteContract();
  const [tokenA, setTokenA] = useState<string>()
  const [tokenB, setTokenB] = useState<string>()

  const account = useAccount();
  const accountBalancoe = useBalance({
    address: account.address as Hex,
  });

  const result = useReadContracts({
    contracts: [
      {
        ...TokenA_Contract,
        functionName: "balanceOf",
        args: [account.address as Hex],
      },
      {
        ...TokenB_Contract,
        functionName: "balanceOf",
        args: [account.address as Hex],
      },
      {
        ...PairContract,
        functionName: "getReserves",
      },
    ],
  });

  const handleAddLiquidity = async () => {
    // const deadline = Math.floor(Date.now() / 1000) + 86400; // 현재 시간 + 1days

    await writeContract({
      ...RouterContract,
      functionName: "deposit",
      args: [
        TokenA_Addreess,
        TokenB_Address,
        1,
        account.address as Hex,
        parseEther(tokenA as string),
        parseEther("0"),
        BigInt(86400 as number),
      ],
    });
  };

  const handleAddLiquidity2 = async () => {
    // const deadline = Math.floor(Date.now() / 1000) + 86400; // 현재 시간 + 1days

    await writeContract({
      ...RouterContract,
      functionName: "deposit",
      args: [
        TokenB_Address,
        TokenA_Addreess,
        1,
        account.address as Hex,
        parseEther(tokenB as string),
        parseEther("0"),
        BigInt(86400 as number),
      ],
    });
  };

  return (
    <div className="flex flex-col m-20 justify-center items-center">
      <div>
        <div className="card w-96 shadow-xl bg-red-300 m-20">
          <div className="card-body">
          <h2 className="card-title text-black">Gold Token Pool</h2>

            <p className="text-black"> 
              Pool Size:{" "}
              {result.data?.[2].status == "success" &&
                formatEther(result?.data?.[2].result[1] as bigint)}
            </p>
            <input type="text" placeholder="amount of token..." value={tokenA} onChange={(e) => setTokenA(e.target.value)} />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  writeContract({
                    ...TokenA_Contract,
                    functionName: "approve",
                    args: [RouterAddress, result.data?.[0].result as bigint],
                  })
                }
              >
                Approve
              </button>
              <button onClick={handleAddLiquidity} className="btn btn-primary">
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-96 shadow-xl bg-red-300">
          <div className="card-body">

          <h2 className="card-title text-black">Tether Pool</h2>


            <p className="text-black">
              Pool Size:{" "}
              {result.data?.[2].status == "success" &&
                formatEther(result?.data?.[2].result[0] as bigint)}
            </p>
            <input type="text" placeholder="amount of token..." value={tokenB} onChange={(e) => setTokenB(e.target.value)} />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  writeContract({
                    ...TokenB_Contract,
                    functionName: "approve",
                    args: [RouterAddress, result.data?.[1].result as bigint],
                  })
                }
              >
                Approve
              </button>
              <button
                  className="btn btn-primary"
              onClick={handleAddLiquidity2}>Deposit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
