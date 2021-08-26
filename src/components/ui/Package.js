import React from "react";
import axios from "axios";
import { safelyParseJson, getKeyWordString } from "../../utils/helpers";
import { Link } from "react-router-dom";

export default class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      name: "",
      description: "",
      homepage: "",
      license: "",
      versions: [],
      keywords: [],
      dependencies: [],
      isShowingVersions: false,
      isShowingDependencies: false,
    };
  }
  componentDidMount() {
    this.getProject();
    this.getPlatform();
    axios
      .get(
        `https://libraries.io/api/${this.getPlatform()}/${this.getProject()}?api_key=ee71123bb7a1958beab2c188e3c9a842`
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
          versions,
        } = res.data;
        this.setState({
          platform,
          name,
          description,
          homepage,
          keywords,
          licenses,
          versions,
        });
        console.log(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    axios
      .get(
        `https://libraries.io/api/${this.getPlatform()}/${this.getProject()}/latest/dependencies?api_key=ee71123bb7a1958beab2c188e3c9a842`
      )
      .then((res) => {
        // handle success
        const { dependencies } = res.data;
        this.setState({
          dependencies,
        });
        console.log(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  handleToggle(e) {
    const value = safelyParseJson(e.target.value); // "true" will turn into true
    this.setState({ [e.target.name]: value });
  }

  getPlatform() {
    const pathname = window.location.pathname;
    const platform = pathname.slice(
      pathname.indexOf("/") + 1,
      pathname.lastIndexOf("/")
    );

    return platform;
  }

  getProject() {
    const pathname = window.location.pathname;
    const project = pathname.slice(pathname.lastIndexOf("/") + 1);
    return project;
  }

  render() {
    const {
      platform,
      name,
      description,
      homepage,
      keywords,
      licenses,
      versions,
      dependencies,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 mb-4">
              {platform} / {name}
            </h1>
            <p>{description}</p>
            <p>Licenses:{licenses}</p>

            <p>Keywords: {getKeyWordString(keywords)}</p>

            <a href={homepage} target="blank" rel="noopener noreferrer">
              {homepage}
            </a>

            <div className="custom-control custom-checkbox my-3">
              <input
                type="checkbox"
                className="custom-control-input"
                name="isShowingVersions"
                id="showVersions"
                checked={this.state.isShowingVersions}
                value={!this.state.isShowingVersions}
                onChange={(e) => {
                  this.handleToggle(e);
                }}
              />
              <label className="custom-control-label" htmlFor="showVersions">
                Show versions
              </label>
            </div>

            {this.state.isShowingVersions &&
              versions.map((version, i) => {
                return (
                  <p key={i}>
                    {version.number} {version.published_at}
                  </p>
                );
              })}

            <div className="custom-control custom-checkbox my-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="showDependencies"
                name="isShowingDependencies"
                checked={this.state.isShowingDependencies}
                value={!this.state.isShowingDependencies}
                onChange={(e) => {
                  this.handleToggle(e);
                }}
              />
              <label
                className="custom-control-label"
                htmlFor="showDependencies"
              >
                Show dependencies
              </label>
            </div>

            {this.state.isShowingDependencies &&
              dependencies.map((dependency, i) => {
                return (
                  <p key={i}>
                    <Link
                      to={`/${dependency.platform.toLowerCase()}/${dependency.project_name.toLowerCase()}/reload`}
                    >
                      {dependency.project_name}
                    </Link>
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
