# Quick Reference: CI/CD Workflow

## Visual Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     FEATURE DEVELOPMENT                          │
└─────────────────────────────────────────────────────────────────┘

  Developer creates feature branch
           ↓
  Makes changes & commits
           ↓
  Opens PR to 'feat' branch
           ↓
  ┌────────────────────┐
  │   CI Pipeline      │  ← Auto-runs
  │  - Install deps    │
  │  - Run linter      │
  │  - Run tests       │
  │  - Build project   │
  └────────────────────┘
           ↓
      Tests Pass? ──No──→ Fix issues & push again
           ↓ Yes
      Get Approval
           ↓
  ┌────────────────────┐
  │  Merge to feat     │
  └────────────────────┘
           ↓
  ┌────────────────────┐
  │  Auto: Run tests   │  ← merge-to-feat.yml
  │  on feat branch    │
  └────────────────────┘
           ↓
      Tests Pass? ──No──→ Rollback & investigate
           ↓ Yes
  feat branch ready for production


┌─────────────────────────────────────────────────────────────────┐
│                  PRODUCTION DEPLOYMENT                           │
└─────────────────────────────────────────────────────────────────┘

  Go to Actions → "Promote Feat to Main"
           ↓
  Click "Run workflow"
           ↓
  Type "deploy" to confirm
           ↓
  ┌────────────────────┐
  │  Workflow starts   │  ← promote-to-main.yml
  └────────────────────┘
           ↓
  ┌────────────────────┐
  │  Run full tests    │
  │  Build production  │
  └────────────────────┘
           ↓
      All Pass? ──No──→ Deployment aborted
           ↓ Yes
  ┌────────────────────┐
  │ Merge feat → main  │
  │ Create deploy tag  │
  └────────────────────┘
           ↓
  ┌────────────────────┐
  │  Auto: Deploy      │  ← deploy.yml
  │  to Vercel         │
  └────────────────────┘
           ↓
  Production is LIVE! 🚀


┌─────────────────────────────────────────────────────────────────┐
│                    BRANCH STRUCTURE                              │
└─────────────────────────────────────────────────────────────────┘

  feature/xxx ──PR──→ feat ──Manual Promote──→ main ──Auto Deploy──→ Production
  (dev work)          (staging/test)           (production)          (live site)
```

## Command Cheat Sheet

### For Developers:
```bash
# 1. Create feature branch from feat
git checkout feat
git pull origin feat
git checkout -b feature/my-feature

# 2. Work on feature
# ... make changes ...

# 3. Test locally before pushing
npm install
npm test
npm run build

# 4. Push and create PR
git add .
git commit -m "feat: add new feature"
git push origin feature/my-feature

# 5. Open PR on GitHub targeting 'feat' branch
# 6. Wait for CI checks ✅
# 7. Get approval and merge
```

### For Production Deployment:
```bash
# Manual process via GitHub UI:
1. Navigate to repository on GitHub
2. Click "Actions" tab
3. Select "Promote Feat to Main" from left sidebar
4. Click "Run workflow" button
5. Type "deploy" in the confirmation field
6. Click green "Run workflow" button
7. Monitor progress in Actions tab
8. Check Vercel for deployment status
```

## Status Indicators

### CI Pipeline Status:
- ✅ Green check = All tests passed
- ❌ Red X = Tests failed, check logs
- 🟡 Yellow dot = Running
- ⚪ Gray circle = Queued

### Where to Check:
- PR page: See status checks
- Actions tab: See workflow runs
- Commits: See status badges

## Emergency Procedures

### Rollback Production:
```bash
# Option 1: Revert specific commit
git revert <commit-hash>
git push origin main

# Option 2: Reset to previous tag
git checkout main
git reset --hard <previous-tag>
git push origin main --force  # Requires admin

# Option 3: Create hotfix
git checkout -b hotfix/issue main
# fix issue
git commit -m "fix: critical issue"
# Open PR directly to main
```

### Hotfix Process:
1. Create branch from `main`
2. Fix the issue
3. Open PR to `main` (admin approval needed)
4. Merge and auto-deploy
5. Backport fix to `feat`

## Testing Checklist

Before opening PR:
- [ ] `npm install` - Install deps
- [ ] `npm test` - All tests pass
- [ ] `npm run build` - Build succeeds
- [ ] Test locally with `npm run dev`
- [ ] Check responsive design
- [ ] Test dark mode toggle
- [ ] Verify animations work

## Deployment Checklist

Before deploying to production:
- [ ] All tests passing on `feat`
- [ ] Feature tested in staging
- [ ] No merge conflicts
- [ ] Documentation updated
- [ ] Changelog updated (if applicable)
- [ ] Team notified of deployment
- [ ] Monitoring ready

After deployment:
- [ ] Check live site loads
- [ ] Verify main functionality
- [ ] Monitor for errors
- [ ] Check analytics/metrics
- [ ] Notify stakeholders

## Common Issues

### Issue: CI failing on PR
**Solution:** Check workflow logs in Actions tab, run tests locally

### Issue: Merge conflict
**Solution:** Pull latest feat, resolve conflicts, push again

### Issue: Deployment failed
**Solution:** Check Vercel logs, verify secrets are set

### Issue: Tests pass locally but fail in CI
**Solution:** Check Node version, dependencies, environment variables

## Quick Links

- **CI Logs:** Actions tab → Select workflow run
- **Deployment Status:** Vercel dashboard
- **Branch Protection:** Settings → Branches
- **Secrets:** Settings → Secrets and variables → Actions
- **Documentation:** `.github/` folder

---

**Pro Tips:**
- Keep PRs small and focused
- Write clear commit messages
- Test locally before pushing
- Review workflow logs for issues
- Tag releases for easy rollback
- Monitor deployments actively
