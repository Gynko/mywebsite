import { Link } from "react-router-dom";

function KnowledgeBase() {
  return (
    <div>
      <Link to="/knowledge-base/Javascript">Javascript</Link>
      <Link to="/knowledge-base/Css">Css</Link>
      <Link to="/knowledge-base/React">React</Link>
    </div>
  );
}

export default KnowledgeBase;
