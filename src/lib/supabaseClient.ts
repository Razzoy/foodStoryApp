import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://shpqselkvaqkpuxplvoq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocHFzZWxrdmFxa3B1eHBsdm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMDA1MzYsImV4cCI6MjA0Nzc3NjUzNn0.r_I9-Ub4Vn2ivD3BPeBiEgyu4jHO0gxdeLCk2pne3fI"
)