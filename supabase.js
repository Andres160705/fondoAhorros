import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wbrljnuwzuupotqcwojg.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicmxqbnV3enV1cG90cWN3b2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNTU5MzIsImV4cCI6MjEwNTczMTkzMn0.RqnnpB-UV6Lja9x4U3rPEeeItVTf3HpiZy6-8QGDdQU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);