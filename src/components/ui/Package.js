import React from "react";
import axios from "axios";

export default class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      name: "",
      description: "",
      homepage: "",
      license: "",
      keywords: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://libraries.io/api/npm/${this.props.project}?api_key=ee71123bb7a1958beab2c188e3c9a842`
      )
      .then((res) => {
        // handle success
        const {
          platform,
          name,
          description,
          homepage,
          keywords,
          licenses,
        } = res.data;
        this.setState({
          platform,
          name,
          description,
          homepage,
          keywords,
          licenses,
        });
        console.log(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    const {
      platform,
      name,
      description,
      homepage,
      keywords,
      licenses,
    } = this.state;

    function getKeyWordString(words) {
      return words.map((word, i, arr) => {
        // if you are not on the last word
        if (i < arr.length - 1) {
          return word + ", ";
        }
        //  on the last word in the array
        else return word;
      });
    }

    return (
      <div className="">
        <h1 className="mt-5 mb-4">
          {platform} / {name}
        </h1>
        <p>{description}</p>
        <p>Licenses:{licenses}</p>

        <p>Keywords: {getKeyWordString(keywords)}</p>
        <a href={homepage} target="blank" rel="noopener noreferrer">
          {homepage}
        </a>
      </div>
    );
  }
}
