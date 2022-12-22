import { app } from "../firebase/firebase-init";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(app);

//submit beta join form
export const submitBetaJoinForm = async (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const docRef = await addDoc(collection(db, "beta-join"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      resolve(docRef.id);
    } catch (e) {
      reject(e);
    }
  });