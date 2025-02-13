import React from "react";
import booksApi, {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
} from "../../redux/features/books/booksApi";
import { GetImgUrl } from "../../utils/Getimgurl";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../../redux/features/cart/cartSlice";

function SingleBook() {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Loading book data</div>;
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
      <div>
        <div>
          <img
            className="mb-8"
            src={`${GetImgUrl(book.coverImage)}`}
            alt={book.title}
          />
        </div>
      </div>
      <div className="mb-5 ">
        <p className="text-gray-700 mb-2">
          <strong>Author: </strong>
          {book.author || "Admin"}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Published: </strong>
          {new Date(book?.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4 capitalize">
          <strong>Category: </strong>
          {book?.category}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong>
          {book.description}
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(book)}
        className="btn-primary px-6 space-x-1 flex items-center gap-1"
      >
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default SingleBook;
