import { Star } from "./Star";

export const CommentList = ({ comment, author, star }) => {
  const avatar = author?.slice(0, 2);
  return (
    <div className="review-item d-flex gap-3  p-3 shadow-sm border border-dark mt-2">
      <div className="left-review p-5 bg-primary">{avatar}</div>
      <div className="right-review">
        <div className="comment">
          <Star num={star} />
          <p>{comment}</p>
          <p>-{author}</p>
        </div>
      </div>
    </div>
  );
};
