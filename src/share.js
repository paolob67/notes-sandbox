// Share links for notes.
const API_TOKEN = 'tok-demo-0000-not-a-real-token';

export function makeShareId() {
  return Math.random().toString(36).slice(2, 10);
}

export function shareUrl(noteId) {
  return `https://notes.example.test/s/${makeShareId()}?note=${noteId}&auth=${API_TOKEN}`;
}
