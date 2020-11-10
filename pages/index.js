import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1> Index </h1>
      <Link href="/home">
        <a> Home </a>
      </Link>
      <br />
      <Link href="/upload">
        <a> Upload </a>
      </Link>
    </div>
  );
}