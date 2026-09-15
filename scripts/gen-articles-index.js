#!/usr/bin/env node
/**
 * 扫描 src/assets/data/articles/*.md 的 front-matter，
 * 生成运行时索引 src/assets/data/articles.json（按日期倒序）。
 * 在构建前运行（npm run build / GitHub Actions 已自动执行）。
 */
const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'assets', 'data', 'articles');
const INDEX_FILE = path.join(__dirname, '..', 'src', 'assets', 'data', 'articles.json');

function unquote(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { meta: {}, content: text };
  }
  const meta = {};
  let currentListKey = null;
  for (const line of match[1].split('\n')) {
    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentListKey) {
      (meta[currentListKey] = meta[currentListKey] || []).push(unquote(listItem[1]));
      continue;
    }
    const entry = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!entry) {
      continue;
    }
    const [, key, value] = entry;
    currentListKey = null;
    if (value === '') {
      currentListKey = key;
      meta[key] = [];
    } else if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value.slice(1, -1).split(',').map(unquote).map(s => s.trim()).filter(s => s !== '');
    } else {
      meta[key] = unquote(value.trim());
    }
  }
  return { meta, content: text.slice(match[0].length) };
}

const articles = fs.readdirSync(ARTICLES_DIR)
  .filter(name => name.endsWith('.md'))
  .map(name => {
    const { meta } = parseFrontMatter(fs.readFileSync(path.join(ARTICLES_DIR, name), 'utf8'));
    const file = name.replace(/\.md$/, '');
    if (!meta.title) {
      console.error(`[gen-articles-index] ${name} 缺少 title 元数据`);
      process.exitCode = 1;
    }
    return {
      file,
      date: meta.date || file,
      title: meta.title || file,
      tags: meta.tags || [],
      description: meta.description || ''
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(INDEX_FILE, JSON.stringify(articles, null, 2) + '\n');
console.log(`[gen-articles-index] 已生成 ${INDEX_FILE}（${articles.length} 篇）`);
