
import axios from 'axios';

import Container from "./../../components/layouts/Container";
import Card from "../../components/layouts/Card";
import Row from "../../components/layouts/Row";
import Table from "../../components/layout/Table"

//COPIED FROM CREATE, NEED TO BE CHANGED TO RECEIVE THE PATIENTS DATA


function List() {
  return (
    <Container>
        <Row>Casamor, Mar</Row>
        <Row>Torres, Ainara</Row>
        <Row>Buenvaron, Carla</Row>
        <Row>Amigo, Èlia</Row>
    </Container>
  );
};

export default List;