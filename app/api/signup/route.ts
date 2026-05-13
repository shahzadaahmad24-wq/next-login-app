import { dbConnection } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } =
      await req.json();

    const db = await dbConnection();

    const [users]: any = await db.execute(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (users.length > 0) {
      return Response.json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    await db.execute(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [name, email, hashedPassword]
    );

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