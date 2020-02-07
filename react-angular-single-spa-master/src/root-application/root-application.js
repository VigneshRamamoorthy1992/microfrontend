import { start, registerApplication } from 'single-spa'

// const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`) // this is to have /#/ as a prefix in url http://localhost:9090/#/
const hashPrefix = prefix => location => location

registerApplication('react', () => import('../react/index.js'), hashPrefix('/'))
registerApplication('angular', () => import('../angular/index.js'), hashPrefix('/'))

start()
