import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();
const id1 ={ id }
console.log(id)
    return (
      <>
      <div className="category-container">
            <h3 className="category-title">New Products</h3>
        </div>
      </>
    );
  }