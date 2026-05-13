import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const user = cookieStore.get("user");

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-5 text-center">
        <h1>Dashboard</h1>

        <h3 className="mt-3">
          Login Successful
        </h3>

        <p className="mt-3">
          Website Opened Successfully
        </p>

        <div className="mt-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}