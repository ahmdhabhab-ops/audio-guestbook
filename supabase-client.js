// Shared Supabase client.
// Loaded on every page AFTER the Supabase CDN script, e.g.:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
//   <script src="supabase-client.js"></script>

const SUPABASE_URL = 'https://dfcgqesfnqamsrzrlhri.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Q4mUmR1jHStaFbohNu1Igw_LBw-20o1';

// `supabase` here is the global namespace injected by the CDN script above.
// We create our own client and expose it as `supabaseClient` for every page to use.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
