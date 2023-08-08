// React Context Hook for State Management
import * as React from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "@/utils/generate-dummy-data";

//
export const ThreadsContext = React.createContext<Thread[]>([]);

// Component that provides the State to the children
export const ThreadProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  // Variable to hold Dummy Data we are generating
  const [threads, setThreads] = React.useState<Thread[]>([]);

  // Set the Threads so when component mounts we auto-generate the data
  React.useEffect(() => {
    setThreads(generateThreads());
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};
