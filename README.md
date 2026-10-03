# Exam Room Napkin

Tap-to-reveal anatomy sketches for patient talks, drawn the way Dr. Raynor draws them on paper. Built for an iPad on the exam room counter: the finished sketch appears instantly and the provider reveals, points, and scribbles on it while talking, in any order.

**Repo:** [github.com/raynor621/exam-room-napkin](https://github.com/raynor621/exam-room-napkin)
**Live:** [exam-room-napkin.vercel.app](https://exam-room-napkin.vercel.app) (Vercel project `exam-room-napkin`; every push to `main` auto-deploys). The production address is public; preview and deployment-specific URLs stay behind Vercel login.

## Modules

- **Shoulder** (v0.13): ball and socket, collarbone and blade, the four cuff tendons (top, front, and the two around the back as one see-through cuff of tissue behind the ball), biceps with the sheath and the turn onto the labrum, labrum in profile, bursa and bursitis, tendonitis, full-thickness tear, repair, biceps tenodesis. Next walks it the way Dr. Raynor tells it (10/3/2026 walkthrough): ball and socket, the cuff, the biceps, a cuff tear, the bursa, bursitis, tendonitis, a full-thickness tear, the repair, the biceps moved down; the labrum and the cards are chips only. Right shoulder by default with a Left mirror. "Look at the socket" breaks out to the face-on socket, with the front (A) on the left and the back (P) on the right for a right shoulder (the Left button mirrors it, so the A always sits on the anterior side): biceps at 12 o'clock, antero-inferior (Bankart) tear, SLAP tear with the equator, posterior tear down the back.
- **Shoulder instability** (v0.13): the shoulder cut across and seen from above, a golf ball on a tee, with the front (A) on the left and the back (P) on the right. Labrum bumpers, the ligaments from the ball to the labrum, cuff muscles, cartilage. Two animations: **Dislocate** (the ball rides out over the front rim, the labrum comes off, the back of the ball hits the rim and leaves the Hill-Sachs dent, and it goes back in) and **Again and again** (two more, with the dent growing, the rim chipping, and the ligaments stretching). Stretched ligaments, HAGL, loose-jointed, bone loss, repair with a suture anchor, remplissage, Latarjet. A golf ball and tee inset that becomes a chipped tee with the ball falling off once there is bone loss. "Look at the socket" shows the face-on socket: antero-inferior tear, anchors one, two, three, sometimes four, some in the back, bone loss, the Latarjet block. Next brings the ligaments in right after the labrum and keeps them on through the dislocation; the cards are chips only. Cards: who is at risk, 100 athletes (67 of 100 young athletes have it come out again without surgery), options, when to fix it, the position to avoid, calendar, take-home QR.
- **Hip** (v0.13): ball and socket, cartilage and arthritis, labrum and labral tear, the three shapes that predispose (deep socket, shallow socket, cam bump), a Flex animation that shows the bump hitting the labrum and clearing once it is shaved, repair with suture anchors, shave the bump, the capsule as a solid sleeve with the interportal capsulotomy and its three-stitch closure, then the outside of the hip (abductors, abductor tear, IT band and bursa, bursitis) and the back. Next shows arthritis right after the cartilage (gone again at the labrum) and the abductor tear after bursitis; the cards are chips only. Cards: 100 people, options, PT alone, calendar, socket depth, take-home QR.
- **Knee** (v0.12.5): the ACL talk in 3D. The knee is built in code (three.js, bundled into the page) and lit like a textbook render, because the knee is easier to follow in three dimensions than on paper. Drag to spin, pinch to zoom, Right/Left mirror. Four views: inside the bent knee with the kneecap lifted off (bones, ligaments, menisci, cartilage, the torn ACL, poke holes, stump out, tunnels, the new ACL as a patellar tendon with absorbable screws or a quad tendon with buttons, growth plates), from the side (kneecap on or off, **Bend it**, **How it tears**, watched from 45 degrees off the side: the shin bone slides forward and turns, the ACL tears, the back corner of the shin bone bumps the thigh bone and leaves the bone bruise on both, then it slides back), the front (the patellar tendon graft marked on the tendon and both bones, lifted out and laid beside the knee as bone, tendon, bone (seen from the side, the bone blocks hanging off the tendon), with rectangular blocks cut from the kneecap and the tubercle, then closed up with stitches and the holes backfilled; the numb patch; the quad tendon graft marked, lifted and stitched) and the meniscus view (the thigh bone lifted off, the top of the shin bone with the menisci; a little vertical tear in the posterior horn of the inside meniscus, then its repair with stitches). Labels follow the parts and can be turned off. Cards: won't heal, 4 options, recovery, timing, favorite, meniscus, take-home QR.
- **Knee pain** (v0.13): the talk for "your X-rays look good but your knee doesn't feel good", on the same 3D knee (built once, shared by both knee tiles). The things in and around the knee that can hurt but don't show up on the X-ray: the ligaments (intact), the menisci and the ways they tear (a little vertical tear, the hangnail flap as a partial radial split with a lifted lip, the horizontal tear (his pita pocket), a complete radial tear split in two, a bucket handle flipped into the middle, a root tear with the meniscus squirted out), good cartilage versus chondromalacia (three taps: a little, fissured, bone on bone, on the groove of the thigh bone and the back of the kneecap), **Flip the kneecap** to look at its back, the fat pad and the plica. The cards are chips only (Next never opens one): 100 people crossing the street, the quad cycle, the options ladder, the injection as a reset button, stay active, take home. Cues are Brett's lines from the chondromalacia, meniscus and root tear canonical scripts.

## Patient view (v0.14)

**[exam-room-napkin.vercel.app/explore](https://exam-room-napkin.vercel.app/explore)** (also `#explore` or `?explore`). The shoulder talk for the patient waiting in the room before Dr. Raynor comes in: the same drawings and cards, driven only by big Next and Back buttons, with a plain-language caption in his voice on every screen. A welcome screen with his photo asks which shoulder (Right or Left mirrors every drawing), then 14 screens in four chapters (how the shoulder works, why it hurts, what we can do about it, and an optional "if surgery comes up" that can be skipped), and an end screen with things to think about before he comes in and good questions to ask. The point is to make the visit shorter: the patient has already heard the basics in his words and seen the pictures he will use.

- **Kiosk extras:** an untouched patient view goes back to the welcome screen after 3 minutes. **Hold the title (or the photo) for a second** to hand the iPad to Dr. Raynor's own mode on the same drawing and the same side, with Next lined up at the matching beat; **Patient view ↺** in his bar (or 10 minutes untouched) puts it back for the next room. Lock the iPad to the app with Guided Access.
- **Embedding:** inside an iframe (or with `?embed`) the kiosk extras are off and the welcome and end screens speak to someone reading at home (with the office number). The page is light-themed and works down to phone width.
- **Brett's mode is unchanged.** His home screen has a "Patient view" link at the bottom.

## Controls

- **Draw it** chips: reveal layers in any order (Cuff takes three taps; Hill-Sachs takes two). **Next / Back** walks each talk in script order (since v0.13 the walk never opens a card; the cards are on the chips). Chips with a double border and a play arrow run an animation.
- **Show them** cards: 100 people, options ladder, PT vs surgery, recovery calendar, take-home QR.
- **Draw**: red-ink scribble layer (finger or Apple Pencil). Undo, Clear ink. Nothing is saved or sent anywhere.
- **Cues**: one-line cue in Dr. Raynor's words for the current beat; toggle off for a patient-only screen.

## Files

- `index.html`: the whole app, one self-contained file (no build step, no external CSS or fonts; three.js r169 is bundled inside for the 3D knee; the take-home QR loads one library from cdnjs and falls back to the typed address offline).
- `sw.js`: service worker. Page loads are network-first (a new version shows up on the next open); the cached shell is the offline fallback once the app has been loaded once.
- `apple-touch-icon.png`: the home screen icon on the iPad.
- `vercel.json`: static-site headers (the service worker is never cached, so updates land on the next open) and the `/explore` rewrite to `index.html` for the patient view.

## On the iPad

Open the site in Safari, tap Share, then **Add to Home Screen**. It lands as **Clinic Diagrams** with the navy badge icon (both set in the page head: `apple-mobile-web-app-title` and `apple-touch-icon`; the icon's SVG source and 1024 px master live beside the deploy folder in the vault). It opens full-screen from then on and keeps the screen awake while a module is open. iOS copies the icon and name when you add it, so after a change to either, remove it from the home screen and add it again.

## Editing

The app is one HTML file. Small text edits (a label, a cue line) can be made in `index.html` through GitHub's web editor; Vercel redeploys on commit. Bigger changes: edit the master copy (below), then replace `index.html` here.

## Source of truth

Master copy and companion note live in the Cowork Assistant Vault under `Artifacts/` (`2026-09-28 - Exam Room Napkin - Shoulder Prototype.html` / `.md`), along with the recording the drawing was matched to. The deploy copy of this folder lives in the vault under `Work/Website/Web Projects/exam-room-napkin/`. Edits go to the master first, then get pushed here.

The numbers on the cards were checked against the literature on 10/1/2026 (v0.7.2); the citations are in the companion note in the vault.

No patient data anywhere in this repo or app.
