import { Suspense, lazy, useState } from "react";
import Loader from "./components/Loader";
import styles from "./App.module.css";

// Importing the required images
import hotelImage1 from "./images/hotel-image-1.png";
import hotelImage2 from "./images/hotel-image-2.png";
import hotelImage3 from "./images/hotel-image-3.png";

const SortLayout = lazy(() => import("./components/SortLayout"));
const HotelCard = lazy(() => import("./components/HotelCard"));

// Data for the hotel cards
const data = [
  {
    image: hotelImage1,
    name: "Iberostar Grand Salome",
    location: "Costa Adeje,Tenerife",
    rating: 5,
    accomodation: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    availability: {
      date: "3rd July 2019",
      noOfDays: 7,
    },
    departingFrom: "East Midlands",
    price: 1136.5,
    overview:
      "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking foraholiday full of sport,sun and sea.",
  },
  {
    image: hotelImage2,
    name: "Aguamarina Golf Hotel",
    location: "Costa Adeje,Tenerife",
    rating: 4,
    accomodation: {
      adults: 2,
      children: 1,
      infants: 0,
    },
    availability: {
      date: "27th May 2019",
      noOfDays: 7,
    },
    departingFrom: "Liverpool",
    price: 696.8,
    overview:
      "The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking foraholiday full of sport,sun and sea.",
  },
  {
    image: hotelImage3,
    name: "Las Piramides Resort",
    location: "Costa Adeje,Tenerife",
    rating: 3,
    accomodation: {
      adults: 2,
      children: 2,
      infants: 0,
    },
    availability: {
      date: "3rd July 2019",
      noOfDays: 7,
    },
    departingFrom: "Manchester",
    price: 996.99,
    overview:
      "The Las Piramides Resort has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking foraholiday full of sport,sun and sea.",
  },
];

function App() {
  // initializing sort state with default sort by value as price. based on which filters work
  const [sortBy, setSortBy] = useState({ key: "price", dir: 1 });

  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.bg}>
        <div className={styles.container}>
          {/* Left section - sort layout */}
          <section className={styles.filter_section}>
            <SortLayout sortBy={sortBy} setSortBy={setSortBy} />
          </section>

          {/* Right section - hotel cards*/}
          <section className={styles.hotel_section}>
            {/* mapping through the hotel lists with sorted by price by default */}
            {data
              .sort((a, b) =>
                a[sortBy.key] < b[sortBy.key] ? sortBy.dir : -sortBy.dir
              )
              .map((hotelData, i) => (
                <HotelCard key={i} hotelData={hotelData} />
              ))}
          </section>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
