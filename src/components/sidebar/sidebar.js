import useUser from '../../hooks/use-user';
import User from './user';
import Suggestion from './suggestion';

export default function Sidebar() {

    const { user: fullName, username, userId } = useUser();
    
    return (
        <div className='p-4'>

            <User username={username} fullName={fullName}/>
            <Suggestion userId={userId}/>
        </div>
    )
};
// {console.log(data)}
//       {data.map((book) => {
//         console.log(book.authors);
//         return (
//           <Book
//             key={book.id}
//             title={book.title}
//             authors={book.authors}
//             thumbnail={book.imageLinks.thumbnail}
//           />