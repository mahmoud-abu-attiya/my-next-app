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
    <div className="min-h-[60vh]">
      <h1>All Users</h1>
      {users.map((user) => (
        <Link href={"/users/" + user.id} key={user.id}>
          <a>
            <h3 className=" py-3 border-l-2 border-l-blue-600 bg-white py-1 px-4 my-4 hover:border-l-8 hover:border-l-blue-700 hover:shadow transition-all">{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Users;
