import { Component } from "react";
import { Link } from "react-router-dom";
// import "./EditAudioFile.scss";
// import arrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
// import error from "../../assets/icons/error-24px.svg";
import error from "../assets/errorIcon.svg";
// import { API_URL } from "../../config";

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

export default class EditAudioFile extends Component {
  state = {
    title: "",
    titleValid: true,
    artist: "",
    artistValid: true,
  };

  componentDidMount() {
    axios
      .get(`${audioURL}`)
      .then((response) => {
        let foundId = response.data.find((song) => {
          return song.id === this.props.match.params.id;
        });
        return axios.get(`${audioURL}/${foundId.id}`).then((response) => {
          const { title, artist } = response.data;
          // const { position, phone, email } = response.data.contact;
          this.setState({
            title,
            artist,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, artist } = this.state;

    if (!(title && artist)) {
      alert("Please fill out all fields in the form");
      return;
    }

    axios.get(`${audioURL}`).then(async (response) => {
      let foundId = response.data.find((song) => {
        return song.id === this.props.match.params.id;
      });
      return axios
        .patch(`${{ audioURL }}/${foundId.id}`, {
          title,
          artist,
        })
        .then(() => {
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <form className="edit-warehouse-form" onSubmit={this.handleSubmit}>
        <h1 className="edit-warehouse-form__title">
          {/* <Link to="/warehouses/">
            <img
              className="edit-warehouse-form__arrow"
              src={arrow}
              alt="Back arrow"
            />
          </Link> */}
          Edit Audio
        </h1>
        <section className="edit-warehouse-form__main">
          <article className="edit-warehouse-form__details edit-warehouse-form__details-1">
            <h2 className="edit-warehouse-form__subtitle">Warehouse Details</h2>
            <label className="edit-warehouse-form__label">
              Title
              <input
                className={
                  this.state.titleValid
                    ? "edit-warehouse-form__field"
                    : "edit-warehouse-form__field edit-warehouse-form__field--error"
                }
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}></input>
              {!this.state.titleValid && (
                <p className="edit-warehouse-form__error">
                  <img
                    className="edit-warehouse-form__error__icon"
                    src={error}
                    alt="error icon"
                  />
                  This field is required
                </p>
              )}
            </label>
            <label className="edit-warehouse-form__label">
              Artist
              <input
                className={
                  this.state.artistValid
                    ? "edit-warehouse-form__field"
                    : "edit-warehouse-form__field edit-warehouse-form__field--error"
                }
                type="text"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}></input>
              {!this.state.artistValid && (
                <p className="edit-warehouse-form__error">
                  <img
                    className="edit-warehouse-form__error__icon"
                    src={error}
                    alt="error icon"
                  />
                  This field is required
                </p>
              )}
            </label>
          </article>
        </section>
        <section className="edit-warehouse-form__buttons">
          <Link to="/">
            <button className="edit-warehouse-form__cancel">Cancel</button>
          </Link>
          <button className="edit-warehouse-form__submit">Save</button>
        </section>
      </form>
    );
  }
}
