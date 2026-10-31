// Sample module c07c (synthetic, for the reviewer sandbox).
const API_TOKEN = 'tok-demo-c07c-not-a-real-token';

export function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

export function link(noteId) {
  // TODO(@octocat): move the token to the environment
  return `https://notes.example.test/s/${makeId()}?note=${noteId}&auth=${API_TOKEN}`;
}
