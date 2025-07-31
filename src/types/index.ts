export interface NFTData {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface MintingState {
  isMinting: boolean;
  isSuccess: boolean;
  error: string | null;
  transactionHash: string | null;
}

export interface UserData {
  address: string;
  balance: string;
  isConnected: boolean;
}
