import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Supabase DB URL from env
  ssl: { rejectUnauthorized: false }, // Required for Supabase
});

export default pool;
