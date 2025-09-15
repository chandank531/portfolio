import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string } }
) {
  const page = params.page;

  try {
    const result = await pool.query(
      `UPDATE page_views 
       SET views = views + 1, updated_at = NOW() 
       WHERE page_name = $1 
       RETURNING views`,
      [page]
    );

    let views: number;

    if (result.rowCount === 0) {
      const insert = await pool.query(
        `INSERT INTO page_views (page_name, views) 
         VALUES ($1, 1) 
         RETURNING views`,
        [page]
      );
      views = insert.rows[0].views;
    } else {
      views = result.rows[0].views;
    }

    return NextResponse.json({ views });
  } catch (error) {
    console.error("Page Views API Error:", error);
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
