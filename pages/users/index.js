import styles from "../../styles/Users.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  console.log(users);

  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user) => (
        <Link href={"/users/" + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Users;
