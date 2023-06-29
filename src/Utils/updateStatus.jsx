import { db } from '../config/Firebase'
import {collection,getDocs, updateDoc, doc} from "firebase/firestore"
export const updateStatus=async(email)=>{
    const data =await getDocs(collection(db,"Users"))
    const users=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
    const FilteredData=users.filter((item)=>{
        return item.email===email;
    })
    updateDoc(doc(db,"Users",FilteredData[0].id),{
      status:true
    })
}
export const updateStatusFalse=async(email)=>{
    const data =await getDocs(collection(db,"Users"))
    const users=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
    const FilteredData=users.filter((item)=>{
        return item.email===email;
    })
    updateDoc(doc(db,"Users",FilteredData[0].id),{
      status:false
    })
}