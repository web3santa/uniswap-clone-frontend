import type { NextPage } from "next";
import Head from "next/head";
import Style from "../styles/Home.module.css";
import { useAccount, useReadContracts } from "wagmi";
import { useWriteContract } from "wagmi";
import { Hex, formatEther, parseEther } from "viem";
import { useBalance } from "wagmi";
import { PairABI } from "../abi/PairABI";
import { RouterABI } from "../abi/RouterABI";
import { IERC20ABI } from "../abi/IERC20ABI";

import {
  Pair_A_B_Address,
  RouterAddress,
  TokenA_Addreess,
  TokenB_Address,
} from "../utils/address";
import SwapTable from "../components/SwapTable";
import { useState } from "react";
import Image from "next/image";

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

  const account = useAccount();
  const [input, setInput] = useState("");
  const [isChange, setIsChange] = useState(false);

  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  console.log(input);

  // Token 1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  const handleSwap = async () => {
    writeContract({
      ...RouterContract,
      functionName: "swap",
      args: [
        TokenA_Addreess,
        TokenB_Address,
        1,
        account.address as Hex,
        parseEther(input),
        parseEther("0"),
      ],
    });

    setInput("");
  };


  const handleSwap2 = async () => {
    writeContract({
      ...RouterContract,
      functionName: "swap",
      args: [
        TokenB_Address,
        TokenA_Addreess,
        1,
        account.address as Hex,
        parseEther(input),
        parseEther("0"),
      ],
    });

    setInput("");
  };

  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <button onClick={() => setIsChange(!isChange)}>Change</button>
          <div className={Style.HeroSection_box_heading_img}>
       
          </div>
        </div>
        {!isChange && (
          <div>
            <div className={Style.HeroSection_box_input}>
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => setOpenToken(true)}>
            
                {tokenOne.name || "Gold"}
              </button>
            </div>

            <div className={Style.HeroSection_box_input}>
              <input type="text" placeholder="0" />
              <button onClick={() => setOpenTokensTwo(true)}>
               
                {tokenTwo.name || "Tether"}
              </button>
            </div>

            <button className={Style.HeroSection_box_btn} onClick={handleSwap}>
              Swap
            </button>
          </div>
        )}

        {isChange && (
          <div>
            <div className={Style.HeroSection_box_input}>
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => setOpenToken(true)}>
            
                {tokenOne.name || "Tether"}
              </button>
            </div>

            <div className={Style.HeroSection_box_input}>
              <input type="text" placeholder="0" />
              <button onClick={() => setOpenTokensTwo(true)}>
           
                {tokenTwo.name || "Gold"}
              </button>
            </div>

            <button className={Style.HeroSection_box_btn} onClick={handleSwap2}>
              Swap
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
