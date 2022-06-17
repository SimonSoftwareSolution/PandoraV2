import Carousel from "better-react-carousel"
import drache from '../images/drache.jpeg'
import peeps from '../images/peeps.jpeg'
import zeltplatz from '../images/zeltplatz.jpeg'

export default function Bildergalerie() {
    return (
        <div className='container App'>
          <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">Location</h5>
              <Carousel cols={1} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img className="img-fluid" width="100%" src={zeltplatz} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid" width="100%" src={drache} alt=''/>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
        <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">Vibe</h5>
              <Carousel cols={2} rows={1} gap={10} loop>
              <Carousel.Item>
                <img className="img-fluid" width="100%" src={peeps} alt='' />
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
        </div>
      );        

  }