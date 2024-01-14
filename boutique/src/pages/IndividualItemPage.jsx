import { useParams } from "react-router-dom";
import "../styles/IndividualItemPage.css";

const IndividualItem = ({ items }) => {
  const { id } = useParams();

  const selectedItem = items.find((item) => item.id.toString() === id);

  return (
    <>
      {selectedItem ? (
        <div className="individual-item-container">
          <h2 className="individual-title">{selectedItem.title}</h2>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="individual-img"
          />
          <p className="individual-description">
            Description: {selectedItem.description}
          </p>
          <p className="individual-price">Price: ${selectedItem.price}</p>
          <p className="individual-rating">
            Rating: {selectedItem.rating.rate} ({selectedItem.rating.count}{" "}
            reviews)
          </p>
        </div>
      ) : (
        <div>No item found with the given ID</div>
      )}
    </>
  );
};

export default IndividualItem;
