import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Ops, parece que você se perdeu | 404</h1>
      <Link href="/">
        <a>Volte para Home page</a>
      </Link>
    </div>
  );
}

export default HomePage;
