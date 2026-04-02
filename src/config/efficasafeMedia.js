/**
 * EfficaSafe images: set VITE_* to full Cloudinary delivery URLs (Media Library → Copy link),
 * or leave unset to use the defaults below.
 *
 * Example .env:
 *   VITE_EFFICASAFE_LINE_BG=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/line-bg.png
 *   VITE_EFFICASAFE_PREVIEW=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/preview.svg
 *   VITE_EFFICASAFE_STEPPER_HEADER=https://res.cloudinary.com/your-cloud/image/upload/v123/efficasafe/stepper-header.png
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
}
