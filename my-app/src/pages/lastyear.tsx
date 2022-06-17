import Carousel from "better-react-carousel"
import wald from '../images/wald.jpeg'
import drache from '../images/drache.jpeg'
import peeps from '../images/peeps.jpeg'
import zeltplatz from '../images/zeltplatz.jpeg'
import eindruck1 from '../images/eindruck1.jpg'
import eindruck2 from '../images/eindruck2.jpg'
import eindruck3 from '../images/eindruck3.jpeg'
import eindruck4 from '../images/eindruck4.jpeg'
import eindruck5 from '../images/eindruck5.jpeg'

export default function Bildergalerie() {
    return (
        <div className='container App'>
        <div className="card my-3">
            <img  className="img-fluid" alt="" src={wald}/>
            <div className="card-body">
              <h5 className="card-title">Galerie</h5>
              <Carousel cols={1} rows={1} gap={10} loop>
              <Carousel.Item>
                    <img className="img-fluid" width="100%" src={zeltplatz} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid" width="100%" src={drache} alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid" width="100%" src={eindruck1} alt='' />
                 </Carousel.Item>
                 <Carousel.Item>
                    <img className="img-fluid" width="100%" src={eindruck2} alt='' />
                 </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" width="100%" src={peeps} alt='' />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid" width="100%" src={eindruck4} alt='' />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid" width="100%" src={eindruck5} alt='' />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid" width="100%" src={eindruck3} alt='' />
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
        </div>
      );        

  }