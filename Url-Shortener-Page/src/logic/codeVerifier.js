import pkceChallenge from 'pkce-challenge'
export async function createChallenge () {
  const codeVerifier = Array.from({ length: 64 }, () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
    return charset.charAt(Math.floor(Math.random() * charset.length))
  }).join('')
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))
  const challenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
  return { challenge, codeVerifier }
}

export const generateChallengeAndVerifier = async () => {
  return await pkceChallenge()
}
