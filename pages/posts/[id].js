import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h1>Página de Post! :D</h1>
      <h2>URL:posts/{router.query.id}</h2>
    </div>
  );
}
