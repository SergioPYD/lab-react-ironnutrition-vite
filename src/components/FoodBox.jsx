import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function FoodBox(props) {
  const { name, calories, image, servings } = props.oneFood;
  const totalCalories = calories * servings;

  const handleDeleteFood = (index) => {
    let clone = JSON.parse(JSON.stringify(props.foodToRender));
    clone.splice(index, 1);
    props.setFoodToRender(clone);
  };
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img
        variant="top"
        src={image}
        width={"200px"}
        height={"150px"}
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Calories: {calories}</Card.Text>
        <Card.Text>Servings {servings}</Card.Text>
        <Card.Text>
          <b>Total Calories: {totalCalories}</b> kcal
        </Card.Text>
        <Button variant="primary" onClick={() => handleDeleteFood(props.index)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
