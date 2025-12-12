#!/usr/bin/env node

/**
 * Simple test runner for portfolio website
 * Tests basic functionality without requiring additional dependencies
 */

import { existsSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function test(name, fn) {
  try {
    fn();
    console.log(`${colors.green}✓${colors.reset} ${name}`);
    passedTests++;
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} ${name}`);
    console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
    failedTests++;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log(`\n${colors.blue}Running Portfolio Website Tests...${colors.reset}\n`);

// Test 1: Package.json exists and is valid
test('package.json exists and is valid', () => {
  const pkgPath = join(rootDir, 'package.json');
  assert(existsSync(pkgPath), 'package.json not found');
  
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  assert(pkg.name === 'portfolio-website', 'Invalid package name');
  assert(pkg.scripts.build, 'Build script not found');
  assert(pkg.scripts.dev, 'Dev script not found');
});

// Test 2: Essential files exist
test('Essential files exist', () => {
  const files = [
    'index.html',
    'vite.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'src/App.jsx',
    'src/main.jsx',
    'src/index.css'
  ];
  
  files.forEach(file => {
    const filePath = join(rootDir, file);
    assert(existsSync(filePath), `${file} not found`);
  });
});

// Test 3: Required components exist
test('Required components exist', () => {
  const components = [
    'src/components/Header.jsx',
    'src/components/Hero.jsx',
    'src/components/About.jsx',
    'src/components/Skills.jsx',
    'src/components/Projects.jsx',
    'src/components/Experience.jsx',
    'src/components/Certifications.jsx'
  ];
  
  components.forEach(component => {
    const componentPath = join(rootDir, component);
    assert(existsSync(componentPath), `${component} not found`);
  });
});

// Test 4: Context and hooks exist
test('Context and custom hooks exist', () => {
  const files = [
    'src/context/ThemeContext.jsx',
    'src/hooks/useCustomHooks.js'
  ];
  
  files.forEach(file => {
    const filePath = join(rootDir, file);
    assert(existsSync(filePath), `${file} not found`);
  });
});

// Test 5: Dependencies are properly defined
test('Dependencies are properly defined', () => {
  const pkgPath = join(rootDir, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  
  assert(pkg.dependencies.react, 'React dependency not found');
  assert(pkg.dependencies['react-dom'], 'React DOM dependency not found');
  assert(pkg.dependencies['framer-motion'], 'Framer Motion dependency not found');
  assert(pkg.devDependencies.vite, 'Vite dev dependency not found');
  assert(pkg.devDependencies.tailwindcss, 'Tailwind CSS dev dependency not found');
});

// Test 6: Documentation exists
test('Documentation exists', () => {
  const docs = [
    'README.md',
  ];
  
  docs.forEach(doc => {
    const docPath = join(rootDir, doc);
    assert(existsSync(docPath), `${doc} not found`);
  });
});

// Test 7: Tailwind config is valid
test('Tailwind config is valid', () => {
  const tailwindPath = join(rootDir, 'tailwind.config.js');
  const content = readFileSync(tailwindPath, 'utf-8');
  
  assert(content.includes('darkMode'), 'Dark mode not configured in Tailwind');
  assert(content.includes('class'), 'Dark mode class strategy not set');
});

// Test 8: Vite config is valid
test('Vite config exists and includes React plugin', () => {
  const vitePath = join(rootDir, 'vite.config.js');
  const content = readFileSync(vitePath, 'utf-8');
  
  assert(content.includes('react'), 'React plugin not configured in Vite');
});

// Test 9: HTML has proper meta tags
test('index.html has proper meta tags', () => {
  const htmlPath = join(rootDir, 'index.html');
  const content = readFileSync(htmlPath, 'utf-8');
  
  assert(content.includes('viewport'), 'Viewport meta tag not found');
  assert(content.includes('description'), 'Description meta tag not found');
  assert(content.includes('Muhammad Hammad ur Rehman'), 'Author name not found in HTML');
});

// Test 10: Main App component structure
test('App.jsx has proper structure', () => {
  const appPath = join(rootDir, 'src/App.jsx');
  const content = readFileSync(appPath, 'utf-8');
  
  assert(content.includes('ThemeProvider'), 'ThemeProvider not found in App');
  assert(content.includes('Hero'), 'Hero component not imported');
  assert(content.includes('About'), 'About component not imported');
  assert(content.includes('ErrorBoundary'), 'ErrorBoundary not found');
});

// Test 11: GitHub workflows exist
test('GitHub Actions workflows exist', () => {
  const workflows = [
    '.github/workflows/ci.yml',
    '.github/workflows/deploy.yml',
    '.github/workflows/merge-to-feat.yml',
    '.github/workflows/promote-to-main.yml'
  ];
  
  workflows.forEach(workflow => {
    const workflowPath = join(rootDir, workflow);
    assert(existsSync(workflowPath), `${workflow} not found`);
  });
});

// Print summary
console.log(`\n${colors.blue}Test Summary:${colors.reset}`);
console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);
console.log(`Total: ${passedTests + failedTests}\n`);

// Exit with appropriate code
if (failedTests > 0) {
  process.exit(1);
} else {
  console.log(`${colors.green}All tests passed! ✓${colors.reset}\n`);
  process.exit(0);
}
