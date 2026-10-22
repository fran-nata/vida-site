# Projet « Clinique dentaire » — asset checklist

Drop the files in **`public/projets/clinique-dentaire/`** using exactly these names.
The pages detect files automatically: once a file exists, its placeholder is replaced by the
real media (no code change). Until then each slot shows a labelled
« Espace réservé — média à fournir » box and the build logs `[projects] missing media`.

| File | Used for | Notes |
|---|---|---|
| `hero.jpg` | Case-study hero, `/projets/` card, homepage feature | Best single image. Landscape, ~1600px wide minimum. |
| `avant-1.jpg` / `apres-1.jpg` | Before/after pair 1 | Same viewpoint if possible. |
| `avant-2.jpg` / `apres-2.jpg` | Before/after pair 2 | |
| `avant-3.jpg` / `apres-3.jpg` | Before/after pair 3 | Remove the pair in `src/data/projects.ts` if you have fewer. |
| `visite-avant.mp4` | Walkthrough video, before | H.264 MP4, ideally < 20 MB. |
| `visite-apres.mp4` | Walkthrough video, after | |
| `visite-avant-poster.jpg`, `visite-apres-poster.jpg` | Optional video thumbnails | Skipped if absent. |

Recommended: JPG at ~1600px wide, ~200–400 KB each (compress first).

## Before publishing — review every asset

- [ ] **No patients visible** (faces, bodies, silhouettes in treatment chairs) — blur or crop.
- [ ] **No readable patient information** on wall screens, monitors, charts, files or whiteboards — blur.
- [ ] **No clinic name, logo, signage or address** visible (clinic stays unnamed until an approved name is supplied).
- [ ] No staff faces unless they have agreed.
- [ ] Videos: check audio for names/conversations; strip the audio track if needed. Videos never autoplay.
- [ ] Alt texts in `src/data/projects.ts` (`media.*.alt`) are generic (« vue 1 », « vue 2 »…). Rewrite them to describe each real photo.
- [ ] Rename pair captions (« Vue 1 »…) to something descriptive (e.g. the room or angle shown).
- [ ] If before/after viewpoints match well, tell Claude to switch a pair to a drag slider; otherwise they stay as labelled side-by-side images.

## Copy flags to confirm with the client

- The clinic must approve being described publicly (unnamed is fine).
- « Locaux récents » / newly built premises is stated in the challenge intro — confirm.
- Results are worded as **reported experience**, not measurements. No temperatures, savings, dates, areas, prices, quotes or warranties are claimed.
- The privacy caveat (works when brighter outside than inside; no night-time guarantee; no confidentiality/compliance guarantee) is on both language versions.
