declare module 'react-actioncable-provider' {
  import { ReactNode, ComponentType } from 'react';
  import { Cable } from 'actioncable';

  interface ActionCableProviderProps {
    cable: Cable;
    children: ReactNode;
  }

  export const ActionCableProvider: ComponentType<ActionCableProviderProps>;
}
