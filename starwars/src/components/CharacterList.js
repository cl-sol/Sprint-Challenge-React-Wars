import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const CharacterList = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.species}</CardSubtitle>
                <CardText>Status {props.status}</CardText>
                </CardBody>
            </Card>
    </div>
    )
}

export default CharacterList;