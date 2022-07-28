import useUser from '../../hooks/use-user';
import User from './user';
import Suggestion from './suggestion';

const Sidebar = () => {
    const { user: {fullName, username, userId} } = useUser();
    
    return (
        <div className='p-4'>
            <User />
            <Suggestion />
        </div>
    )
};

export default Sidebar;
