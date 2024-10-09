import { Button, Card, Row, Col } from 'react-bootstrap';

const Trendings = [
  {
    img: "img/imgg/3.png",
    title: "Used 2019 Audi S4 Premium Plus",
    miles: "11,475 Miles",
    transmission: "AWD.",
    cylinder: "4-Cylinder Turbo",
    price: "$41,400"
  },
  {
    img: "img/imgg/2.png",
    title: "Used 2019 Audi S4 Premium Plus",
    miles: "11,475 Miles",
    transmission: "AWD.",
    cylinder: "4-Cylinder Turbo",
    price: "$41,400"
  },
  {
    img: "img/imgg/1.png",
    title: "Used 2019 Audi S4 Premium Plus",
    miles: "11,475 Miles",
    transmission: "AWD.",
    cylinder: "4-Cylinder Turbo",
    price: "$41,400"
  }
];

export const Trending = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold Trending-Header">Trending Near You</h1>
        <Row className="d-flex justify-content-center align-items-center">

          {Trendings.map(({ img, title, cylinder, miles, transmission, price }, index) => (
            <Col key={index}>

              <Card style={{ width:"20rem", border:"none" }}>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="opacity-50">{miles}</Card.Text>
                  <Card.Text className="opacity-500 card-text">{cylinder} • {transmission}</Card.Text>
                  <div className="d-flex flex-row gap-3">
                    <Button  className="fw-bold price-btn">{price}</Button>
                    <Button  className="fw-bold Bestseller">Bestseller</Button>
                  </div>
                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
