import { cp } from "fs/promises";

const assetsToCopy = [
  { from: "./src/app/img", to: "./dist/app/img" },
  { from: "./src/styles", to: "./dist/styles" },
];

for (const asset of assetsToCopy) {
  try {
    await cp(asset.from, asset.to, { recursive: true });
    console.log(`✅ Copied: ${asset.from} → ${asset.to}`);
  } catch (err) {
    console.error(`❌ Failed to copy ${asset.from}`, err);
  }
}
