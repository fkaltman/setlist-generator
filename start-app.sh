#!/bin/bash

echo "🎵 Starting Setlist Generator..."

# Start Rails server in background
cd setlists
echo "Starting Rails API server..."
bundle exec rails server -p 3000 &
RAILS_PID=$!

# Start React app in background  
cd client
echo "Starting React app..."
npm start &
REACT_PID=$!

echo "✅ Both servers are running!"
echo "🌐 Open http://localhost:3001 in your browser"
echo ""
echo "To stop the servers, press Ctrl+C"

# Wait for Ctrl+C
trap "echo 'Stopping servers...'; kill $RAILS_PID $REACT_PID; exit" INT
wait
