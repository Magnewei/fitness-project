import { IDataService, User } from './IDataService';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../config/api_keys';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
