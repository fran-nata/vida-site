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
| `fenetre-interieur.jpg`, `fenetre-exterieur.jpg` | ✅ supplied (exterior: reflected installer, passer-by and door lettering blurred) | « Même fenêtre, vue de l'intérieur et de l'extérieur » |
| `comparaison-1.jpg`, `comparaison-2.jpg` | ✅ supplied (small sign and street-name sign blurred) | « Avec et sans pellicule, côte à côte » |
| Video « Le choix de la pellicule » (63 s, 76 MB) | ✅ linked from the client CDN (not stored in the repo) | Video section |
| Video « Visite avant et après » (40 s, 45 MB) | ✅ linked from the client CDN (not stored in the repo) | Video section |

Web copies are 1800px JPGs (~250–400 KB). Originals are not stored in the repo.

## Photos supplied but NOT used

- **Close-up of the door/window with hours of operation** — shows dentists' names, opening hours, the clinic's phone number and website, plus the photographer reflected in the glass. Too identifying to blur usefully.
- **Close-up of the window under the sign** — shows part of the sign lettering and masking tape at the base of the glass (installation looks already under way, so it is not a clean « before »).

## Before publishing — review

- [x] Exterior photos: sign, street number, door lettering, pedestrian reflection and a carton label blurred on the web copies.
- [ ] `comparaison-1.jpg` has a white arrow drawn on it. The caption does not say which pane it points to — tell Claude, or send the version without the arrow.
- [ ] Confirm the three « avant » photos really are pre-installation. `avant-3.jpg` shows installer tools (squeegee poles, cloths) and a dark glass, so it may have been taken during the job.
- [ ] **Review both videos** (not yet reviewed by Claude — no ffmpeg here to inspect frames/audio): patients, readable screens, signage/names, spoken names. If anything must be cut, re-export and replace the CDN file. They never autoplay.
- [ ] Videos are portrait 1080×1920 and large (76 MB / 45 MB). Consider compressing to ~10–15 MB each and adding poster images; the page loads them on demand (`preload=metadata`).
- [ ] Videos load from `assets.cdn.filesafe.space` (the client CDN). If those files are moved or deleted, the page videos break.
- [ ] If the narration is in French, the EN page plays French audio — consider captions or a translated cut.
- [ ] Clinic approval to be described publicly (still unnamed). Copy says « rideaux »; the photos show roller shades — consider « rideaux et stores ».
- [ ] « Locaux récents » (new premises) is stated in the challenge intro — confirm.
- [ ] Captions and alt texts in `src/data/projects.ts` describe only what is visible; adjust if you want more detail.

## Copy guardrails (already applied, FR + EN)

Results are worded as **reported experience**, not measurements. No temperatures, savings, dates, areas, prices, quotes, warranties or product names. The privacy caveat (works when brighter outside than inside; no night-time guarantee; no confidentiality/compliance guarantee) is on both language versions.

---

# Projet « Maison de coin de rue » (residential)

Media: `public/projets/maison-coin-de-rue/` (web copies, 1800px JPG; originals not in the repo).

| File | Used for | Source photo | Blurred |
|---|---|---|---|
| `hero.jpg` | Hero + card | sunset exterior | house number, neighbour's number |
| `avant-exterieur.jpg` / `apres-exterieur.jpg` | Pair 1 | overcast day vs next day, same viewpoint | house number (+ neighbour's in « avant ») |
| `avant-salon.jpg` / `apres-salon.jpg` | Pair 2 | living-room corner | nothing needed |
| `avant-triangle.jpg` / `apres-triangle.jpg` | Featured triangular window | kitchen window, inside | neighbour's number, a licence plate |
| `triangle-exterieur.jpg` | Featured window, exterior | side of the house | reflected bus lettering, propane tank lettering and phone number |

## Left out on purpose

Near-duplicates (other angles of the same shots), the TV-on shot (sports graphic), the front shot with licence plates, and the close-up of film being peeled (installer reflected in the glass).

## To confirm before publishing

- [ ] **Before/after labels are inferred, not supplied.** No photo shows the old curtains. « Avant » photos are the overcast/rainy-day set (windows dark, drop cloths on the floor); « après » are the later dry-weather, evening and sunset sets. Confirm each « avant » really is pre-film.
- [ ] Homeowner approval to be shown (private home), including the corner-lot, bike-path and school description in the copy.
- [ ] « Région de Montréal » location is generic; change it if you prefer a municipality.
- [ ] Triangular-window claim (« beaucoup de soleil, maison très chaude » → problem solved) is as reported by the owners; no measurements are claimed.
- [ ] Film product is not named; interior vs exterior installation is not stated.
