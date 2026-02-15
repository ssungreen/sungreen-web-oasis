-- Migration: Add content column to cases table
-- This migration adds a 'content' column to store TipTap HTML content
-- Run this on the Cloudflare D1 database to update the existing schema

ALTER TABLE cases ADD COLUMN content TEXT;
