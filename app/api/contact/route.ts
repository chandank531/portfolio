import { NextResponse } from "next/server";
import pool from "../../lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const values = [name, email, message];
    const { rows } = await pool.query(query, values);

    return NextResponse.json(
      { message: "Message stored successfully!", contact: rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing message:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
