import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5 mb-4">My Favorite NPM Packages</h1>
          <p>
            <Link to={`/npm/lodash`}>Lodash</Link>
          </p>
          <p>
            <Link to="/npm/axios">Axios</Link>
          </p>
          <p>
            <Link to="/npm/uuid">Uuid</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
