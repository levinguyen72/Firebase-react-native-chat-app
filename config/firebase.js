import Constant from 'expo-constants'
import { initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//firebase config 
const firebaseConfig = {
  apiKey: Constant.manifest2.extra.apiKey,
  authDomain: Constant.manifest2.extra.authDomain,
  projectId: Constant.manifest2.extra.projectId,
  storageBucket: Constant.manifest2.extra.storageBucket,
  messagingSenderId: Constant.manifest2.extra.messagingSenderId,
  appId: Constant.manifest2.extra.appId,
  databaseURL: Constant.manifest2.extra.databaseURL
}
//initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();