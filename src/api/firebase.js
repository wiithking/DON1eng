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
import { getDatabase, ref, set, get, remove, child } from "firebase/database";

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
        price: parseInt(part.price),
        needQty: parseInt(part.needQty),
        recommendedReplacementCycle: parseInt(part.recommendedReplacementCycle)
    })
}



export async function addTest(testData) {
    // const id = uuid();
    return set(ref(database, `test/${testData.testId}`), {
        ...testData
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

export async function getTest() {
    return get(ref(database, 'mData'))
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

export async function getTest2() {
    const dbRef = ref(getDatabase());
    get(child (dbRef, 'mData')).then( (snapshot) => {
        (snapshot.exists()) ? console.log(snapshot.val()) : console.log('No data available');
    }).catch( (error) => {
        console.error(error);
    })
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