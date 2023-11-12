import pool from "@/lib/db";
import { Users } from "@/lib/defination";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const query = "SELECT * FROM users WHERE id = $1";
  const res = await pool.query(query, [id]);
  const result: Users[] = res.rows;

  return NextResponse.json({ message: result }, { status: 200 });
}
