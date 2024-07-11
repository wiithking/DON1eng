import dummy from "../files/SolvusAutobagParts_20240615.json";
import { initializeApp } from "firebase/app";
import {v4 as uuid } from 'uuid';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged
    } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

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


// option 내용을 불러 오는 function
// export async function getOptions(optionText) {
//     return get(ref(database, optionText))
//         .then((snapshot) => {
//             if(snapshot.exists()) {
//                 return Object.values(snapshot.val());
//             }
//             return [];
//         });
// } 

// autobag MODEL명 불러 오는 function




// 새로운 부품 등록하는 function
export async function addNewPart(part, partImgURL, position01ImgURL, position02ImgURL, barcodeImgURL) {
    const id = uuid();
    // console.log(`partImgURL: ${partImgURL}`);
    // console.log(`position01ImgURL: ${position01ImgURL}`);
    // console.log(`position02ImgURL: ${position02ImgURL}`);
    // console.log(`barcodeImgURL: ${barcodeImgURL}`);
    return set(ref(database, `parts/${id}`), {
        ...part,
        id,
        partImg: partImgURL,
        position01Img: position01ImgURL,
        position02Img: position02ImgURL,
        barcodeImg: barcodeImgURL,
        price: parseInt(part.price),
        needQty: parseInt(part.needQty),
        recommendedReplacementCycle: parseInt(part.recommendedReplacementCycle)
    })
}

// 부품목록 불러 오는 function
export async function getParts() {
    return get(ref(database, 'parts'))
        .then(snapshot => {
            if(snapshot.exists()) {
                const data =  Object.values(snapshot.val());
                return data;
            }
            return [];
    })
}




// json 파일을 db로 옮김
export async function migrationParts() {
    
    dummy.partsSp.map(partss => (
        set(ref(database, `parts/${uuid()}`), {
            // id,
            partNumberManufacturer: partss.PartNumberManufacturer,
            partNumberDON1eng: partss.PartNumberDON1eng,
            partImg: partss.PartPicture,
            category: partss.Category,
            autobagModel: partss.AutobagModel,
            partNameEng: partss.PartNameEng,
            partNameKor: partss.PartNameKor,
            modelNumber: partss.ModelNumber,
            manufacturer: partss.Manufacturer,
            usePosition: partss.UsePosition,
            size: partss.Size,
            needQty: partss.NeedQty,
            recommendedReplacementCycle: partss.RecommendedReplacementCycle,
            positionImg01: partss.PositionPic1,
            positionImg02: partss.PositionPic2,
            barcodeImg: partss.Barcode,
            price: partss.Price,            
            description: partss.Description, 
            note: partss.Note
        })
    ));
}