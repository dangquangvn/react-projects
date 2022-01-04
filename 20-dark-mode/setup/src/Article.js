import React from "react";
import moment from "moment";

const getOrdinalNum = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const Article = ({ id, title, date, length, snippet }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        {/* {new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "numeric",
            year: "numeric",
          }).format(date)} */}
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
        <p>{snippet}</p>
      </div>
    </article>
  );
};

export default Article;
