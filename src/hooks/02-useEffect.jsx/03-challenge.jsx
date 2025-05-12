import { useEffect, useState } from "react";
const url = "https://api.github.com/users";
export const UseEffectChallenge = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>fetch github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
