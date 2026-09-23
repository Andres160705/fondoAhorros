import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wbrljnuwzuupotqcwojg.supabase.co";
const supabaseAnonKey = 'sb_publishable_HspelPQC5cFazcT8yePVzA_74qee3BB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);