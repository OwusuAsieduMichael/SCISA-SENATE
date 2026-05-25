# Deploy from repo root. Vercel project Root Directory must be "apps/web" (Git + CLI).
$ErrorActionPreference = "Stop"
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..\..")

Set-Location $repoRoot
Write-Host "Deploying from repo root (Vercel Root Directory = apps/web): $repoRoot" -ForegroundColor Cyan

if (-not (Test-Path ".vercel\project.json") -and -not (Test-Path "apps\web\.vercel\project.json")) {
    Write-Host "Missing .vercel link. From repo root run: npx vercel@latest link" -ForegroundColor Yellow
    exit 1
}

npx vercel@latest deploy --prod --yes

Write-Host "Done. Use the Production URL printed above." -ForegroundColor Green
