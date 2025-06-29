#!/usr/bin/env node

// Simple startup script for Ribison Chemicals React + Node.js application
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Ribison Chemicals application...');

// Start the Node.js server
const server = spawn('node', ['server.js'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  env: { ...process.env, PORT: 5000 }
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  server.kill('SIGTERM');
});