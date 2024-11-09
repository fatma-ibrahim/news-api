import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Technology = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=04476306a733476cbeed34637efe0ccb"
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openDetailsPage = (article) => {
    navigate("/details", { state: { article, from: "/technology" } });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {currentArticles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={article.urlToImage || "../../../Default-img.webp"}
                  className="card-img-top"
                  alt={article.title || "No Image Available"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {article.author || "Unknown Author"}
                  </h5>
                  <p className="card-text">
                    {article.description ||
                      "No description available for this news."}
                  </p>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    Source
                  </button>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => openDetailsPage(article)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-secondary mx-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(articles.length / articlesPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Technology;
