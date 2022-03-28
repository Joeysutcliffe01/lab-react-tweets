function User(props) {
  return (
    <span className="user">
      <span>{props.userData.name}</span>
      <span className="handle">{props.userData.handle}</span>
    </span>
  );
}

export default User;
