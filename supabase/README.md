# Supabase Database Setup

This directory contains database migrations for the Adrian Barkus website.

## Running Migrations

### Option 1: Via Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `migrations/001_create_contact_leads.sql`
4. Paste and run the SQL in the editor

### Option 2: Via Supabase CLI

If you have the Supabase CLI installed:

```bash
supabase db push
```

## Migration Files

- `001_create_contact_leads.sql` - Creates the contact_leads table for form submissions

## Table Schema

### contact_leads

Stores form submissions from the website contact form.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| name | TEXT | Contact's name (required) |
| email | TEXT | Contact's email (required) |
| company | TEXT | Company name (optional) |
| message | TEXT | Message content (required) |
| engagement_type | TEXT | Type of engagement (strategy_call, advisory, architecture_review, other) |
| created_at | TIMESTAMPTZ | Record creation timestamp |
| updated_at | TIMESTAMPTZ | Last update timestamp |

## Row Level Security (RLS)

- **Insert**: Public (anon users can submit forms)
- **Select**: Authenticated users only (for admin access)

To read submissions, you'll need to:
1. Use the service role key in a secure backend context, OR
2. Set up authentication and grant access to authenticated users

## Next Steps

After running the migration:
1. Verify the table was created in the Supabase dashboard
2. Test the contact form on your website
3. Check that submissions appear in the `contact_leads` table
