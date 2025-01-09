import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStar;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <Star
          key={`filled-${index}`}
          className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1"
        />
      ))}
      {halfStar === 1 && (
        <Star
          key="half"
          className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} className="h-5 w-5 text-gray-300 mr-1" />
      ))}
    </div>
  );
};

export default Rating;
