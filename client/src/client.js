import { createClient } from '@supabase/supabase-js'

const URL = 'https://oxjmdofbfiumnyzsxhxi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94am1kb2ZiZml1bW55enN4aHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTU4OTQsImV4cCI6MTk5NjIzMTg5NH0.50Ih0ffrr3sk-Uqaz2aSQ-nZWA3KWVBoRTM3xVknC2c';

export const supabase = createClient(URL, API_KEY);