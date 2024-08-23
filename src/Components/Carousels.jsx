import bannar1 from '../../images/Basket-Cover-Photo-1.jpg'
import bannar2 from '../../images/Basket-Cover-Photo-2.jpg'
import bannar3 from '../../images/Basket-Cover-Photo-3.jpg'
import bannar4 from '../../images/Basket-Cover-Photo-4.jpg'

const Carousels = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src={bannar1}
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={bannar2}
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={bannar3}
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={bannar4}
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Carousels;