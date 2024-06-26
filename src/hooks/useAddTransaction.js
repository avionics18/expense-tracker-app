import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    if (userID) {
      await addDoc(transactionCollectionRef, {
        userID,
        description,
        transactionAmount,
        transactionType,
        createdAt: serverTimestamp(),
      });
    } else {
      alert("Error: Unauthenticated User");
    }
  };

  return { addTransaction };
};
