import ContainerRow from "../Bootstrap/ContainerRow";

const E404 = () => {
  return (
    <ContainerRow className="my-4 GitHubID">
      <div className="col-12 text-center">
        <h2 className="display-4">Error 404!</h2>
        <img
          src="https://i.ibb.co/YF3x6w9j/image.png"
          alt="Error 404"
          className="my-4"
        />
      </div>
    </ContainerRow>
  );
};

export default E404;
