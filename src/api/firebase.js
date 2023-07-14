import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(cbf) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우 (로그인한 경우)

    const updateUser = user ? await adminUser(user) : null;
    cbf(updateUser);
  });
}

async function adminUser(user) {
  // 2. 사용자 어드민 권한 확인
  // 3. {...user, isAdmin: trud/false}

  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);

        return { ...user, isAdmin };
      }
      return user;
    });
}

export function writeUserData(product, image) {
  const id = uuid();
  return set(ref(database, `product/${id}`), {
    ...product,
    id,
    image,
    price: parseInt(product.price),
    color: product.color.split(','),
    options: product.options.split(','),
  });
}

export function readUserData() {
  get(ref(database, `users/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
