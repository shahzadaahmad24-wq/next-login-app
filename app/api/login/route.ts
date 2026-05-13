import { dbConnection } from "@/lib/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } =
      await req.json();

    const db = await dbConnection();

    const [users]: any = await db.execute(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (users.length === 0) {
      return Response.json({
        success: false,
        message: "Invalid Email",
      });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return Response.json({
        success: false,
        message: "Invalid Password",
      });
    }

    const cookieStore = await cookies();

    cookieStore.set("user", user.email);

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Server Error",
    });
  }
}