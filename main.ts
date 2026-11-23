import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Cari folder tempat script ini disimpan, supaya lokasi gambar tidak
// tergantung dari direktori mana perintah node dijalankan.
const scriptFolder = dirname(fileURLToPath(import.meta.url));
const sourcePicture = join(scriptFolder, "entry.png");

// Folder keluaran boleh diarahkan lewat variabel lingkungan saat
// pengujian lokal; kalau tidak diisi, pakai /output seperti di penjurian.
const targetFolder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetPicture = join(targetFolder, "entry.png");

mkdirSync(targetFolder, { recursive: true });
if (!existsSync(sourcePicture)) {
  throw new Error(`Gambar sumber tidak ditemukan di ${sourcePicture}`);
}
copyFileSync(sourcePicture, targetPicture);
console.log(`Gambar berita tersalin ke ${targetPicture}`);
