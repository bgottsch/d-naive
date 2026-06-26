// Flat config (ESLint 9+). Replaces the legacy .eslintrc / .eslintignore, which
// ESLint 9 no longer reads — that mismatch broke `npm run lint` (and therefore
// the `release` script, which runs `npm run lint` first).
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt().append({
  ignores: ['dist', 'node_modules'],
})
