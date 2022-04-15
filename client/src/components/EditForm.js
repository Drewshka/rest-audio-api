import { Form, Button } from "react-bootstrap";
import { AudioContext } from "../contexts/AudioContext";
import { useContext, useState } from "react";
// import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ theSong }) => {
  const id = theSong.id;

  const [title, setTitle] = useState(theSong.title);
  const [artist, setArtist] = useState(theSong.artist);
  //   const [address, setAddress] = useState(theSong.address);
  //   const [phone, setPhone] = useState(theSong.phone);

  const { updateSong } = useContext(AudioContext);

  const updatedSong = { id, title, artist };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(id, updatedSong);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title *"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="artist"
          placeholder="Artist *"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" block="true">
        Edit Song
      </Button>
    </Form>
  );
};

export default EditForm;
