import { addDoc, collection } from "@firebase/firestore"
import { firestore } from '../firebase'
 
const handleSubmit = (testdata: any) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    try {
        addDoc(ref, data)
        console.log("ref", ref);
        console.log("data", data);
        
        // console.log("Data added successfully")
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit