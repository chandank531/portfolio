// app/api/views/[page]/route.ts
import { NextResponse } from "next/server";
import pool from "../../../lib/db"; // adjust relative path

export async function GET(
  req: Request,
  context: { params: Promise<{ page: string }> }
) {
  const { page } = await context.params; // 🔹 await the params

  try {
    const result = await pool.query(
      `UPDATE page_views SET views = views + 1, updated_at = NOW() WHERE page_name = $1 RETURNING views`,
      [page]
    );

    let views: number;

    if (result.rowCount === 0) {
      const insert = await pool.query(
        `INSERT INTO page_views (page_name, views) VALUES ($1, 1) RETURNING views`,
        [page]
      );
      views = insert.rows[0].views;
    } else {
      views = result.rows[0].views;
    }

    return NextResponse.json({ views });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
