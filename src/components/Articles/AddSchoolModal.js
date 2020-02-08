import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Label, Input, Textarea } from "@rebass/forms";

const AddSchoolModal = ({ showModal, handleClose, submit }) => {
  const [values, setValues] = useState({
    title: "",
    subtitle: "",
    sourceUrl: "",
    imgUrl: "",
    body: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    submit(values);
    setValues({ title: "", subtitle: "", sourceUrl: "", imgUrl: "", body: "" });
  };

  return (
    <Modal size="lg" centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post New Article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Label htmlFor="title" py={2}>
          Title
        </Label>
        <Input
          id="title"
          name="title"
          type="title"
          value={values.title}
          onChange={handleInputChange}
        />

        <Label htmlFor="subtitle" py={2}>
          Subtitle
        </Label>
        <Input
          id="subtitle"
          name="subtitle"
          type="subtitle"
          value={values.subtitle}
          onChange={handleInputChange}
        />

        <Label htmlFor="sourceUrl" py={2}>
          Source
        </Label>
        <Input
          id="sourceUrl"
          name="sourceUrl"
          type="sourceUrl"
          value={values.sourceUrl}
          onChange={handleInputChange}
        />
        <Label htmlFor="body" py={2}>
          Body
        </Label>
        <Textarea
          id="body"
          name="body"
          type="body"
          value={values.body}
          onChange={handleInputChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Publish
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSchoolModal;
