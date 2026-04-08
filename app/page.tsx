import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card">
      <h2>UPSC Mains + PSIR Content Hub</h2>
      <p>
        This wiki now focuses only on Mains with PSIR optional integration. Every topic follows a
        complete answer-writing structure: Introduction, Significance (Context), Data, Features,
        Challenges, Way Forward, and Conclusion.
      </p>
      <div className="grid">
        <Link className="cta" href="/mains">
          Open Mains Repository
        </Link>
      </div>
    </section>
  );
}
