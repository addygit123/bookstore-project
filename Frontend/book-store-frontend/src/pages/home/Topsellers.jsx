import React, { useEffect, useState } from "react";
import Bookcard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const Topsellers = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("Choose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();
  console.log(books);

  const filteredBooks =
    SelectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === SelectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="test-3xl font-semibold mb-6">Top Sellers</h2>
      {/*Category Filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => SetSelectedCategory(e.target.value)}
          className="border bg-[#EAEAEA] border-gray-300 rounnded-md px-4 py-2 focus:outline-none"
          name="category"
          id="category"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={([Pagination], [Navigation])}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <Bookcard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Topsellers;
