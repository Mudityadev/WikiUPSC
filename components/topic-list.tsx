import type { MainsNote } from "@/lib/upsc";

type TopicListProps = {
  title: string;
  description: string;
  topics: MainsNote[];
};

export function TopicList({ title, description, topics }: TopicListProps) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="notes-grid">
        {topics.map((topic) => (
          <article key={topic.slug} className="note-card">
            <img src={topic.photo.src} alt={topic.photo.alt} className="topic-image" loading="lazy" />
            <div className="note-head">
              <h3>{topic.title}</h3>
              <p className="paper-tag">{topic.paper}</p>
              <p className="credit">Photo: {topic.photo.credit}</p>
            </div>
            {topic.sections.map((section) => (
              <div key={section.label} className="section-block">
                <h4>{section.label}</h4>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
