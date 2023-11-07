import { LichSu } from '@/types/common';
import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

interface HistoryContextProps {
  historyList: LichSu[];
  addHistory: (historyItem: LichSu) => void;
}

interface HistoryProviderProps {
  children: ReactNode;
}

const initialValues: HistoryContextProps = {
  historyList: [],
  addHistory: (item) => {},
};

const historyKey = 'histories';
export const historyContext = createContext<HistoryContextProps>(initialValues);

const HistoryProvider = ({ children }: HistoryProviderProps) => {
  const [historyList, setHistoryList] = useState<LichSu[]>([]);

  const withConnection = (callBack: (db: IDBDatabase) => void) => {
    const request = indexedDB.open('scan-app-db');
    let db: IDBDatabase | null = null;

    request.onsuccess = () => {
      db = request.result;
      callBack(db);
    };

    request.onupgradeneeded = () => {
      db = request.result;
      db.createObjectStore(historyKey, {
        keyPath: 'id',
        autoIncrement: true,
      });
    };
  };

  const getAllHistory = useCallback(() => {
    const handleGetAll = (db: IDBDatabase) => {
      if (!db) return;

      const trans = db.transaction(historyKey, 'readonly');
      const objectStore = trans.objectStore(historyKey);
      const allRecords = objectStore.getAll();

      allRecords.onsuccess = function () {
        const historyList = allRecords?.result as LichSu[];
        setHistoryList(historyList.reverse());
        db.close();
      };
    };

    withConnection(handleGetAll);
  }, []);

  const addHistory = useCallback(
    (historyItem: LichSu) => {
      const handleAdd = (db: IDBDatabase) => {
        if (!db) return;

        const transaction = db
          ?.transaction(historyKey, 'readwrite')
          .objectStore(historyKey)
          .add(historyItem);

        if (transaction) {
          transaction.onsuccess = () => {
            getAllHistory();
            db.close();
          };
        }
      };

      withConnection(handleAdd);
    },
    [getAllHistory]
  );

  useEffect(() => {
    getAllHistory();
  }, [getAllHistory]);

  return (
    <historyContext.Provider value={{ historyList, addHistory }}>
      {children}
    </historyContext.Provider>
  );
};

export default HistoryProvider;
