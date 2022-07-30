import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const User = ({username, fullName}) => {
    !username || !fullName ? (
        <Skeleton count={1} height={64} />
    ): (
        <Link to={`/p/${username}`} className='grid grid-cols-4 gap-4 mb-6 items-center'>
            <div className='flex items-center justify-between col-span-1'></div>
            <img className='rounded-full w-16 flex mr-3' 
            src={`/images/avatars/${username}.jpg`}/>
            alt={`/p/${username} profile`}
        </Link>
    )

};

export default User;

User.propTypes ={
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
};