
import '../styles/globals.css'
import  'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Component/ui/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { SSRProvider } from 'react-bootstrap';
import {SessionProvider} from 'next-auth/react'
import Footer from '../Component/ui/Footer';
import Head  from 'next/head';
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const BscChain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'BNB',
  nativeCurrency: {
    decimals: 18,
    name: 'BSCTEST',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com/' },
  },
  testnet: true,
}
const { chains, provider } = configureChains(
  [
    chain.polygonMumbai,chain.rinkeby,BscChain],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Healthy-Wealthy",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
  <SSRProvider>
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
   <Head>

<meta key="description" property="og:description" content="HealthiWealthi™ RXHEAL | Get PAID to live healthi
Affordable, high-quality Health Coaching for everyone. Own RXHEAL and build wealth."/>
<meta property="og:image" key="image" content="/photo.png"/>
       </Head>
<Navbar/>
  <Component {...pageProps} />
  <Footer/>

  </RainbowKitProvider>
  </WagmiConfig>
  </SSRProvider>
  </SessionProvider>
}


export default MyApp;