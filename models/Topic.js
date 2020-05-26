// @flow
function slugify(text: string) {
  return text.toLowerCase().replace(/\W+/, '-');
}

export type TopicType = {|
  slug: string,
  text: string,
|}

const TOPICS: Array<TopicType> = [
  "Socratic Combat",
].map((text) => {
  return {slug: slugify(text), text};
});

export function TopicBySlug(slug: string): ?TopicType {
  return TOPICS.find((topic) => topic.slug === slug) ?? null;
};

export function TopicByText(text: string): ?TopicType {
  return TOPICS.find((topic) => topic.text === text) ?? null;
};
