
import { Link } from 'react-router-dom';
import './mainsource.css';

const Mainsource = ({products}) => {
  return (
    <div className="interier_container">
      <div className="interier">
        <div className="sourcenow_box">
          <span>Home and <br/> outdoor</span>
          <button>Source now </button>
        </div>
      </div>

      <div className="product">
        {products.map((product) => (
          <Link to={`/productdetal/${product.id}`}  style={{ textDecoration: 'none' }} className="productbox_container">
            <div className="prise_container">
              <span className="description" >{product.model} </span>
              <span className="prises">from <br/> USD {product.price}</span>
            </div>
            <div className='product_image_img'>
              <img src={product.images} alt={product.name} />
            </div>
          </Link>
        ))}
        {products.map((product) => (
          <div
            className="productbox_container"
          >
            <div className="prise_container">
              <span className="description">{product.model}</span>
              <span className="prises">from <br/> USD {product.price}</span>
            </div>
            <div className='product_image_img'>
              <img src={product.images} alt={product.name} />
            </div>

          </div>
        ))}
        {products.map((product) => (
          <div
            className="productbox_container"
          >
            <div className="prise_container">
              <span className="description">{product.model}</span>
              <span className="prises">from <br/> USD {product.price}</span>
            </div>
            <div className='product_image_img'>
              <img src={product.images} alt={product.name} />
            </div>

          </div>
        ))}
      </div>
      <div className="sourcenow2_btn">
        <button>source now</button>
      </div>
    </div>
  );
};

export default Mainsource;
