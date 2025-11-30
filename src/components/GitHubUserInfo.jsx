const GitHubUserInfo = ({ ...data }) => {
  const { name, login, avatar_url } = data;
  return (
    <>
      <h3 className="display-4">GitHub User</h3>
      <figure className="text-center">
        <img src={avatar_url} alt={name ?? login} className="img-thumbnail" />
        <figcaption>{name ?? login}</figcaption>
      </figure>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </>
  );
};

export default GitHubUserInfo;
