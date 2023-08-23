import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

export default function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingInput, setServingInput] = useState(0);

  const [show, setShow] = useState(false);

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };
  const handleServingChange = (event) => {
    setServingInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (
      nameInput === "" ||
      imageInput === "" ||
      caloriesInput === 0 ||
      servingInput === 0
    ) {
      setShow(true);
      return;
    }

    let newFood = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingInput
    }

    let clone = JSON.parse(JSON.stringify(props.foodToRender))
    clone.unshift(newFood)
    props.setFoodToRender(clone)
    props.setAllFood(clone)


  };

  return (
    <div>
      <h4>Agregar un producto</h4>

      <Form onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="name">Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleNameChange}
            value={nameInput}
          />
          <Form.Text className="text-muted">
            Añade el nombre de tu producto
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="image">Imagen</Form.Label>
          <Form.Control
            type="text"
            name="image"
            onChange={handleImageChange}
            value={imageInput}
          />
          <Form.Text className="text-muted">Añade una foto</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="calories">Calories</Form.Label>
          <Form.Control
            type="number"
            name="calories"
            onChange={handleCaloriesChange}
            value={caloriesInput}
          />
          <Form.Text className="text-muted">Añade las calorías</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="servings">Total</Form.Label>
          <Form.Control
            type="number"
            name="servings"
            onChange={handleServingChange}
            value={servingInput}
          />
          <Form.Text className="text-muted">
            Total de productos añadidos
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>

        <br />

        <Row
          className="d-flex justify-content-center"
          style={{ margin: "20px" }}
        >
          <Col xs={6} className="d-flex justify-content-center">
            <Toast
              bg="danger"
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">CUIDADO</strong>
              </Toast.Header>
              <Toast.Body>No dejes los campos vacios</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
