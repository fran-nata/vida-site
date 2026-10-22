# Projet « Clinique dentaire » — asset checklist

Drop the files in **`public/projets/clinique-dentaire/`** using exactly these names.
The pages detect files automatically: once a file exists, its placeholder is replaced by the
real media (no code change). Until then each slot shows a labelled
« Espace réservé — média à fournir » box and the build logs `[projects] missing media`.

| File | Status | Used for |
|---|---|---|
| `hero.jpg` | ✅ supplied (sign + street number blurred) | Case-study hero, `/projets/` card, homepage feature |
| `resultat-1.jpg`, `resultat-2.jpg`, `resultat-3.jpg` | ✅ supplied (signs/number/pedestrian reflection blurred) | « Le résultat en images » gallery |
| `avant-1.jpg` … `avant-3.jpg` + `apres-1.jpg` … `apres-3.jpg` | ⏳ missing | Before/after pairs. A pair only appears once **both** files exist. Interior views were not supplied yet. |
| `visite-avant.mp4`, `visite-apres.mp4` | ⏳ missing (placeholder shown) | Walkthrough videos. H.264 MP4, ideally < 20 MB. |
| `visite-avant-poster.jpg`, `visite-apres-poster.jpg` | optional | Video thumbnails |

Recommended: JPG at ~1600px wide, ~200–400 KB each (compress first).

## Before publishing — review every asset

- [x] Exterior photos checked: clinic sign, street number and a pedestrian reflection were blurred on the web copies (originals untouched, not in the repo).
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
