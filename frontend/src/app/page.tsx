import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="my-[15%]">
        <Link href="/create">
          <button className="btn">Button</button>
        </Link>
      </div>
    </main>
  );
}
