import React from "react";

function BoxRow({ children }) {
  return <div>{children}</div>;
}
export default function ManageUsersTable({
  users,
  deleteHandler,
  clickUserHandler
}) {
  const usersList = users.map(user => {
    return (
      <tr key={user.id}>
        <td onClick={() => clickUserHandler(user.id)}>{user.name}</td>
        <td onClick={() => clickUserHandler(user.id)}>{user.email}</td>
        <td onClick={() => clickUserHandler(user.id)}>{user.createdDate}</td>
        <td>{user.organization}</td>
        <td>
          <button onClick={() => deleteHandler(user.id)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <BoxRow>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CREATED DATE </th>
            <th>ORGANIZATION</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </BoxRow>
  );
}
