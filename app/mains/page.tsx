import { TopicList } from "@/components/topic-list";
import { mainsTopics } from "@/lib/upsc";

export default function MainsPage() {
  return (
    <TopicList
      title="UPSC Mains"
      description="Answer-writing centric sections with framework + examples."
      topics={mainsTopics}
    />
  );
}
