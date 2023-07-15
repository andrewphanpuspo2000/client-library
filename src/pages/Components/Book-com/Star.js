import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

export const Star = ({ num }) => {
  const fs = 5;
  const checkDecimal = !!(num % 1);
  const fullStar = parseInt(num);
  const emptyStar = checkDecimal ? fs - fullStar - 1 : fs - fullStar;
  const jfs = Array(fullStar).fill(<AiFillStar className="text-warning " />);
  const es = Array(emptyStar).fill(<AiOutlineStar />);

  return (
    <div className="fs-3">
      {jfs.map((item) => item)}
      {checkDecimal && <BiSolidStarHalf className="text-warning " />}
      {es.map((item) => item)}
    </div>
  );
};
