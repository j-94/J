import React from 'react'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import PopupVideoOne from '../../../components/ui/popup-video/layout-one'
import PopupVideoTwo from '../../../components/ui/popup-video/layout-two'
import ImageOne from '../../../data/images/box-image/video-image-01-570x420.jpg'
import { SectionWrap } from './style'

const PopupVideoArea = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col md={6} className="popup-one">
                        <PopupVideoOne
                            image={ImageOne}
                            video_link="https://www.youtu.be/gs9Eu6Rdfzw"
                        />
                    </Col>
                    <Col md={6}>
                        <PopupVideoTwo
                            image={ImageOne}
                            video_link="https://www.youtu.be/gs9Eu6Rdfzw"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default PopupVideoArea
