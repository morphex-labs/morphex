import React from 'react';
import { useAccount } from 'wagmi';

import ConnectWalletBtn from './ConnectWalletBtn';

export interface GenericBtnProps {
  btnTextMain: string;
  classNamesConnect: string;
  classNamesMain: string;
  onClickFunc?: () => void;
}

const GenericBtn: React.FC<GenericBtnProps> = ({
  btnTextMain,
  classNamesConnect,
  classNamesMain,
  onClickFunc,
}) => {
  const { isConnected } = useAccount();

  if (!isConnected) return <ConnectWalletBtn classNames={classNamesConnect} />;

  return (
    <button type="button" className={classNamesMain} onClick={onClickFunc}>
      {btnTextMain}
    </button>
  );
};

export default GenericBtn;
