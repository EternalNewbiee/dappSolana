
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl} from "@solana/web3.js";
import { useMemo } from "react";

export const WalletConnectProvider = ({children}) => {
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => {
        if(network === WalletAdapterNetwork.Devnet){
            return 'https://boldest-proportionate-frog.solana-devnet.quiknode.pro/5c99024e96bd9d6c2e7141539ffd45683d932f09/'
        }
        return clusterApiUrl(network)
    },{network})

    const wallets  = useMemo(()=> [new PhantomWalletAdapter()], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}