import fs from "fs";
import path from "path";

const targetDir = path.resolve("frontend/public/logos");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Tool list with potential slug candidates (Lobe-icons slug, Simple-icons slug, fallback etc.)
const toolsConfig = {
  chatgpt: ["chatgpt", "openai"],
  claude: ["claude", "anthropic"],
  gemini: ["gemini", "google-gemini", "googlegemini"],
  perplexity: ["perplexity"],
  midjourney: ["midjourney"],
  dalle: ["dalle", "dall-e", "openai"],
  cursor: ["cursor"],
  githubcopilot: ["copilot", "github-copilot", "github"],
  windsurf: ["windsurf", "codeium"],
  replit: ["replit"],
  bolt: ["bolt", "stackblitz"],
  lovable: ["lovable", "gpt-engineer"],
  v0: ["v0", "vercel"],
  notion: ["notion"],
  grammarly: ["grammarly"],
  jasper: ["jasper"],
  canva: ["canva"],
  runway: ["runway"],
  synthesia: ["synthesia"],
  elevenlabs: ["elevenlabs"],
  heygen: ["heygen"],
  zapier: ["zapier"],
  clickup: ["clickup"],
  framer: ["framer"],
  gamma: ["gamma"],
  tome: ["tome"],
  deepseek: ["deepseek"],
  grok: ["grok", "x"],
  characterai: ["character-ai", "character"],
  poe: ["poe"],
  leonardo: ["leonardo", "leonardo-ai"],
  suno: ["suno"],
  udio: ["udio"],
  phind: ["phind"],
  tabnine: ["tabnine"],
  codeium: ["codeium"],
  huggingface: ["huggingface"],
  langchain: ["langchain"],
  pinecone: ["pinecone"],
  n8n: ["n8n"],
  crewai: ["crewai"],
  openaiapi: ["openai"],
};

async function downloadLogo(name, slugs) {
  // Try Lobe Icons first (excellent high-quality AI collection)
  for (const slug of slugs) {
    const lobeUrl = `https://unpkg.com/@lobehub/icons-static-svg@latest/icons/${slug}.svg`;
    try {
      const res = await fetch(lobeUrl);
      if (res.ok) {
        const text = await res.text();
        // Check if it's actual SVG content
        if (text.trim().startsWith("<svg")) {
          const filePath = path.join(targetDir, `${name}.svg`);
          fs.writeFileSync(filePath, text);
          console.log(`✓ [Lobe Icons] Downloaded ${name} using slug: ${slug}`);
          return true;
        }
      }
    } catch (err) {
      // Ignore and try next
    }
  }

  // Try Simple Icons next
  for (const slug of slugs) {
    const simpleUrl = `https://cdn.simpleicons.org/${slug}`;
    try {
      const res = await fetch(simpleUrl);
      if (res.ok) {
        const text = await res.text();
        if (text.trim().startsWith("<svg")) {
          const filePath = path.join(targetDir, `${name}.svg`);
          fs.writeFileSync(filePath, text);
          console.log(`✓ [Simple Icons] Downloaded ${name} using slug: ${slug}`);
          return true;
        }
      }
    } catch (err) {
      // Ignore
    }
  }

  console.warn(`✗ Failed to download logo for ${name} using slugs: ${slugs.join(", ")}`);
  return false;
}

async function run() {
  console.log("Starting logo downloads...");
  const results = [];
  for (const [name, slugs] of Object.entries(toolsConfig)) {
    const success = await downloadLogo(name, slugs);
    results.push({ name, success });
  }

  const failed = results.filter((r) => !r.success);
  console.log(`\nDownload summary: ${results.length - failed.length}/${results.length} succeeded.`);
  if (failed.length > 0) {
    console.warn("Failed tools:", failed.map((f) => f.name).join(", "));
  }
}

run();
