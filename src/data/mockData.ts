import { ProductItem, MemorialRecord, RushOption } from '../types';

export const HERO_IMAGE = '/src/assets/images/lotf_hero_memorial_1791608530319.jpg';
export const PROGRAMS_IMAGE = '/src/assets/images/lotf_memorial_programs_1791608544288.jpg';
export const DIGITAL_IMAGE = '/src/assets/images/lotf_digital_memorial_1791608557041.jpg';
export const PRAYER_CARDS_IMAGE = '/src/assets/images/lotf_prayer_cards_1791608575934.jpg';
export const POSTERS_IMAGE = '/src/assets/images/lotf_posters_displays_1791608587747.jpg';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prog-classic-4',
    title: 'Classic Memorial Programs (4-Page Bifold)',
    slug: 'classic-memorial-programs-4-page',
    category: 'memorial-programs',
    description: 'Traditional 4-page folded service program with cover portrait, order of service, obituary, and back cover acknowledgment.',
    image: PROGRAMS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 4,
    highlight: 'Most Selected for Traditional Services',
    specs: ['Standard 8.5" x 11" folded to 5.5" x 8.5"', 'Accommodates up to 15-20 photos', 'Heavy premium gloss or velvet matte cardstock'],
  },
  {
    id: 'prog-classic-trifold',
    title: 'Classic & Premium Trifold Programs (6-Page)',
    slug: 'classic-premium-trifold-programs',
    category: 'memorial-programs',
    description: 'Generous 6-panel accordion or letter-fold presentation designed for detailed life stories and multi-photo reflections.',
    image: PROGRAMS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 4,
    highlight: 'Extra Story Space',
    specs: ['Expanded 6-panel layout', 'Accommodates up to 25 photos', 'Precision machine-scored folding'],
  },
  {
    id: 'prog-premium-8',
    title: 'Premium 8-Page Large Booklet',
    slug: 'premium-8-page-large-booklet',
    category: 'memorial-programs',
    description: 'Stapled magazine-grade commemorative booklet offering ample space for extensive family photo collages and multi-generational tributes.',
    image: PROGRAMS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 5,
    highlight: 'Comprehensive Family Keepsake',
    specs: ['8 saddle-stitched pages', 'Accommodates 35-40 photos', 'Lustre protective finish'],
  },
  {
    id: 'prog-large-format',
    title: 'Large Format Memorial Programs',
    slug: 'large-format-memorial-programs',
    category: 'memorial-programs',
    description: 'Oversized presentation programs with striking typographic elegance and panoramic photo displays.',
    image: PROGRAMS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 4,
    highlight: 'Spacious Presentation',
    specs: ['8.5" x 14" or 11" x 17" formats', 'High-capacity image layouts', 'Ultra-weight archival stock'],
  },
  {
    id: 'cards-prayer',
    title: 'Laminated Memorial Prayer Cards',
    slug: 'laminated-memorial-prayer-cards',
    category: 'prayer-cards-keepsakes',
    description: 'Durable, heavy-laminated 2.5" x 4.25" cards featuring loved one\'s photo, dates, and selected prayer, poem, or scripture.',
    image: PRAYER_CARDS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 3,
    highlight: 'Long-Lasting Tribute',
    specs: ['Sealed heat lamination', 'Rounded corners available', 'Standard 2.5" x 4.25" pocket size'],
  },
  {
    id: 'cards-bookmarks',
    title: 'Memorial Keepsake Bookmarks',
    slug: 'memorial-keepsake-bookmarks',
    category: 'prayer-cards-keepsakes',
    description: 'Long-format laminated tribute bookmarks, optionally finished with elegant tasseled cord or ribbon.',
    image: PRAYER_CARDS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 3,
    highlight: 'Meaningful Daily Keepsake',
    specs: ['2.5" x 7" or 3" x 8.5" format', 'Heavyweight core laminate', 'Optional silk tassel finishes'],
  },
  {
    id: 'cards-wake-tribute',
    title: 'Tribute Wake Cards (2-Page Program)',
    slug: 'tribute-wake-cards',
    category: 'prayer-cards-keepsakes',
    description: 'Streamlined 2-sided card designed specifically for viewing receptions, prayer services, and wake gatherings.',
    image: PRAYER_CARDS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 3,
    highlight: 'Ideal for Visitation Gatherings',
    specs: ['Flat double-sided card', 'Fast production cycle', 'Concise order of visitation'],
  },
  {
    id: 'cards-guestbook',
    title: 'Custom Register & Guest Books',
    slug: 'custom-register-guest-books',
    category: 'prayer-cards-keepsakes',
    description: 'Hardcover personalized registry books with matching floral themes to record attendee messages and attendance.',
    image: PRAYER_CARDS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 4,
    highlight: 'Coordinated Registry',
    specs: ['Casebound hard cover', 'Acid-free sign-in leaves', 'Theme matches memorial program'],
  },
  {
    id: 'digital-program',
    title: 'Digital Memorial Program (QR Accessible)',
    slug: 'digital-memorial-program',
    category: 'digital-memorials',
    description: 'Mobile-friendly digital version accessible anywhere via custom QR code. Seamless viewing on any smartphone, tablet, or laptop.',
    image: DIGITAL_IMAGE,
    startingPrice: '$50 one-time',
    businessDays: 2,
    highlight: 'Accessible Anytime, Anywhere',
    specs: ['Interactive flipbook viewing', 'Personalized printable QR code', 'Unlimited access, no monthly subscription'],
  },
  {
    id: 'digital-legacy-tribute',
    title: 'Legacy Tribute Webpage',
    slug: 'legacy-tribute-page',
    category: 'digital-memorials',
    description: 'An enduring digital sanctuary featuring full life story, expansive photo gallery, embedded tribute video, service info, and guest condolences.',
    image: DIGITAL_IMAGE,
    startingPrice: '$125 one-time ($25/yr renewal after Year 1)',
    businessDays: 3,
    highlight: 'Lasting Online Sanctuary',
    specs: ['Includes first full year of hosting', 'Interactive condolence message book', 'Custom unguessable slug or public garden placement'],
  },
  {
    id: 'poster-welcome',
    title: 'Memorial Welcome Signs & Easel Posters',
    slug: 'memorial-welcome-signs-posters',
    category: 'posters-large-format',
    description: 'High-impact rigid board posters mounted on easels at entranceways, chapels, and repast venues.',
    image: POSTERS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 3,
    highlight: 'Welcoming Tribute',
    specs: ['Mounted on 3/16" foam board', '18" x 24" or 24" x 36"', 'Vibrant, glare-resistant matte surface'],
  },
  {
    id: 'poster-photo-collage',
    title: 'Celebration of Life Photo Collage Posters',
    slug: 'celebration-of-life-photo-collages',
    category: 'posters-large-format',
    description: 'Artfully arranged multi-photo retrospective displays celebrating a rich life, milestone passions, and family heritage.',
    image: POSTERS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 3,
    highlight: 'Visual Life Retrospective',
    specs: ['Curated 10 to 30 photo displays', 'Custom themed framing & floral motifs', 'Display-ready rigidity'],
  },
  {
    id: 'specialty-casket-panel',
    title: 'Casket Panels & Specialty Memorial Graphics',
    slug: 'casket-panels-specialty-graphics',
    category: 'specialty',
    description: 'Custom fitted head panel inserts crafted to harmonize with the overall memorial design and family traditions.',
    image: POSTERS_IMAGE,
    startingPrice: 'Contact for Tier',
    businessDays: 4,
    highlight: 'Custom Craftsmanship',
    specs: ['Embroidered or high-density printed satin', 'Direct funeral home coordination', 'Exact casket dimensions required'],
  },
];

export const RUSH_OPTIONS: RushOption[] = [
  {
    id: 'rush-standard',
    title: 'Standard Production (No Rush)',
    businessDays: 0,
    fee: 0,
    description: 'Included in standard order. Produced within standard product business days.',
  },
  {
    id: 'rush-2-days',
    title: 'Rush Production (2 Business Days)',
    businessDays: 2,
    fee: 75,
    description: 'Expedited studio prioritization. Subject to LOTF scheduling approval.',
  },
  {
    id: 'rush-next-day',
    title: 'Next Business Day Rush',
    businessDays: 1,
    fee: 125,
    description: 'Immediate design and press queue jump. Subject to availability and file approval.',
  },
];

export const SAMPLE_MEMORIALS: MemorialRecord[] = [
  {
    id: 'mem-eleanor-dawson',
    fullName: 'Eleanor Grace Dawson',
    slug: 'eleanor-grace-dawson',
    birthYear: '1948',
    passingYear: '2024',
    birthDate: 'August 14, 1948',
    passingDate: 'March 22, 2024',
    photo: '/src/assets/images/lotf_posters_displays_1791608587747.jpg',
    memorialType: 'Legacy Tribute',
    visibility: 'Public',
    programUrl: 'https://simplebooklet.com/eleanordawsonmemorial',
    quote: '"Her kindness was a quiet river, nourishing every heart she touched throughout her vibrant seventy-five years."',
    lifeStory: `Eleanor Grace Dawson was born on August 14, 1948, in Brooklyn, New York. A devoted educator, choir director, and matriarch, Eleanor spent over thirty-two years teaching literature in New York City Public Schools, inspiring generations of children with her infectious laughter, warm hospitality, and love of poetry.

Outside the classroom, Eleanor was an avid gardener, baker of legendary peach cobblers, and the unifying cornerstone of family reunions. She dedicated her weekend mornings to the community food pantry and shared her melodious soprano voice in her church choir for more than four decades.

She leaves behind three children, seven grandchildren, four great-grandchildren, and countless grateful students whose lives were touched by her grace and boundless generosity.`,
    gallery: [
      '/src/assets/images/lotf_hero_memorial_1791608530319.jpg',
      '/src/assets/images/lotf_memorial_programs_1791608544288.jpg',
      '/src/assets/images/lotf_prayer_cards_1791608575934.jpg',
    ],
    serviceInfo: {
      date: 'Saturday, March 30, 2024',
      time: '11:00 AM ET',
      location: 'Grace Tabernacle Chapel, 452 Nostrand Ave, Brooklyn, NY',
      officiant: 'Rev. Dr. Marcus Vance',
      reception: 'The Heritage Hall immediately following interment at Greenwood Cemetery',
    },
    condolences: [
      {
        id: 'c1',
        author: 'Evelyn St. Clair',
        date: 'March 28, 2024',
        relation: 'Colleague & Friend',
        message: 'Mrs. Dawson was my mentor when I first began teaching in 1988. Her patience and radiant smile lifted every person in our building. Rest peacefully, beautiful Eleanor.',
      },
      {
        id: 'c2',
        author: 'Deacon James & Patricia Wright',
        date: 'March 29, 2024',
        relation: 'Church Family',
        message: 'The choir loft will never be the same without sister Eleanor leading our opening hymn. What an honor to celebrate a life so richly lived.',
      },
    ],
  },
  {
    id: 'mem-robert-miller',
    fullName: 'Robert James Miller',
    slug: 'robert-james-miller',
    birthYear: '1935',
    passingYear: '2023',
    birthDate: 'January 12, 1935',
    passingDate: 'November 18, 2023',
    photo: '/src/assets/images/lotf_memorial_programs_1791608544288.jpg',
    memorialType: 'Digital Program',
    visibility: 'Public',
    programUrl: 'https://simplebooklet.com/robertjamesmillertribute',
    quote: '"A man of steadfast honor, quiet strength, and everlasting devotion to his family."',
    lifeStory: `Robert James Miller served proudly as a veteran, master carpenter, and loving husband for sixty-one years. Born in Queens and a lifelong resident of Brooklyn, Robert built not only homes and furniture with his hands, but a legacy of discipline, integrity, and warmth that anchored three generations.`,
    gallery: [
      '/src/assets/images/lotf_memorial_programs_1791608544288.jpg',
      '/src/assets/images/lotf_prayer_cards_1791608575934.jpg',
    ],
    serviceInfo: {
      date: 'Monday, November 27, 2023',
      time: '10:00 AM ET',
      location: 'St. Augustine Sanctuary, Brooklyn, NY',
      officiant: 'Father Thomas Bennett',
    },
    condolences: [
      {
        id: 'c3',
        author: 'Thomas R. Miller Jr.',
        date: 'November 25, 2023',
        relation: 'Nephew',
        message: 'Uncle Bob taught me how to measure twice and cut once—not just in woodwork, but in life. He will be deeply missed.',
      },
    ],
  },
  {
    id: 'mem-elizabeth-reed',
    fullName: 'Elizabeth Mae Reed',
    slug: 'elizabeth-mae-reed',
    birthYear: '1951',
    passingYear: '2023',
    birthDate: 'October 3, 1951',
    passingDate: 'July 4, 2023',
    photo: '/src/assets/images/lotf_digital_memorial_1791608557041.jpg',
    memorialType: 'Legacy Tribute',
    visibility: 'Public',
    programUrl: 'https://simplebooklet.com/elizabethmaereed',
    quote: '"A life lived with gentle grace and deep, unconditional love for all."',
    lifeStory: `Elizabeth Mae Reed was known for her open door, compassionate heart, and unwavering faith. Her home was a gathering place where warm meals, listening ears, and encouraging prayers were always available to anyone in need.`,
    gallery: [
      '/src/assets/images/lotf_digital_memorial_1791608557041.jpg',
      '/src/assets/images/lotf_hero_memorial_1791608530319.jpg',
    ],
    serviceInfo: {
      date: 'Friday, July 14, 2023',
      time: '1:00 PM ET',
      location: 'Serenity Gardens Chapel, Brooklyn, NY',
    },
    condolences: [
      {
        id: 'c4',
        author: 'The Campbell Family',
        date: 'July 12, 2023',
        relation: 'Neighbors',
        message: 'May God surround the Reed family with peace and comfort. Mrs. Reed will forever hold a special place in our memories.',
      },
    ],
  },
];

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  // 1. Ordering
  {
    id: 'faq-1',
    category: 'Ordering',
    question: 'How do I place an order for memorial programs and keepsakes?',
    answer: 'You can begin directly through our guided "Place an Order" online form. You will be able to select your desired memorial items, specify quantities and formats, input service details, submit your obituary and order of service text, upload photographs, and choose delivery arrangements. Our team reviews every submission promptly and contacts you to confirm order specifics before design begins.',
  },
  {
    id: 'faq-2',
    category: 'Ordering',
    question: 'Can I order a coordinated set of matching memorial items?',
    answer: 'Yes! We specialize in cohesive memorial collections. Your memorial program, prayer cards, bookmarks, welcome poster, and digital tribute page can all share identical artwork, floral accents, typestyles, and color palettes for a unified celebration.',
  },
  {
    id: 'faq-3',
    category: 'Ordering',
    question: 'What is the order cutoff time for standard production scheduling?',
    answer: 'Our daily production cutoff is 6:00 PM Eastern Time, Monday through Friday. Orders submitted and funded with complete materials before 6:00 PM ET count that business day as Day 1. Orders submitted after 6:00 PM ET, or over the weekend, begin on the following business day.',
  },

  // 2. Memorial Programs & Products
  {
    id: 'faq-4',
    category: 'Memorial Programs & Products',
    question: 'What program formats do you offer?',
    answer: 'We provide Classic 4-Page Bifolds (8.5" x 11" folded), Classic & Premium Trifolds (6-panel accordion or letter fold), Premium 8-Page Large Booklets (saddle-stitched magazine style), Large Format Programs, and coordinating Photo Collage Inserts.',
  },
  {
    id: 'faq-5',
    category: 'Memorial Programs & Products',
    question: 'What is the difference between an insert and additional pages?',
    answer: 'An insert is an independent, separate two-sided sheet placed inside the program but not stapled in—ideal for supplementary family collages or repast maps. Additional pages are bound directly into the program as part of a saddle-stitched multi-page booklet.',
  },
  {
    id: 'faq-6',
    category: 'Memorial Programs & Products',
    question: 'How many photographs can I include in a memorial program?',
    answer: 'For a standard 4-page program with a dedicated collage page, we comfortably accommodate 15 to 20 photographs. For our Premium 8-Page Large Booklet or Large Format pieces, we can incorporate 35 to 40 photographs while maintaining balanced spacing, captions, and legible design.',
  },

  // 3. Design & Personalization
  {
    id: 'faq-7',
    category: 'Design & Personalization',
    question: 'Can you customize the colors, floral motifs, and religious themes?',
    answer: 'Every tribute is custom crafted. Whether your loved one loved royal purple, sunflowers, classic calla lilies, vintage denim, or military insignias, our design team curates background motifs, floral accents, and ornaments to reflect their exact personality, faith, and passions.',
  },
  {
    id: 'faq-8',
    category: 'Design & Personalization',
    question: 'What kinds of photographs provide the highest quality print results?',
    answer: 'We recommend submitting original, high-resolution digital files or clear camera scans. Please avoid social media screenshots, text message compression downloads, or photos taken of framed glossy prints when possible, as these can print grainy or pixelated.',
  },

  // 4. Obituaries & Content
  {
    id: 'faq-9',
    category: 'Obituaries & Content',
    question: 'What if I need help writing or organizing the obituary?',
    answer: 'We provide an Obituary Writing Assistance guide and printable worksheet that breaks down life reflections into nine manageable areas (Basic Info, Family, Life Story, Career, Passions, Faith, Milestones, Community, Legacy). Families submit completed text for placement, and our team formats and balances it beautifully into your layout.',
  },
  {
    id: 'faq-10',
    category: 'Obituaries & Content',
    question: 'What typical sections appear on the back cover of a memorial program?',
    answer: 'The back cover customarily features the family\'s Words of Acknowledgment, a closing scripture or poem, listing of active and honorary pallbearers, interment and cemetery details, repast reception information, and funeral service provider credits.',
  },

  // 5. Turnaround & Rush Orders
  {
    id: 'faq-11',
    category: 'Turnaround & Rush Orders',
    question: 'What is your standard production turnaround time?',
    answer: 'Standard studio production turnaround is 4 business days for standard programs, 5 business days for 8-page booklets, and 3 business days for prayer cards and bookmarks (Monday through Friday; weekends and studio holidays never count). The production clock begins once payment is settled and all required materials are received.',
  },
  {
    id: 'faq-12',
    category: 'Turnaround & Rush Orders',
    question: 'Do you accommodate rush orders?',
    answer: 'Rush orders are subject to studio availability and Lilies of the Field approval. When approved, expedited turnaround options (such as 2-day or next-business-day press scheduling) incur an additional rush fee that is billed separately and never added to the base product price.',
  },

  // 6. Proofing & Approval
  {
    id: 'faq-13',
    category: 'Proofing & Approval',
    question: 'Will I see a digital proof before the order is printed?',
    answer: 'Yes, absolutely. We provide a full digital PDF proof for family review. Printing never begins until the family or designated funeral director provides written final approval. Please review all names, dates, hymn numbers, and spellings carefully before signing off.',
  },
  {
    id: 'faq-14',
    category: 'Proofing & Approval',
    question: 'Can I make revisions once the initial proof is provided?',
    answer: 'Yes. You may submit revisions after viewing the initial proof. Timely review ensures that your requested adjustments do not cause delivery delays before scheduled services.',
  },

  // 7. Printing/Pickup & Delivery
  {
    id: 'faq-15',
    category: 'Printing/Pickup & Delivery',
    question: 'Do you have a walk-in retail storefront?',
    answer: 'No. Lilies of the Field operates as a specialized production design studio in Brooklyn, NY rather than a walk-in retail storefront. Orders, consultations, and proofing are coordinated digitally, with local pickup or courier delivery arranged by appointment.',
  },
  {
    id: 'faq-16',
    category: 'Printing/Pickup & Delivery',
    question: 'What delivery options are available?',
    answer: 'We offer studio pickup by arrangement, direct delivery to designated funeral homes and chapels across the metropolitan area, local courier drop-off, and insured priority shipping where applicable. Delivery fees begin at $30.',
  },

  // 8. Digital Memorials
  {
    id: 'faq-17',
    category: 'Digital Memorials',
    question: 'What is the difference between a Digital Memorial Program and a Legacy Tribute Page?',
    answer: 'The Digital Memorial Program ($50 one-time) is a clean, mobile-optimized digital version of your printed booklet accessible via custom QR code. The Legacy Tribute Page ($125 one-time, with $25/year renewal after year 1) is a comprehensive online memorial sanctuary containing the full life biography, interactive photo galleries, tribute video embed, service information, and an active condolence guestbook.',
  },
  {
    id: 'faq-18',
    category: 'Digital Memorials',
    question: 'Can digital memorials be kept private?',
    answer: 'Yes. Memorials can be designated as Public (featured in our public Memorial Garden) or Private (unlisted from public directories with an unguessable direct URL, excluded from search indexing, shared solely with family and invited guests).',
  },

  // 9. Funeral Service Providers
  {
    id: 'faq-19',
    category: 'Funeral Service Providers',
    question: 'How do funeral homes and mortuary directors partner with Lilies of the Field?',
    answer: 'Funeral professionals can register for our verified Funeral Service Provider Program. Approved partners enjoy streamlined order submissions, direct wholesale billing coordination, priority scheduling, dedicated proof channels, and direct chapel delivery.',
  },
  {
    id: 'faq-20',
    category: 'Funeral Service Providers',
    question: 'Can funeral directors submit an order and let the family supply the content later?',
    answer: 'Yes. Our provider workflow allows funeral directors to lock in production slots and core service data, while families submit photos and obituary content through coordinated links.',
  },
];

export const POEMS_AND_SCRIPTURES = {
  scriptures: [
    {
      title: 'Psalm 23:1-6',
      content: 'The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name\'s sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.',
    },
    {
      title: 'Ecclesiastes 3:1-4',
      content: 'To every thing there is a season, and a time to every purpose under the heaven: A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted; A time to kill, and a time to heal; a time to break down, and a time to build up; A time to weep, and a time to laugh; a time to mourn, and a time to dance.',
    },
    {
      title: '2 Timothy 4:7-8',
      content: 'I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.',
    },
    {
      title: 'John 14:1-3',
      content: 'Let not your heart be troubled: ye believe in God, believe also in me. In my Father\'s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.',
    },
  ],
  poems: [
    {
      title: 'Remember Me',
      author: 'Margaret Mead',
      content: 'To the living, I am gone,\nTo the sorrowful, I will never return,\nTo the angry, I was cheated,\nBut to the happy, I am at peace,\nAnd to the faithful, I have never left.\n\nI cannot speak, but I can listen.\nI cannot be seen, but I can be heard.\nSo as you stand upon a shore gazing at a beautiful sea,\nAs you look upon a flower and admire its simplicity,\nRemember me.',
    },
    {
      title: 'Don\'t Grieve For Me Now',
      author: 'Traditional Homegoing Hymn',
      content: 'Don\'t grieve for me, for now I\'m free,\nI\'m following the path God laid for me.\nI took His hand when I heard Him call,\nI turned my back and left it all.\n\nI could not stay another day,\nTo laugh, to love, to work or play.\nTasks left undone must stay that way,\nI\'ve found that peace at close of day.',
    },
    {
      title: 'A Life Well Lived',
      author: 'Author Unknown',
      content: 'A life well lived is a precious gift,\nOf hope and strength and grace,\nFrom someone who has made our world\nA brighter, better place.\n\nIt\'s filled with moments, sweet and sad,\nWith smiles and sometimes tears,\nWith friendships formed and good times shared,\nAnd laughter through the years.',
    },
  ],
};

export const ACKNOWLEDGMENTS_SAMPLES = [
  {
    category: 'Family & Friends',
    title: 'General Appreciation to All in Attendance',
    text: 'The family of [Loved One\'s Name] wishes to express our deepest gratitude for the overwhelming outpouring of love, prayers, comforting messages, floral tributes, and acts of kindness extended to us during this time of bereavement. May God richly bless each of you for your support.',
  },
  {
    category: 'Clergy & Church Family',
    title: 'Acknowledgment to Pastor & Ministry Team',
    text: 'We extend heartfelt thanks to Pastor [Pastor\'s Name], the ministerial staff, musicians, and congregation of [Church Name] for your spiritual guidance, uplifting prayers, and gracious service during our time of sorrow.',
  },
  {
    category: 'Caregivers & Healthcare Workers',
    title: 'Gratitude for Medical & Care Team',
    text: 'A very special thank you to the dedicated physicians, nurses, hospice caregivers, and medical staff at [Hospital/Hospice Name] for your gentle compassion, attentive care, and unwavering dignity provided to our beloved in their final days.',
  },
  {
    category: 'Funeral Service Providers',
    title: 'Professional Service & Guidance',
    text: 'We convey our sincere appreciation to the directors and staff of [Funeral Home Name] and Lilies of the Field Memorial Keepsakes for your professional guidance, dignified arrangements, and heartfelt support.',
  },
];
