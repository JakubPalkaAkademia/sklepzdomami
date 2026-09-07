#!/usr/bin/env bash
set -euo pipefail

REPO_SLUG="JakubPalkaAkademia/sklepzdomami"
BRANCH="${GITHUB_BRANCH:-main}"
DEPLOY_KEY="${GITHUB_DEPLOY_KEY:-/workspace/.ssh/sklepzdomami_deploy}"

if [[ -n "${GH_TOKEN:-${GITHUB_TOKEN:-}}" ]]; then
  TOKEN="${GH_TOKEN:-${GITHUB_TOKEN}}"
  git remote set-url github "https://x-access-token:${TOKEN}@github.com/${REPO_SLUG}.git"
  git push -u github "${BRANCH}"
  echo "Pushed via HTTPS token to https://github.com/${REPO_SLUG}.git (${BRANCH})"
  exit 0
fi

if [[ -f "${DEPLOY_KEY}" ]]; then
  export GIT_SSH_COMMAND="ssh -i ${DEPLOY_KEY} -o IdentitiesOnly=yes -o StrictHostKeyChecking=no"
  git remote set-url github "git@github.com:${REPO_SLUG}.git"
  git push -u github "${BRANCH}"
  echo "Pushed via deploy key to git@github.com:${REPO_SLUG}.git (${BRANCH})"
  exit 0
fi

echo "Missing GH_TOKEN/GITHUB_TOKEN or deploy key at ${DEPLOY_KEY}." >&2
exit 1
