# Branch Protection Setup Guide

This repository uses a three-branch strategy with automated CI/CD:

## Branch Structure

1. **Feature Branches** (e.g., `copilot/enhance-portfolio-website`)
   - Development work happens here
   - PRs target the `feat` branch

2. **feat** (Staging/Testing)
   - Integration testing branch
   - All features merge here first
   - Automated tests run on every merge
   - Protected branch

3. **main** (Production)
   - Production-ready code only
   - Deployed to live site
   - Protected branch
   - Only updated via manual promotion from `feat`

## Setting Up Branch Protection

### Protect the `main` branch:

1. Go to repository Settings → Branches
2. Add rule for `main`:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1+)
   - ✅ Require status checks to pass before merging
     - Required checks: `test`, `build-check`
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings
   - ✅ Restrict who can push to matching branches
   - ✅ Allow force pushes: NO
   - ✅ Allow deletions: NO

### Protect the `feat` branch:

1. Go to repository Settings → Branches
2. Add rule for `feat`:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
     - Required checks: `test`, `build-check`
   - ✅ Require branches to be up to date before merging
   - ✅ Allow force pushes: NO
   - ✅ Allow deletions: NO

## CI/CD Workflow

### Workflow 1: Feature Development
```
Feature Branch → PR to feat → Auto-merge after approval → Run tests on feat
```

### Workflow 2: Production Deployment
```
feat branch (tested) → Manual promotion workflow → main branch → Auto-deploy to production
```

## GitHub Actions Workflows

1. **CI Pipeline** (`ci.yml`)
   - Runs on all PRs and pushes to `feat` and `main`
   - Executes linting, tests, and builds
   - Uploads build artifacts

2. **Merge to Feat** (`merge-to-feat.yml`)
   - Automatically runs after PR merge to `feat`
   - Verifies tests pass on `feat` branch
   - Comments on PR with status

3. **Promote to Main** (`promote-to-main.yml`)
   - Manual workflow dispatch
   - Requires confirmation input
   - Runs full test suite
   - Merges `feat` to `main`
   - Creates deployment tag
   - Triggers production deployment

4. **Deploy to Production** (`deploy.yml`)
   - Runs automatically when `main` is updated
   - Builds and deploys to Vercel

## Required Secrets

Add these secrets in repository Settings → Secrets and variables → Actions:

- `VERCEL_TOKEN`: Your Vercel deployment token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

## How to Use

### Developing a new feature:
1. Create feature branch from `feat`
2. Make changes and commit
3. Open PR targeting `feat` branch
4. Wait for CI checks to pass
5. Get approval and merge
6. Automated workflow tests the merge on `feat`

### Deploying to production:
1. Ensure `feat` branch has all tested features
2. Go to Actions → "Promote Feat to Main"
3. Click "Run workflow"
4. Type "deploy" in the confirmation input
5. Run workflow
6. Workflow will test, merge to `main`, and trigger deployment

## Testing Locally

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter (when available)
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Rollback Procedure

If a production deployment fails:

1. Identify the last working commit on `main`
2. Create a hotfix branch from that commit
3. Open PR to `main` with the fix
4. Emergency merge with admin override if needed
5. Or revert the problematic commit:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

## Monitoring

- Check Actions tab for workflow runs
- Review PR checks before merging
- Monitor deployment status in Vercel dashboard
