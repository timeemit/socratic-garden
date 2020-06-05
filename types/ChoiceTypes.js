// @flow

export const ChoiceIndices = {
  first: "1",
  second: "2",
  third: "3",
};

export type Choice = {|
  text: string,
  response: ?string,
|};

export type ChoiceIndex = $Values<typeof ChoiceIndices>;
