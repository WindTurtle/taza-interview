import articleApi from "api/article";
import { useEffect, useState } from "react";

export default function useArticleDetail(articleId) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await articleApi.get(articleId);
        setArticle(result);
      } catch (err) {
        console.log("Failed to fetch article", err);
      }
    };
    fetchData();
    setLoading(false);
  }, [articleId]);

  return { article, loading };
}
