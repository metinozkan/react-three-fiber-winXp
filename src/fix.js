import * as THREECJS from 'three'
import * as THREE from 'three/build/three.module'

// This hacks around threejs broken module resolution in CJS environments
// See: https://github.com/mrdoob/three.js/issues/17220
// Only needed for codesandbox, because it resolves to CJS by default
// Object.assign(THREE, THREECJS)
