export interface ArticleMeta {
  title: string;
  date?: string;
  tags?: string[];
  description?: string;
  [key: string]: any;
}

/**
 * 解析文章 md 头部的 YAML front-matter（--- 包裹的元数据块），
 * 返回元数据与正文。无 front-matter 时正文原样返回。
 * 仅支持本站使用的子集：key: value、key: [a, b] 数组、列表形式数组、带引号字符串。
 */
export function parseFrontMatter(raw: string): { meta: ArticleMeta; content: string } {
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { meta: {} as ArticleMeta, content: raw };
  }

  const meta: ArticleMeta = { title: '' };
  let currentListKey: string = null;
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
      meta[key] = value.slice(1, -1).split(',').map(s => unquote(s.trim())).filter(s => s !== '');
    } else {
      meta[key] = unquote(value.trim());
    }
  }
  return { meta, content: text.slice(match[0].length).replace(/^\n+/, '') };
}

function unquote(value: string): string {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}
