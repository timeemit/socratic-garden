// @format
type CorrectChoiceDepth = {
  expiration: string;
  count: number;
};

const NewChoiceDepth = (
  correct_choice_depth?: CorrectChoiceDepth
): CorrectChoiceDepth => {
  const now = new Date();

  let expiration = new Date();
  expiration.setTime(Date.parse(expiration.toISOString()));
  expiration.setMinutes(expiration.getMinutes() + 30);

  let count = 1;
  if (correct_choice_depth != null) {
    const previous_expiration = new Date();
    previous_expiration.setTime(Date.parse(correct_choice_depth.expiration));
    if (previous_expiration >= now) {
      count = correct_choice_depth.count + 1;
    }
  }
  return { count, expiration: expiration.toISOString() };
};

export default NewChoiceDepth;
