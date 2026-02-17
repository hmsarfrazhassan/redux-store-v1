import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../actions/userActions";

function UserForm() {
  const [user, setUser] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.trim()) return;

    dispatch(addUser({ id: Date.now(), name: user }));

    setUser("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="h-10 w-full ring-2 rounded-sm px-2 mb-2"
        />

        <button
          type="submit"
          className="h-10 w-full bg-amber-100 ring-2 cursor-pointer active:bg-amber-600 "
        >
          Add user
        </button>
      </form>

      <table className="w-full mt-10">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td
                className="cursor-pointer"
                onClick={() => dispatch(deleteUser(u.id))}
              >
                ❌
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserForm;
