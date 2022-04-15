import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@material-ui/core";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

export default function EditModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    title: "",
    artist: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const id = props.song.id;
    axios
      .put(`${audioURL}/${id}`, data)
      .then((res) => {
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => console.error(err));
  };

  const { title, artist } = data;

  return (
    <div>
      <Button onClick={handleOpen}>Edit Song</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Song
          </Typography>
          <form onSubmit={submit}>
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={title}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={artist}
                  id="filled-basic"
                  label="Artist"
                  variant="outlined"
                  name="artist"
                  type="text"
                  required
                />
              </FormControl>
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
