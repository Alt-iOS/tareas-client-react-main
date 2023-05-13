import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from "react";

const ProductUpdateForm = ({ onClickFn, oldProduct }) => {
    const [id, setId] = useState(oldProduct.id)
    const [name, setName] = useState(oldProduct.nombre)
    const [descripcion, setDescripcion] = useState(oldProduct.descripcion)
    const [precio, setPrecio] = useState(oldProduct.precio)

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || descripcion === "" || precio === "") {
            alert("You cant left any empty spaces")
        } else {
            let data = {
                id: id,
                _id: oldProduct._id,
                name: name,
                descripcion: descripcion,
                precio: precio,
            }
            onClickFn(data)
        }
    }

    return (
        <Container>
            <Row>
                <Col md={6}  >
                    <Form onSubmit={onEnviar}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(txt) => setName(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Share your name with us
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descripcion">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" placeholder="descripcion" value={descripcion} onChange={(txt) => setDescripcion(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="precio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="precio" value={precio} onChange={(txt) => setPrecio(txt.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>



    )
}

export default ProductUpdateForm;