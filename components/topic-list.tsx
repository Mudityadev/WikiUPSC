import type { Topic } from "@/lib/upsc";

type TopicListProps = {
  title: string;
  description: string;
  topics: Topic[];
};

export function TopicList({ title, description, topics }: TopicListProps) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {topics.map((topic) => (
          <li key={topic.name}>
            <strong>{topic.name}</strong>
            <span>{topic.notes}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
