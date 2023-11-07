import { LichSu } from '@/types/common';
import { useCallback, useEffect, useState } from 'react';

const historyKey = 'histories';

export const useHistories = () => {
  const [historyList, setHistoryList] = useState<LichSu[]>([]);

  const getAllHistory = useCallback(() => {
    const handleGetAll = (db: IDBDatabase) => {
      const trans = db.transaction(historyKey, 'readonly');
      const objectStore = trans.objectStore(historyKey);
      const allRecords = objectStore.getAll();

      allRecords.onsuccess = function () {
        setHistoryList(allRecords?.result as LichSu[]);
        db.close();
      };
    };

    withConnection(handleGetAll);
  }, []);

  const addHistory = useCallback(
    (historyItem: LichSu) => {
      const handleAdd = (db: IDBDatabase) => {
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

  useEffect(() => {
    getAllHistory();
  }, [getAllHistory]);

  return {
    historyList,
    addHistory,
  };
};
