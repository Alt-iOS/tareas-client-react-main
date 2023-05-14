import { Form, Container, Row, Button } from 'react-bootstrap';
import { useState } from "react";
import './style.css';

const ProductUpdateForm = ({ onClickFn, oldProduct }) => {
    const [id, setId] = useState(oldProduct.id)
    const [name, setName] = useState(oldProduct.name)
    const [description, setDescription] = useState(oldProduct.description)
    const [price, setPrice] = useState(oldProduct.price)

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
        <Container named="container">
            <Row>
                <Form onSubmit={onEnviar}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="mb2"> NOMBRE: </Form.Label>
                        <Form.Control type="text" placeholder="Escribe tu nombre" value={name} onChange={(txt) => setName(txt.target.value)} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label className="mb2">ID:</Form.Label>
                        <Form.Control type="text" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label className="mb2">DESCRIPCIÓN:</Form.Label>
                        <Form.Control type="text" placeholder="Describe el producto" value={description} onChange={(txt) => setDescription(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label className="mb2">PRECIO:</Form.Label>
                        <Form.Control type="number" placeholder="Indica el precio sin IVA" value={price} onChange={(txt) => setPrice(txt.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default ProductUpdateForm;