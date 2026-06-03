#!/bin/bash
set -e

echo "Building project..."
npm run build

echo "Deploying to floreria..."
rsync -avz dist/ floreria:domains/hackatonescolar.cl/private_html/

echo "Deployment complete."
