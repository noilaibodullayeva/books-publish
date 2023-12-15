import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import Img4 from "../images/book-4.jpg.webp";
import Img5 from "../images/book-5.jpg.webp";
import Img6 from "../images/book-6.jpg.webp";

function Corusels() {
    return (
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Img4} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Img5} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Img6} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    )
}

export default Corusels