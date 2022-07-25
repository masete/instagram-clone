import { firebase, fieldValue } from '../lib/firebase';

export async function doesUserNameExist(username){
    const result = await firebase
    .firestore ()
    .collection('user')
    .where('username','==', username)
    .get();

    console.log(result)

    return result.docs.length > 0;
}