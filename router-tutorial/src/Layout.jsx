import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const goArticles = () => {
    navigate('/Articles', {replace: true})
  }

  const goForward = () => {
    navigate(1)
  }
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
        <button onClick={goBack}>Back</button>
        <button onClick={goArticles}>Articles</button>
        <button onClick={goForward}>Forward</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;