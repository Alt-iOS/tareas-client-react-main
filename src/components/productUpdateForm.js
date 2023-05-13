import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from "react";
import './style.css';



const ProductUpdateForm = ({ onClickFn, oldProduct }) => {
    const [id, setId] = useState(oldProduct.id)
    const [name, setName] = useState(oldProduct.name)
    const [description, setDescription] = useState(oldProduct.description)
    const [price, setPrice] = useState(oldProduct.price)
    const [_id, set_Id] =useState(oldProduct._id)

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || description === "" || price === "") {
            alert("You cant left any empty spaces")
        } else {
            let data = {
                id: id,
                _id: oldProduct._id,
                name: name,
                description: description,
                price: price,
            }
            onClickFn(data)
        }
    }

    return (
        <div className="container">
            <Container>
                <Row>
                        <Form onSubmit={onEnviar}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(txt) => setName(txt.target.value)} />
                                <Form.Text className="text-muted">
                                    Share your name with us
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="_id">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" placeholder="Id" value={_id} onChange={(txt) => set_Id(txt.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="id">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" placeholder="description" value={description} onChange={(txt) => setDescription(txt.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" placeholder="price" value={price} onChange={(txt) => setPrice(txt.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </Row>
            </Container>
        </div>



    )
}

export default ProductUpdateForm;