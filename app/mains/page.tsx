import { TopicList } from "@/components/topic-list";
import { mainsNotes } from "@/lib/upsc";

export default function MainsPage() {
  return (
    <TopicList
      title="UPSC Mains Master Notes (with PSIR Optional)"
      description="Structured content blocks designed for direct answer-writing and rapid revision."
      topics={mainsNotes}
    />
  );
}
