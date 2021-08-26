import React from "react";
import axios from "axios";

class Lodash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      name: "",
      description: "",
      homepage: "",
      keywords: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://libraries.io/api/npm/lodash?api_key=ee71123bb7a1958beab2c188e3c9a842"
      )
      .then((res) => {
        // handle success
        const { platform, name, description, homepage, keywords } = res.data;
        this.setState({
          platform,
          name,
          description,
          homepage,
          keywords,
        });
        console.log(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Lodash</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Lodash;
