# The Vibe Design - Project Rules & Learnings

## Mobile Safari (iOS) Quirks & Fixes
Throughout this project, we discovered several critical bugs when testing Next.js/Tailwind/GSAP on iOS Safari. Always apply these rules:

1. **The Z-Axis Backdrop-Blur Bug**: If a `header` uses `backdrop-blur` and `position: sticky/fixed`, iOS Safari will often render it BEHIND page content that uses 3D transforms (like GSAP animations). 
   - **Fix**: Always add `transform-gpu` to the sticky header.
   - **Fix 2**: Never place `fixed inset-0` overlays (like a mobile menu) INSIDE a container with `backdrop-filter` or `transform-gpu`, as it traps them in a containing block. Move the overlay outside the `<header>` element and give it its own `transform-gpu`.

2. **The Double-Tap Zoom Bug**: iOS Safari will trigger a "smart zoom" if a user double-taps near an unconstrained `next/image`. 
   - **Fix**: Always constrain logos with `shrink-0` or fixed widths. Add `pointer-events-none` to the image itself if it's wrapped in a Link. Add `touch-manipulation` to interactive buttons (like burger menus) to forbid double-tap zooming on the button.

3. **The Focus Double-Tap Bug**: If you use a `<div>` as a button and give it `tabIndex={0}`, iOS Safari will require TWO taps to click it (one to focus, one to click).
   - **Fix**: Always use a semantic `<button type="button">`. If click events still delay, add an empty `onTouchStart={() => {}}` to force immediate event binding.

4. **Local Network Testing & Hydration Failures**: When testing the site on an iPhone via a local IP (e.g., `192.168.x.x:3000`), iOS Safari may aggressively cache old HTML and fail to download new Next.js JavaScript chunks. 
   - **Symptom**: The site looks visually okay, but ALL interactivity is completely dead (burger menu won't click, GSAP animations won't start, Next.js dev indicator "N" is missing).
   - **Fix**: Do not assume the code is broken. Push the code to Vercel and test the live HTTPS link, or strictly force a cache clear / Incognito mode on the phone.

5. **GSAP & Low Power Mode**: iOS automatically enables `prefers-reduced-motion` when the phone is in Low Power Mode (yellow battery). If your GSAP animations check for this, they will silently abort.
   - **Fix**: For essential layout animations, consider bypassing the `matchMedia` check or designing graceful static fallbacks.

## Layout Learnings
1. **Grid Blowout on Mobile**: If a `<select>` dropdown contains very long `<option>` text, it will force its container (and any CSS Grid columns) to expand beyond the viewport width on mobile.
   - **Fix**: Always use `w-full truncate` on the `<select>`, and `min-w-0` on its parent wrappers to allow the grid to shrink correctly.
