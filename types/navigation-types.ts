// navigation-types.ts or somewhere in your app's types
export type RootStackParamList = {
  Home: undefined;
  PreGameRoom: {
    roomId: string;
    isOwner: boolean;
    nickname: string;
    playerId: string;
  };
  // other routes
};
