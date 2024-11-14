import { createContext } from 'react';

type IndexContextType =
  | {
      setIndex: React.Dispatch<React.SetStateAction<number | null>>;
    }
  | undefined;

export const IndexContext = createContext<IndexContextType>(undefined);
