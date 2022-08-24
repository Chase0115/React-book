import { useParams } from 'react-router-dom';

const Article = () => {
  const params = useParams();
  const id = parseInt(params.id, 10);
  return (
    <div>
      <h2>Article {id} </h2>
    </div>
  )
}

export default Article;