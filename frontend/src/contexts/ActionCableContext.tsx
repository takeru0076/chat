import React, { createContext, useContext } from 'react';
import ActionCable from 'actioncable';

const ActionCableContext = createContext<ActionCable.Cable | null>(null);

interface ActionCableProviderProps {
  cable: ActionCable.Cable;
  children: React.ReactNode;
}

export const ActionCableProvider: React.FC<ActionCableProviderProps> = ({ cable, children }) => {
  return (
    <ActionCableContext.Provider value={cable}>
      {children}
    </ActionCableContext.Provider>
  );
};

export const useActionCable = () => {
  const context = useContext(ActionCableContext);
  if (!context) {
    throw new Error('useActionCable must be used within an ActionCableProvider');
  }
  return context;
};
