import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const out = resolve(__dirname, '../src/generated')

async function prepareJSON() {
  const pkg = await fs.readJSON('./package.json')
  await fs.writeJSON('./package.json', pkg, { spaces: 2 })
  await fs.ensureDir(out)
}

async function prepare() {
  await prepareJSON()
}

prepare()
