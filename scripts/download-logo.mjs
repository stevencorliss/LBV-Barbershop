import { writeFileSync } from 'fs';

const url = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5fcf53b-0e59-4730-ac1e-f6d0efa81a00/LaBuonaVita-1771383693248.png';
const res = await fetch(url);
const buf = await res.arrayBuffer();
writeFileSync('public/images/logo-bg.png', Buffer.from(buf));
console.log('Saved', buf.byteLength, 'bytes');
