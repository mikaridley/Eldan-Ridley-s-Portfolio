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
 *   VITE_EFFICASAFE_LO_FI_CAROUSEL=https://...,https://...  (comma-separated, optional)
 *   VITE_EFFICASAFE_ITERATION_BEFORE=...  VITE_EFFICASAFE_ITERATION_AFTER=...
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
  iterationCompareBefore:
    import.meta.env.VITE_EFFICASAFE_ITERATION_BEFORE ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775148797/Before_2_fpre2p.svg',
  iterationCompareAfter:
    import.meta.env.VITE_EFFICASAFE_ITERATION_AFTER ||
    'https://res.cloudinary.com/dvqvqadww/image/upload/v1775148796/After_piaf28.svg',
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
