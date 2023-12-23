import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Profile_Modal({modal, toggle}) {
    const [paramsData] = useSearchParams()

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal Title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input id="exampleName" value={paramsData.get("name")} disabled={true} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAge">Age</Label>
                            <Input id="exampleAge" value={paramsData.get("age")} disabled={true} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input id="exampleCity" value={paramsData.get("city")} disabled={true} />
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
