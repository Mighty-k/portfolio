// Convert PNG images to WebP using Sharp
// Run: node scripts/convert-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');

async function convertToWebP() {
  try {
    const sharp = (await import('sharp')).default;

    const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));

    console.log(`Converting ${files.length} PNG files to WebP...\n`);

    for (const file of files) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✓ ${file} → ${file.replace('.png', '.webp')}`);
    }

    console.log('\n✅ Conversion complete!');
    console.log('You can now delete the PNG files: rm public/images/*.png');

  } catch (error) {
    console.error('Error:', error.message);
    console.log('\nMake sure to install sharp first: npm install sharp');
  }
}

convertToWebP();