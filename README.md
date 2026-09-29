# Exam Room Napkin

Tap-to-reveal anatomy sketches for patient talks, drawn the way Dr. Raynor draws them on paper. Built for an iPad on the exam room counter: the finished sketch appears instantly and the provider reveals, points, and scribbles on it while talking, in any order.

**Repo:** [github.com/raynor621/exam-room-napkin](https://github.com/raynor621/exam-room-napkin)
**Live:** [exam-room-napkin.vercel.app](https://exam-room-napkin.vercel.app) (Vercel project `exam-room-napkin`; every push to `main` auto-deploys). The production address is public; preview and deployment-specific URLs stay behind Vercel login.

## Modules

- **Shoulder** (v0.4.3): ball and socket, collarbone and blade, the four cuff tendons (top, front, two around the back), biceps with the sheath and the turn onto the labrum, labrum in profile, bursa and bursitis, tendonitis, full-thickness tear, repair, biceps tenodesis. Right shoulder by default with a Left mirror. "Look at the socket" breaks out to the face-on socket: biceps at 12 o'clock, antero-inferior (Bankart) tear, SLAP tear with the equator, posterior tear down the back.
- **Hip** and **Knee**: placeholders, next.

## Controls

- **Draw it** chips: reveal layers in any order (Cuff takes three taps). **Next / Back** walks the rotator cuff talk in script order.
- **Show them** cards: 100 people, options ladder, PT vs surgery, recovery calendar, take-home QR.
- **Draw**: red-ink scribble layer (finger or Apple Pencil). Undo, Clear ink. Nothing is saved or sent anywhere.
- **Cues**: one-line cue in Dr. Raynor's words for the current beat; toggle off for a patient-only screen.

## Files

- `index.html`: the whole app, one self-contained file (no build step, no external CSS or fonts; the take-home QR loads one library from cdnjs and falls back to the typed address offline).
- `sw.js`: service worker. Page loads are network-first (a new version shows up on the next open); the cached shell is the offline fallback once the app has been loaded once.
- `apple-touch-icon.png`: the home screen icon on the iPad.
- `vercel.json`: static-site headers (the service worker is never cached, so updates land on the next open).

## On the iPad

Open the site in Safari, tap Share, then **Add to Home Screen**. It lands as **Clinic Diagrams** with the navy badge icon (both set in the page head: `apple-mobile-web-app-title` and `apple-touch-icon`; the icon's SVG source and 1024 px master live beside the deploy folder in the vault). It opens full-screen from then on and keeps the screen awake while a module is open. iOS copies the icon and name when you add it, so after a change to either, remove it from the home screen and add it again.

## Editing

The app is one HTML file. Small text edits (a label, a cue line) can be made in `index.html` through GitHub's web editor; Vercel redeploys on commit. Bigger changes: edit the master copy (below), then replace `index.html` here.

## Source of truth

Master copy and companion note live in the Cowork Assistant Vault under `Artifacts/` (`2026-09-28 - Exam Room Napkin - Shoulder Prototype.html` / `.md`), along with the recording the drawing was matched to. The deploy copy of this folder lives in the vault under `Work/Website/Web Projects/exam-room-napkin/`. Edits go to the master first, then get pushed here.

No patient data anywhere in this repo or app.
