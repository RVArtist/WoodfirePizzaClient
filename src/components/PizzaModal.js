import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function PizzaModal(props) {


  return (
    <>
      <MDBModal show={props.basicModal} setShow={props.setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{props.pizzaName}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img src={props.image} alt={props.name} style={{height:"300px", width:"300px"}} />
              <p>{props.description}</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={props.toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}