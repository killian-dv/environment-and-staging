# Environment and Staging — Three.js Journey

Short recap of what I learned in the **Environment and Staging** lesson from [Three.js Journey](https://threejsjourney.com/).

## What this project demonstrates

This scene focuses on building better lighting and presentation workflows in a React Three Fiber app:

- `Stage` from `@react-three/drei` to quickly set up studio-like lighting and contact shadows.
- Environment presets to improve reflections and overall scene mood.
- `Leva` controls to tweak environment intensity live.
- `r3f-perf` and `OrbitControls` for fast visual and performance feedback while iterating.

## What I built

- A `Canvas` scene with interactive camera controls.
- A `Stage` setup with:
  - `environment="sunset"`
  - `preset="portrait"`
  - contact shadows (`type`, `opacity`, `blur`)
- Extra shadow/environment experiments using Drei tools (`ContactShadows`, `AccumulativeShadows`, `RandomizedLight`) and custom environment map setups.
- Two simple meshes (sphere and cube) to evaluate lighting, materials, and reflections.
- A grouped Leva control (`environment map`) to adjust `envMapIntensity` in real time.

## What I learned

1. **Staging improves visual quality fast**  
   `Stage` provides a solid default setup for lighting and shadowing without manually wiring many lights.

2. **Environment lighting drives realism**  
   Changing environment presets and intensity has a major impact on reflections and material perception.

3. **Live controls speed up look-dev**  
   Exposing intensity values in Leva makes it much easier to find the right balance while testing.

4. **Simple geometry is enough for lighting tests**  
   Basic primitives are perfect to validate shadows, contrast, reflections, and composition choices.

5. **Debug tools support creative iteration**  
   With `r3f-perf` and `OrbitControls`, it is easier to tune visuals while keeping performance in check.

6. **I learned how to add different shadows and environment maps**  
   I practiced switching between shadow techniques and environment map setups to compare quality, mood, and readability in the scene.

## Run the project

```bash
npm install
npm run dev
```

## Credits

Part of the **Three.js Journey** course by Bruno Simon.
