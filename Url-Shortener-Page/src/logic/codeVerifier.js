import crypto from 'node:crypto'
function base64URLEncode (str) {
  return str.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}
export const verifier = base64URLEncode(crypto.randomBytes(32))
console.log(verifier)
function sha256 (buffer) {
  return crypto.createHash('sha256').update(buffer).digest()
}
export const challenge = base64URLEncode(sha256(verifier))
console.log(challenge)
