import { useEffect, useState } from "react";

// const url = "https://api.github.com/users";

const FetchData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        // console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunc();
  }, []);
  //   const {img}
  //   const { avatar_url, login } = users;
  return (
    <section>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { avatar_url, id, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
