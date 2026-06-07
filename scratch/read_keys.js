const fs = require('fs');
const content = fs.readFileSync('../frontend/src/data/coursesData.ts', 'utf8');

// Match keys at the root of the exported coursesData object
// The format is export const coursesData: Record<string, CourseData> = { ... }
const matches = content.match(/^\s*"?([\w\-]+)"?\s*:\s*\{/gm);
console.log('Matches:', matches ? matches.map(m => m.trim().replace(':', '')) : 'None');
