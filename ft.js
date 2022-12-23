import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DragDrop() {
   
    return (
        <div>
        <h1 className="mt-5 text-center text-uppercase text-info">Hierarchy Chart</h1>
    <Card className="my-5 w-25 mx-auto">
                <Card.Body className="text-center fs-5">
                    <Card.Text className="fw-bold">Mark Hill</Card.Text>
                    <Card.Text>CEO</Card.Text>
                </Card.Body>
                
                
            </Card>
            

    <Row className="text-center mx-auto">
                <Col>
                    <Card.Body className="text-center fs-5 border w-75 mt-5  mx-auto">
                    <Card.Text className="fw-bold">Joe Linux</Card.Text>
                    <Card.Text>Chief Technology officer</Card.Text>
                </Card.Body>
                <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">Ron Blomquist</Card.Text>
                    <Card.Text>Chief Information Security officer</Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">Michael Rubin</Card.Text>
                    <Card.Text>Chief Innovation officer</Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                <Card.Body className="text-center fs-5 border w-75 mt-5  mx-auto">
                    <Card.Text className="fw-bold">Linda May</Card.Text>
                    <Card.Text>Chief Business officer</Card.Text>
                </Card.Body>
                <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">Alice Lopez</Card.Text>
                    <Card.Text>Chief communication officer</Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">Mary Johnson</Card.Text>
                    <Card.Text>Chief Brand officer</Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">kirk Douglas</Card.Text>
                    <Card.Text>Chief Business Developer officer</Card.Text>
                </Card.Body>
                    </Col>
                    
                
                <Col><Card.Body className="text-center fs-5 border w-75 mt-5  mx-auto">
                    <Card.Text className="fw-bold">John Green</Card.Text>
                    <Card.Text>Accounting</Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center fs-5 border w-75 mt-3  mx-auto">
                    <Card.Text className="fw-bold">Erica Reel</Card.Text>
                    <Card.Text>Accounting</Card.Text>
                </Card.Body></Col>
                </Row>
        </div>


    );
}

export default DragDrop;