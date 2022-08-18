import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import styles from "./HotelCard.module.css";

const HotelCard = ({ hotelData }) => {
  const [expand, setExpand] = useState(false);

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section className={styles.card}>
      <main className={styles.info_container}>
        <section
          className={styles.image_container}
          style={{ backgroundImage: `url(${hotelData?.image})` }}
        >
          <img src={hotelData?.image} alt="hotel_image" />
          <div
            className={styles.read_more_btn}
            onClick={() => setExpand(!expand)}
          >
            <span>
              <b>Read {expand ? "less" : "more"}</b> about this hotel
            </span>{" "}
            <FaAngleRight
              className={`${styles.see_more_icon} ${
                expand ? styles.rotate : null
              }`}
            />
          </div>
        </section>
        <aside className={styles.content_container}>
          <h2 className={styles.name_text}>{hotelData?.name}</h2>
          <p className={styles.location_text}>{hotelData?.location}</p>
          <div className={styles.rating_container}>
            {Array(hotelData?.rating)
              .fill()
              .map((_, i) => (
                <AiFillStar key={i} className={styles.rating} />
              ))}
          </div>
          <div className={styles.info_texts}>
            <p>
              <b>{hotelData?.accomodation?.adults}</b>{" "}
              {hotelData?.accomodation?.adults > 1 ? `Adults` : `Adult`},{" "}
              <b>{hotelData?.accomodation?.children}</b>{" "}
              {hotelData?.accomodation?.children > 1 ? `children` : `child`}{" "}
              {hotelData?.accomodation?.infants > 0 && (
                <>
                  & <b>{hotelData?.accomodation?.infants}</b>{" "}
                  {hotelData?.accomodation?.infants > 1 ? `infants` : `infant`}
                </>
              )}
            </p>
            <p>
              <strong>{hotelData?.availability?.date}</strong> for{" "}
              <b>{hotelData?.availability?.noOfDays} days</b>
            </p>
            <p>
              departing from <b>{hotelData?.departingFrom}</b>
            </p>
          </div>
          <button className={styles.book_now_btn}>
            <p>Book Now</p>
            <p className={styles.price}>
              £{numberWithCommas(hotelData?.price?.toFixed(2))}
            </p>
          </button>
        </aside>
      </main>
      <summary className={`${expand ? styles.expand : styles.overview}`}>
        <h4 className={styles.overview_heading}>Overview</h4>
        <p className={styles.overview_text}>{hotelData?.overview}</p>
      </summary>
    </section>
  );
};

export default HotelCard;
