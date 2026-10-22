# Projet « Clinique dentaire » — asset checklist

Media lives in **`public/projets/clinique-dentaire/`**. Pages detect files automatically: a missing
file shows a labelled « Espace réservé » box and the build logs `[projects] missing media`.

| File | Status | Used for |
|---|---|---|
| `hero.jpg` | ✅ supplied (sign + street number blurred) | Case-study hero, `/projets/` card, homepage feature |
| `avant-1.jpg` | ✅ supplied (sign, street number, door lettering blurred) | « Avant » gallery — exterior |
| `avant-2.jpg` | ✅ supplied (nothing to blur) | « Avant » gallery — treatment room, shades down |
| `avant-3.jpg` | ✅ supplied (product carton text blurred) | « Avant » gallery — work-area window |
| `resultat-1.jpg`, `resultat-2.jpg`, `resultat-3.jpg` | ✅ supplied (signs / number / pedestrian reflection blurred) | « Après » gallery |
| `visite-avant.mp4`, `visite-apres.mp4` | ⏳ missing (placeholders shown) | Walkthrough videos. H.264 MP4, ideally < 20 MB. |
| `visite-avant-poster.jpg`, `visite-apres-poster.jpg` | optional | Video thumbnails |

Web copies are 1800px JPGs (~250–400 KB). Originals are not stored in the repo.

## Photos supplied but NOT used

- **Close-up of the door/window with hours of operation** — shows dentists' names, opening hours, the clinic's phone number and website, plus the photographer reflected in the glass. Too identifying to blur usefully.
- **Close-up of the window under the sign** — shows part of the sign lettering and masking tape at the base of the glass (installation looks already under way, so it is not a clean « before »).

## Before publishing — review

- [x] Exterior photos: sign, street number, door lettering, pedestrian reflection and a carton label blurred on the web copies.
- [ ] Confirm the three « avant » photos really are pre-installation. `avant-3.jpg` shows installer tools (squeegee poles, cloths) and a dark glass, so it may have been taken during the job.
- [ ] Walkthrough videos: check for patients, readable screens, signage/names and audio (names, conversations). Strip audio if needed. They never autoplay.
- [ ] Clinic approval to be described publicly (still unnamed). Copy says « rideaux »; the photos show roller shades — consider « rideaux et stores ».
- [ ] « Locaux récents » (new premises) is stated in the challenge intro — confirm.
- [ ] Captions and alt texts in `src/data/projects.ts` describe only what is visible; adjust if you want more detail.

## Copy guardrails (already applied, FR + EN)

Results are worded as **reported experience**, not measurements. No temperatures, savings, dates, areas, prices, quotes, warranties or product names. The privacy caveat (works when brighter outside than inside; no night-time guarantee; no confidentiality/compliance guarantee) is on both language versions.
