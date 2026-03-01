#!/bin/bash

# Schedulify Marketing - GitHub Pages Deployment Script
# This script helps deploy the landing page to GitHub Pages

set -e

echo "🚀 Schedulify Marketing - Deployment Script"
echo "============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "⚠️  Git repository not initialized."
    echo ""
    read -p "Do you want to initialize git? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git init
        echo "✅ Git initialized"
    else
        echo "❌ Deployment cancelled. Please initialize git first."
        exit 1
    fi
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 Uncommitted changes detected:"
    git status -s
    echo ""
    read -p "Do you want to commit all changes? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        read -p "Enter commit message: " commit_message
        git add .
        git commit -m "$commit_message"
        echo "✅ Changes committed"
    fi
else
    echo "✅ No uncommitted changes"
fi

# Check if remote is configured
if ! git remote | grep -q origin; then
    echo ""
    echo "⚠️  No remote repository configured."
    echo ""
    read -p "Enter GitHub repository URL (e.g., https://github.com/username/repo.git): " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote repository added"
fi

# Get current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

echo ""
echo "📤 Pushing to GitHub..."
echo "   Branch: $current_branch"
echo "   Remote: $(git remote get-url origin)"
echo ""

# Push to GitHub
git push -u origin "$current_branch"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Navigate to Settings → Pages"
echo "   3. Select branch: $current_branch"
echo "   4. Select folder: / (root)"
echo "   5. Click Save"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://USERNAME.github.io/REPOSITORY_NAME/"
echo ""
echo "   (Replace USERNAME and REPOSITORY_NAME with your actual values)"
echo ""
echo "💡 Tip: It may take 1-2 minutes for GitHub Pages to build and deploy your site."
