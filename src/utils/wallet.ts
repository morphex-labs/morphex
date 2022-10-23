export function isWalletInstalled() {
  return typeof window.ethereum === 'undefined';
}
