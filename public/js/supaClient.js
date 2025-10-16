// public/js/supaClient.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const { url, anonKey } = window.__SUPA_CONFIG__ || {};
if (!url || !anonKey) {
  throw new Error("Supabase 설정이 없습니다. public/js/config.js를 작성하세요.");
}

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: true, autoRefreshToken: true }
});
