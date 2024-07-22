import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  avalancheFuji,
} from 'wagmi/chains';
import { Chain, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Navbar from '../components/Navbar';

const wagmiTestnet = {
  id: 11111,
  name: 'wagmi',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'WGM', symbol: 'WGM', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://subnets.avax.network/wagmi/wagmi-chain-testnet/explorer' },
  },
} as const satisfies Chain;


const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    wagmiTestnet
  ],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Navbar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
