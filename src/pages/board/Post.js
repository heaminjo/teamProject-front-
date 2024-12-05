import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostWrite from "../../Component/Post/PostWrite";

const Post = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [categorySel, setCategorySel] = useState("");

  useEffect(() => {
    switch (category) {
      case "common":
        setCategorySel("common");
        break;
      case "question":
        setCategorySel("question");
        break;
      default:
        navigate("/notfound");
        break;
    }
  }, [category]);
  return <PostWrite categorySel={category} />;
};
export default Post;
