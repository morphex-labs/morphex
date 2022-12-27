import React from 'react';
import { ConnectKitButton } from 'connectkit';

export interface ConnectWalletBtnProps {
  classNames: string;
}

const ConnectWalletBtn: React.FC<ConnectWalletBtnProps> = ({ classNames }) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button type="button" onClick={show} className={classNames}>
            {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectWalletBtn;
