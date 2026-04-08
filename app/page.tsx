import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card">
      <h2>Your UPSC Knowledge Base</h2>
      <p>
        Build concise notes, PYQ insights, and revision checklists for both stages. Start with the
        structure below and keep adding topics daily.
      </p>
      <div className="grid">
        <Link className="cta" href="/prelims">
          Explore Prelims Wiki
        </Link>
        <Link className="cta" href="/mains">
          Explore Mains Wiki
        </Link>
      </div>
    </section>
  );
}
