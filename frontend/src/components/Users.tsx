import { useAppSelector } from '../hooks'

const Users = () => {
    const users = useAppSelector((state) => state.users)
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.exams.length} exams)
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Users