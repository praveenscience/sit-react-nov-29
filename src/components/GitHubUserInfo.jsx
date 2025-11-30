const GitHubUserInfo = ({ ...data }) => {
  const { name, login, bio, avatar_url, location, blog } = data;
  return (
    <>
      <h3 className="display-4" hidden>
        GitHub User
      </h3>
      <figure className="text-center">
        <img src={avatar_url} alt={name ?? login} className="img-thumbnail" />
        <figcaption>{name ?? login}</figcaption>
      </figure>
      {location && (
        <p>
          You can connect with <strong>{name ?? login}</strong> at{" "}
          <strong>{location}</strong>.
        </p>
      )}
      {bio && (
        <p>
          {name ?? login} is <strong>{bio}</strong>.
        </p>
      )}
      {blog && (
        <p>
          {name ?? login} writes{" "}
          <a href={blog} rel="noopener noreferrer" target="_blank">
            here
          </a>
          .
        </p>
      )}
    </>
  );
};

export default GitHubUserInfo;
