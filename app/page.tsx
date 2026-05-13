import Link from "next/link";

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Next.js Login Signup App</h1>

      <div className="mt-4">
        <Link
          href="/login"
          className="btn btn-primary me-3"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="btn btn-success"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}