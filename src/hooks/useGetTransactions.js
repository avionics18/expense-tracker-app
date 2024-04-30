import { useState, useEffect } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  useEffect(() => {
    const getTransactions = async () => {
      let unsubscribe;
      console.log("getTransactions");

      try {
        const queryTransactions = query(
          transactionCollectionRef,
          where("userID", "==", userID),
          orderBy("createdAt", "desc"),
        );

        unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
          let docs = [];

          snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;
            docs.push({ ...data, id });
          });

          setTransactions(docs);
        });
      } catch (err) {
        console.error(err);
      }

      return () => unsubscribe();
    };

    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { transactions };
};
