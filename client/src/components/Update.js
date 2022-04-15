import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function Update(props) {
  const [audioFiles, setAudioFiles] = useState([]);
  // const [audioList, setAudioList] = useState([]);
  const [data, setData] = useState({
    title: "",
    artist: "",
  });

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   Axios.get(audioURL + id)
  //     .then((res) => {
  //       // console.log(res.data);
  //       const myData = [...audioList, res.data];
  //       setData(myData);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(audioURL);
      setAudioFiles(results.data);
    }
    getResults();
  }, []);
  console.log(audioFiles);

  const submit = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    Axios.put(audioURL + id, data)
      .then((res) => {
        console.log(res.data);
        props.history.push("/");
        // const myData = [...audioList, res.data];
        // setAudioList(myData);
      })
      .catch((err) => console.error(err));
  };

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  //   function handle

  //   const Update = (id) => {
  //     console.log(id);
  //     // window.location.reload(false);
  //   };

  return (
    <div className="Update">
      <form onSubmit={(e) => submit(e)}>
        <div className="formGroup">
          <label htmlFor="categoryName">Category Title</label>
          <input
            onChange={(e) => handle(e)}
            value={data.title}
            type="text"
            name="title"></input>
        </div>

        <div className="formGroup">
          <label htmlFor="artist">Category Artist</label>
          <input
            onChange={(e) => handle(e)}
            value={data.artist}
            type="text"
            name="artist"></input>
        </div>
      </form>
    </div>
  );
}

export default Update;
