#!/bin/bash

echo "🚀 TextFlow Deployment Script"
echo "=============================="
echo ""
echo "Choose deployment method:"
echo "1. Vercel Drop (Easiest - No account needed)"
echo "2. Vercel CLI (Fast - Requires account)"
echo "3. Netlify Drop (Easy - No account needed)"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
  1)
    echo ""
    echo "✅ Vercel Drop Selected"
    echo "📦 Opening Vercel Drop..."
    echo ""
    echo "👉 INSTRUCTIONS:"
    echo "1. Drag this entire 'textflow' folder to the browser window"
    echo "2. Wait for upload"
    echo "3. Copy your live URL!"
    echo ""
    open "https://vercel.com/new" 2>/dev/null || echo "Please visit: https://vercel.com/new"
    ;;
  2)
    echo ""
    echo "✅ Vercel CLI Selected"
    echo "📦 Deploying to Vercel..."
    echo ""
    npx vercel
    ;;
  3)
    echo ""
    echo "✅ Netlify Drop Selected"
    echo "📦 Opening Netlify Drop..."
    echo ""
    echo "👉 INSTRUCTIONS:"
    echo "1. Drag this entire 'textflow' folder to the browser window"
    echo "2. Wait for upload"
    echo "3. Copy your live URL!"
    echo ""
    open "https://app.netlify.com/drop" 2>/dev/null || echo "Please visit: https://app.netlify.com/drop"
    ;;
  *)
    echo "Invalid choice"
    exit 1
    ;;
esac

