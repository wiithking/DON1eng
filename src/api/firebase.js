import { initializeApp } from "firebase/app";
// import {v4 as uuid } from 'uuid';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged
    } from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);




export function login() {
    signInWithPopup(auth, provider)
        .catch(console.error);
}


export function logout() {
    signOut(auth).catch(console.error);
    
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updateuser = user ? await adminUser(user) : null;
        callback(updateuser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins'))
        .then((snapshot) => {
            if(snapshot.exists()) {
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid);
                return {...user, isAdmin};
            }
        });
}







// 새로운 부품 등록하는 function
export async function addNewPart(part, partImgURL, position01ImgURL, position02ImgURL, barcodeImgURL) {
    // const id = uuid();
    // console.log(`partImgURL: ${partImgURL}`);
    // console.log(`position01ImgURL: ${position01ImgURL}`);
    // console.log(`position02ImgURL: ${position02ImgURL}`);
    // console.log(`barcodeImgURL: ${barcodeImgURL}`);
    return set(ref(database, `parts/${part.partNumberDON1eng}`), {
        ...part,
        partImg: partImgURL,
        position01Img: position01ImgURL,
        position02Img: position02ImgURL,
        barcodeImg: barcodeImgURL,
        // price: parseInt(part.price),
        // needQty: parseInt(part.needQty),
        // recommendedReplacementCycle: parseInt(part.recommendedReplacementCycle)
    })
}



// 부품목록 불러 오는 function
export async function getParts() {
    return get(ref(database, 'parts'))
            .then(
                (snapshot) => {
                    // console.log('t');
                    if(snapshot.exists()) {
                        return Object.values(snapshot.val());
                    } else {
                        return [];
                    }
                    
                }
            )
            .catch((error) => {
                console.log(error);
            });
}

export async function getCategory() {
    return get(ref(database, 'category'))
            .then(
                (snapshot) => {
                    if(snapshot.exists()) {
                        return Object.values(snapshot.val());
                    } else {
                        return [];
                    }
                }
            )
            .catch((error) => {
                console.log(error);
            });
}


//부품 삭제
export async function delPart(part) {
    remove(ref(database, `parts/${part.id}`))
    .then( () => {
        alert(`Data was deleted!`);
    })
    .catch( (error) => {
        alert("Unsuccessful");
        console.log(error);
    })
}


export async function migrationParts(parts) {

    return (
        parts.map( (part) => (
            set(ref(database, `parts/${part.partNumberDON1eng}`), {
                ...part,
            })
        ))
    )
}

    // partNumberDON1eng
    // partNumberManufacturer
    // partImg
    // category
    // autobagModel
    // partNameKor
    // partNameEng
    // modelNumber
    // manufacturer
    // usePosition
    // size
    // needQty
    // recommendedReplacementCycle
    // position01Img
    // position02Img
    // barcodeImg
    // price
    // invenNeedAmount
    // invenBookAmount
    // invenCurrentAmount
    // invenPosition
    // description
    // note