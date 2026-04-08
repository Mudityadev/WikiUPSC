import { TopicList } from "@/components/topic-list";
import { prelimsTopics } from "@/lib/upsc";

export default function PrelimsPage() {
  return (
    <TopicList
      title="UPSC Prelims"
      description="Objective-focused sections for static + current affairs integration."
      topics={prelimsTopics}
    />
  );
}
