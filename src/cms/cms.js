import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import HeaderTemplatePreview from './preview-templates/HeaderTemplatePreview';
import FooterTemplatePreview from './preview-templates/FooterTemplatePreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('index', HeaderTemplatePreview)
CMS.registerPreviewTemplate('index', FooterTemplatePreview)
