import { Rating } from "@smastrom/react-rating";

function Ratings({ size, value }) {
  return <Rating style={{ maxWidth: size }} value={value} readOnly />;
}

export default Ratings;
