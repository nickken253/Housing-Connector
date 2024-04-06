import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const handleSubmit = (testdata: any) => {
    console.log(testdata);
    const dbRef = ref(database, 'test_data'); // Firebase creates this automatically

    let data = {
        testData: testdata
    }
    try {
        push(dbRef, data);
        console.log("ref", dbRef);
        console.log("data", data);

        // console.log("Data added successfully")
    } catch(err) {
        console.log(err)
    }
}

export default handleSubmit;