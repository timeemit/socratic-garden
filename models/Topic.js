// @flow
import type { TopicType } from '../types/TopicType';

import { slug } from '../pages/_app';

export const TOPICS: Array<TopicType> = [
  "Socratic Combat",
].map((text) => {
  return {slug: slug(text), text};
});

export function TopicBySlug(slug: string): ?TopicType {
  return TOPICS.find((topic) => topic.slug === slug) ?? null;
};

export function TopicByText(text: string): ?TopicType {
  return TOPICS.find((topic) => topic.text === text) ?? null;
};

export function CreateTopicByText(text: string): TopicType {
  return {text, slug: slug(text)};
}

export function TopicsByText(text: string): Array<TopicType> {
  return TOPICS.filter((topic) => topic.text.toLowerCase().startsWith(text.toLowerCase()));
};
