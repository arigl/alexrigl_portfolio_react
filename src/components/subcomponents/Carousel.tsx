import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from '../data/projectData';

interface CarouselProps {
  currentProject: number;
}
function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

export default class Carousel extends Component<CarouselProps> {
  sliderRef: Slider | null = null;

  componentDidUpdate(prevProps: CarouselProps) {
    if (prevProps.currentProject !== this.props.currentProject && this.sliderRef) {
      // Go to the first slide when currentProject changes
      this.sliderRef.slickGoTo(0);
    }
  }
  render() {
    const { currentProject } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
    };
    return (
      <div className=''>
        <Slider ref={(slider) => (this.sliderRef = slider)} {...settings}>
            {projectData[currentProject].slideImages.map((imageUrl, index) => (
                <div key={index}>
                <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    }}
                />
                </div>
            ))}
        </Slider>
      </div>
    );
  }
}
