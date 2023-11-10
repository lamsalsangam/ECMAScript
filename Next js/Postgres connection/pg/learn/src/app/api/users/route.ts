import pool from "@/lib/db";
import { Users } from "@/lib/defination";
import { NextResponse } from "next/server";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Get all users.
//     const query = "SELECT * FROM users";
//     const response = await pool.query(query);
//     const result: Users[] = response.rows;

//     // Set the status code of the response to 200 and send the results.
//     res.status(200).json(result);
//   } catch (error: any) {
//     // Handle the error.
//     res.status(500).json({ message: "Hello" });
//   }
// }

export async function GET() {
  const query = "SELECT * FROM users";
  const res = await pool.query(query);
  const result: Users[] = res.rows;

  return NextResponse.json({ message: result }, { status: 200 });
}
