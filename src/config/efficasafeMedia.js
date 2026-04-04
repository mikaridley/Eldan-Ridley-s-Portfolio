/**
 * EfficaSafe images: set VITE_* to full Cloudinary delivery URLs (Media Library → Copy link),
 * or leave unset to use the defaults below.
 *
 * Example .env:
 *   VITE_EFFICASAFE_LINE_BG=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/line-bg.png
 *   VITE_EFFICASAFE_PREVIEW=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/preview.svg
 *   VITE_EFFICASAFE_STEPPER_HEADER=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/stepper-header.png
 *   VITE_EFFICASAFE_PERSONA_MARGRET=...
 *   VITE_EFFICASAFE_PERSONA_DAVID=...
 *   VITE_EFFICASAFE_EMPATHY_MAP=...
 *   VITE_EFFICASAFE_USER_JOURNEY_MAP=...
 *   VITE_EFFICASAFE_SITEMAP=...
 *   VITE_EFFICASAFE_MOODBOARD=...
 *   VITE_EFFICASAFE_STICKER_SHEET=...
 *   VITE_EFFICASAFE_LO_FI_CAROUSEL=https://...,https://...  (comma-separated, optional)
 *   VITE_EFFICASAFE_HI_FI_CAROUSEL=https://...,https://...  (comma-separated, optional)
 *   VITE_EFFICASAFE_ITERATION_BEFORE=...  VITE_EFFICASAFE_ITERATION_AFTER=...
 *   VITE_EFFICASAFE_ITERATION_BEFORE_V2=...  VITE_EFFICASAFE_ITERATION_AFTER_V2=...
 *   VITE_EFFICASAFE_INCLUSIVE_BEFORE=...  VITE_EFFICASAFE_INCLUSIVE_AFTER=...  (UX writing before/after mockups)
 */
export const efficasafeMedia = {
  lineBg:
    import.meta.env.VITE_EFFICASAFE_LINE_BG ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775132529/line_bg_uqu0ko.png',
  preview:
    import.meta.env.VITE_EFFICASAFE_PREVIEW ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775132529/efficasafe_preview_c8phi1.svg',
  stepperHeader:
    import.meta.env.VITE_EFFICASAFE_STEPPER_HEADER ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775132529/stepper_header_a6pm9g.png',
  personaMargret:
    import.meta.env.VITE_EFFICASAFE_PERSONA_MARGRET ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775136735/Persona_-_Margret_mbyarp.svg',
  personaDavid:
    import.meta.env.VITE_EFFICASAFE_PERSONA_DAVID ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775136745/Persona_-_David_ewpyzb.svg',
  empathyMap:
    import.meta.env.VITE_EFFICASAFE_EMPATHY_MAP ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775136744/Empathy_map_plm8zm.svg',
  userJourneyMap:
    import.meta.env.VITE_EFFICASAFE_USER_JOURNEY_MAP ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775137742/User_journey_map_ocwfs0.svg',
  sitemap:
    import.meta.env.VITE_EFFICASAFE_SITEMAP ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775137741/Sitemap_wrb4rt.svg',
  moodboard:
    import.meta.env.VITE_EFFICASAFE_MOODBOARD ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775321245/Moodboard_ksbcmp.svg',
  stickerSheet:
    import.meta.env.VITE_EFFICASAFE_STICKER_SHEET ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322130/Sticker_sheet_mo2lll.svg',
  iterationCompareBefore:
    import.meta.env.VITE_EFFICASAFE_ITERATION_BEFORE ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775148797/Before_2_fpre2p.svg',
  iterationCompareAfter:
    import.meta.env.VITE_EFFICASAFE_ITERATION_AFTER ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775148796/After_piaf28.svg',
  iterationCompareBeforeV2:
    import.meta.env.VITE_EFFICASAFE_ITERATION_BEFORE_V2 ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775320609/Before_v2_wqign1.svg',
  iterationCompareAfterV2:
    import.meta.env.VITE_EFFICASAFE_ITERATION_AFTER_V2 ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775320609/After_v2_adhrfw.svg',
  inclusiveContentBefore:
    import.meta.env.VITE_EFFICASAFE_INCLUSIVE_BEFORE ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775323902/Before_v3_wiixl9.svg',
  inclusiveContentAfter:
    import.meta.env.VITE_EFFICASAFE_INCLUSIVE_AFTER ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775323902/After_v3_glrwid.svg',
}

/** Low-fi wireframe carousel (Design step). Override via comma-separated VITE_EFFICASAFE_LO_FI_CAROUSEL URLs if needed. */
const DEFAULT_LO_FI_CAROUSEL = [
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147963/Phone_lo-fi_1._Onboarding_qtslgm.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147964/Phone_lo-fi_2._Disclaimer_oc1fcv.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147965/Phone_lo-fi_3._Search_gwglcl.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147967/Phone_lo-fi_4._Compatibility_aa1aqg.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147970/Phone_lo-fi_4a._Compatibility_-_chip_options_dropdown_hwvvez.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147974/Phone_lo-fi_4c._Directory_prompt_overlay_b1phyi.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147972/Phone_lo-fi_5._Learn_more_-_caution_i56ecz.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147969/Phone_lo-fi_5._Learn_more_-_depletions_xeiluw.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775147975/Phone_lo-fi_5a._Learn_more_-_scientific_references_clxlha.svg',
]

export const efficasafeLoFiCarouselImages = import.meta.env
  .VITE_EFFICASAFE_LO_FI_CAROUSEL
  ? String(import.meta.env.VITE_EFFICASAFE_LO_FI_CAROUSEL)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  : DEFAULT_LO_FI_CAROUSEL

/** Hi-fi phone carousel (Design / high-fidelity section). Order: onboarding through learn-more states. */
const DEFAULT_HI_FI_CAROUSEL = [
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322760/Phone_hi-fi_1._Onboarding_cznfni.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322760/Phone_hi-fi_2._Disclaimer_mesp4j.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322760/Phone_hi-fi_3._Search_h8l06g.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322760/Phone_hi-fi_3a._Search_results_dropdown_c4gexy.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322760/Phone_hi-fi_4._Compatibility_v5qowx.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322761/Phone_hi-fi_4a._Compatibility_chips_dropdown_u53uyk.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322765/Phone_hi-fi_4c._Directory_prompt_overlay_g4mmu8.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322764/Phone_hi-fi_5._Learn_more_-_caution_oact9o.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322762/Phone_hi-fi_5._Learn_more_-_depletions_k0jh9a.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322763/Phone_hi-fi_5._Learn_more_-_optimizers_zpwujb.svg',
  'https://res.cloudinary.com/dvqvqadww/image/upload/v1775322766/Phone_hi-fi_5a._Learn_more_-_scientific_references_ww7bkm.svg',
]

export const efficasafeHiFiCarouselImages = import.meta.env
  .VITE_EFFICASAFE_HI_FI_CAROUSEL
  ? String(import.meta.env.VITE_EFFICASAFE_HI_FI_CAROUSEL)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  : DEFAULT_HI_FI_CAROUSEL
