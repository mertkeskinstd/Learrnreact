const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">mert gel</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
