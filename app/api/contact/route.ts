import { NextResponse } from "next/server";
import pool from "../../lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING id`,
      [name, email, message]
    );

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
