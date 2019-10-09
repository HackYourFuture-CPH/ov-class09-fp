import React from "react";

function BoxHeader({ title }) {
  return <h2>{title}</h2>;
}
function Box({ title, data }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
}
function BoxRow({ children }) {
  return <div>{children}</div>;
}

export default function UserDetail({
  selectedUser,
  handleChange,
  handleSubmit
}) {
  return (
    <div>
      <BoxRow>
        <BoxHeader title="User settings" />
        <Box title="Name" />

        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            name="userName"
            placeholder="[user name]"
            onChange={e => handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>

        <Box title="Email" data={selectedUser.email} />
      </BoxRow>
      <BoxRow>
        <Box title="Created Date" data={selectedUser.createdDate} />
      </BoxRow>
    </div>
  );
}
