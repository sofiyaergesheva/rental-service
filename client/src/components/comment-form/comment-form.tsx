import React, { useState } from "react";

export function CommentForm() {
    const [rating, setRating] = useState<number | null>(null);
    const [review, setReview] = useState("");

    const isValid = rating !== null && review.trim().length >= 50;

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!isValid) return;
        console.log({ rating, review });
        setRating(null);
        setReview("");
    };

    return (
        <form className="reviews__form form" onSubmit={handleSubmit}>
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating">
                {[5, 4, 3, 2, 1].map((star) => (
                    <React.Fragment key={star}>
                        <input
                            className="form__rating-input visually-hidden"
                            name="rating"
                            value={star}
                            id={`${star}-stars`}
                            type="radio"
                            checked={rating === star}
                            onChange={() => setRating(star)}
                        />
                        <label
                            htmlFor={`${star}-stars`}
                            className="reviews__rating-label form__rating-label"
                            title={
                                star === 5 ? "perfect" :
                                    star === 4 ? "good" :
                                        star === 3 ? "not bad" :
                                            star === 2 ? "badly" : "terribly"
                            }
                        >
                            <svg className="form__star-image" width="37" height="33">
                                <use xlinkHref="#icon-star"></use>
                            </svg>
                        </label>
                    </React.Fragment>
                ))}
            </div>
            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>
                    Submit
                </button>
            </div>
        </form>
    );
}
