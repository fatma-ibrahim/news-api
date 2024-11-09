import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    return <div>No article details available.</div>;
  }

  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2>{article.title}</h2>
        <img
          src={article.urlToImage || "../../../Default-img.webp"}
          className="img-fluid"
          alt={article.title || "No Image Available"}
        />
        <p className="mt-3">
          {article.content || "No content available for this news."}
        </p>

        <div className="d-flex gap-2 mt-3">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read Full Article
          </a>
          <button className="btn btn-secondary" onClick={goBack}>
            Back to{" "}
            {location.state?.from === "/technology" ? "Technology" : "Science"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
