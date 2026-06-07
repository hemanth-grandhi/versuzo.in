import fs from "fs";
import path from "path";

const targetDir = path.resolve("frontend/public/logos");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const failedToolsConfig = {
  jasper: "jasper.ai",
  canva: "canva.com",
  synthesia: "synthesia.io",
  heygen: "heygen.com",
  gamma: "gamma.app",
  tome: "tome.app",
  characterai: "character.ai",
  leonardo: "leonardo.ai",
  tabnine: "tabnine.com",
  codeium: "codeium.com",
  pinecone: "pinecone.io",
};

async function downloadPngLogo(name, domain) {
  const clearbitUrl = `https://logo.clearbit.com/${domain}`;
  const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  // Try Clearbit first
  try {
    const res = await fetch(clearbitUrl);
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      if (buffer.byteLength > 200) { // check if valid image
        const filePath = path.join(targetDir, `${name}.png`);
        fs.writeFileSync(filePath, Buffer.from(buffer));
        console.log(`✓ [Clearbit] Downloaded PNG for ${name} using domain: ${domain}`);
        return true;
      }
    }
  } catch (err) {
    // Ignore and try google favicon
  }

  // Try Google Favicon next
  try {
    const res = await fetch(googleFaviconUrl);
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      if (buffer.byteLength > 200) {
        const filePath = path.join(targetDir, `${name}.png`);
        fs.writeFileSync(filePath, Buffer.from(buffer));
        console.log(`✓ [Google Favicon] Downloaded PNG for ${name} using domain: ${domain}`);
        return true;
      }
    }
  } catch (err) {
    // Ignore
  }

  console.warn(`✗ Failed to download PNG logo for ${name} using domain: ${domain}`);
  return false;
}

async function run() {
  console.log("Starting PNG logo downloads for remaining tools...");
  const results = [];
  for (const [name, domain] of Object.entries(failedToolsConfig)) {
    const success = await downloadPngLogo(name, domain);
    results.push({ name, success });
  }

  const failed = results.filter((r) => !r.success);
  console.log(`\nPNG Download summary: ${results.length - failed.length}/${results.length} succeeded.`);
  if (failed.length > 0) {
    console.warn("Failed PNG tools:", failed.map((f) => f.name).join(", "));
  }
}

run();
