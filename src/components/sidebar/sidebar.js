import useUser from '../../hooks/use-user'


const Sidebar = () => {
    const { user: {fullName, username, userId} } = useUser();
    console.log('user',user)
    return (
        <div>
            <p>I a the side bar</p>
        </div>
    )
};

export default Sidebar;
