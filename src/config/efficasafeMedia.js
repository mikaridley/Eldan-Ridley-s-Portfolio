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
}
