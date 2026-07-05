import {
  FaBaby,
  FaChild,
  FaShapes,
  FaSchool,
  FaSun,
  FaHeart,
  FaMusic,
  FaBookOpen,
  FaPuzzlePiece,
  FaLeaf,
  FaPaintBrush,
  FaAppleAlt,
  FaHandsHelping,
  FaRunning,
  FaBus,
  FaSwimmer,
  FaCampground,
  FaGlobeAmericas,
  FaSortNumericDown,
  FaLanguage,
  FaSeedling,
  FaUtensils,
  FaGamepad,
  FaPencilAlt,
  FaUsers,
} from 'react-icons/fa';

const programsData = {
  infant: {
    id: 'infant',
    path: '/programs/infant',
    icon: FaBaby,
    tagline: 'A gentle beginning',
    title: 'Infant Program (Phase 4)',
    ageRange: '6 – 18 Months',
    ratio: '1 : 3 Educator Ratio',
    hours: 'Mon – Fri · 7:00 AM – 6:00 PM',
    heroDescription:
      'Our infant room is a calm, nurturing space where your baby\u2019s earliest discoveries are met with warmth, patience, and individual attention. Every routine — feeding, napping, play — follows your child\u2019s own rhythm.',
    overview:
      'During the first months of life, babies learn through their senses and through secure, loving relationships. Our Phase 4 infant environment is designed to feel like a home away from home: soft natural light, low shelves with carefully chosen materials, and educators who respond to every coo, reach, and first attempt to move. We partner closely with families, sharing daily updates on feeding, sleeping, and milestones so you never miss a moment.',
    highlights: [
      {
        icon: FaHeart,
        title: 'Responsive Caregiving',
        text: 'Primary caregivers build deep bonds with each infant, following individual feeding and sleep schedules set with parents.',
      },
      {
        icon: FaMusic,
        title: 'Sensory Exploration',
        text: 'Songs, textures, mirrors, and treasure baskets invite babies to explore the world safely through all five senses.',
      },
      {
        icon: FaRunning,
        title: 'Movement & Motor Skills',
        text: 'Open floor space and low pull-up bars encourage tummy time, rolling, crawling, and confident first steps.',
      },
      {
        icon: FaBookOpen,
        title: 'Early Language',
        text: 'Educators narrate the day, read board books, and respond to babbling to lay the foundation for rich language.',
      },
      {
        icon: FaLeaf,
        title: 'Calm, Natural Environment',
        text: 'Wooden toys, plants, and soft furnishings create a peaceful space that supports focus and emotional security.',
      },
      {
        icon: FaHandsHelping,
        title: 'Daily Family Updates',
        text: 'Photos and notes on meals, naps, diapering, and milestones are shared with parents every single day.',
      },
    ],
    schedule: [
      { time: '7:00 – 9:00', activity: 'Warm welcome, free exploration & cuddles' },
      { time: '9:00 – 9:30', activity: 'Morning snack & feeding (per individual schedule)' },
      { time: '9:30 – 10:30', activity: 'Sensory play, music & tummy time' },
      { time: '10:30 – 11:30', activity: 'Outdoor stroller walks & fresh air (weather permitting)' },
      { time: '11:30 – 12:15', activity: 'Lunch & feeding' },
      { time: '12:15 – 2:30', activity: 'Nap time (individual sleep routines)' },
      { time: '2:30 – 3:00', activity: 'Afternoon snack' },
      { time: '3:00 – 4:30', activity: 'Story time, songs & gentle movement' },
      { time: '4:30 – 6:00', activity: 'Quiet play & goodbyes' },
    ],
  },

  toddler: {
    id: 'toddler',
    path: '/programs/toddler',
    icon: FaChild,
    tagline: 'Little explorers on the move',
    title: 'Toddler Program',
    ageRange: '2 – 3 Years',
    ratio: '1 : 5 Educator Ratio',
    hours: 'Mon – Fri · 7:00 AM – 6:00 PM',
    heroDescription:
      'Toddlers are busy, curious, and eager for independence. Our toddler community channels that wonderful energy into purposeful activity — pouring, climbing, singing, and the very first "I did it myself!" moments.',
    overview:
      'Between two and three years old, children experience an explosion of language, movement, and will. Our Montessori-inspired toddler environment offers child-sized furniture, real practical-life materials, and plenty of room to move. Educators guide toddlers through toilet learning, self-feeding, and dressing skills while nurturing early friendships and the vocabulary to express big feelings.',
    highlights: [
      {
        icon: FaHandsHelping,
        title: 'Practical Life Skills',
        text: 'Pouring water, wiping tables, and putting on coats build real independence and fine-motor control.',
      },
      {
        icon: FaLanguage,
        title: 'Language Explosion',
        text: 'Daily circle time, naming games, and rich conversation grow vocabulary during this critical window.',
      },
      {
        icon: FaPuzzlePiece,
        title: 'Hands-On Learning',
        text: 'Puzzles, stacking, and sorting materials develop concentration, coordination, and early problem-solving.',
      },
      {
        icon: FaUsers,
        title: 'Social & Emotional Growth',
        text: 'Gentle guidance helps toddlers learn turn-taking, empathy, and words for their emotions.',
      },
      {
        icon: FaSeedling,
        title: 'Toilet Learning Support',
        text: 'We partner with families on a respectful, pressure-free approach to toileting when your child is ready.',
      },
      {
        icon: FaRunning,
        title: 'Gross Motor Play',
        text: 'Daily outdoor time and indoor climbers give toddlers the big movement their growing bodies need.',
      },
    ],
    schedule: [
      { time: '7:00 – 8:30', activity: 'Arrival & free choice activities' },
      { time: '8:30 – 9:00', activity: 'Morning snack' },
      { time: '9:00 – 10:15', activity: 'Montessori work cycle & small-group activities' },
      { time: '10:15 – 11:15', activity: 'Outdoor play' },
      { time: '11:15 – 11:45', activity: 'Circle time — songs, stories & movement' },
      { time: '11:45 – 12:30', activity: 'Lunch (self-feeding practice)' },
      { time: '12:30 – 2:30', activity: 'Nap / quiet rest time' },
      { time: '2:30 – 3:00', activity: 'Afternoon snack' },
      { time: '3:00 – 4:30', activity: 'Art, sensory bins & outdoor play' },
      { time: '4:30 – 6:00', activity: 'Free play & pick-up' },
    ],
  },

  preschool: {
    id: 'preschool',
    path: '/programs/preschool',
    icon: FaShapes,
    tagline: 'The heart of Montessori learning',
    title: 'Preschool / Montessori Casa',
    ageRange: '2.5 – 6 Years',
    ratio: '1 : 8 Educator Ratio',
    hours: 'Mon – Fri · 7:00 AM – 6:00 PM',
    heroDescription:
      'In our Casa classroom, children choose meaningful work from a beautifully prepared environment — mastering letters and numbers, caring for their classroom, and discovering the joy of learning at their own pace.',
    overview:
      'The Casa (Children\u2019s House) is the cornerstone of Montessori education. In a mixed-age community of 2.5 to 6 year olds, younger children learn from older role models, while older children build confidence and leadership by helping their friends. Guided by trained Montessori educators, children move freely through five curriculum areas — Practical Life, Sensorial, Language, Mathematics, and Culture — during long, uninterrupted work periods that build deep concentration.',
    highlights: [
      {
        icon: FaBookOpen,
        title: 'Language & Literacy',
        text: 'Sandpaper letters, the moveable alphabet, and phonics games lead children naturally from sounds to reading and writing.',
      },
      {
        icon: FaSortNumericDown,
        title: 'Montessori Mathematics',
        text: 'Golden beads, number rods, and spindle boxes make abstract math concepts concrete and joyful.',
      },
      {
        icon: FaShapes,
        title: 'Sensorial Discovery',
        text: 'Materials that isolate size, colour, sound, and texture refine the senses and prepare the mathematical mind.',
      },
      {
        icon: FaGlobeAmericas,
        title: 'Culture & Science',
        text: 'Maps, globes, botany, and zoology studies open a window to the wider world and spark endless questions.',
      },
      {
        icon: FaPaintBrush,
        title: 'Art & Creative Expression',
        text: 'Open-ended art, music, and dramatic play give children rich ways to express their ideas and feelings.',
      },
      {
        icon: FaAppleAlt,
        title: 'Grace, Courtesy & Independence',
        text: 'Children prepare snacks, care for plants, and practise kindness — becoming capable members of their community.',
      },
    ],
    schedule: [
      { time: '7:00 – 8:30', activity: 'Arrival & quiet morning activities' },
      { time: '8:30 – 11:00', activity: 'Uninterrupted Montessori work cycle (snack available)' },
      { time: '11:00 – 11:30', activity: 'Circle time — grace & courtesy, calendar, songs' },
      { time: '11:30 – 12:30', activity: 'Outdoor play' },
      { time: '12:30 – 1:15', activity: 'Lunch together' },
      { time: '1:15 – 2:45', activity: 'Rest time (younger) / quiet work (older children)' },
      { time: '2:45 – 3:15', activity: 'Afternoon snack' },
      { time: '3:15 – 4:30', activity: 'Enrichment — art, music, French, yoga' },
      { time: '4:30 – 6:00', activity: 'Outdoor / free play & pick-up' },
    ],
  },

  'after-school': {
    id: 'after-school',
    path: '/programs/after-school',
    icon: FaSchool,
    tagline: 'Care that fits your family\u2019s day',
    title: 'Before & After School Care',
    ageRange: '4 – 12 Years',
    ratio: '1 : 13 Educator Ratio',
    hours: 'Before School 7:00 – 9:00 AM · After School 3:30 – 6:00 PM',
    heroDescription:
      'A safe, welcoming place for school-age children to start the day calmly and unwind after the bell — with homework help, healthy snacks, clubs, and plenty of time to just be a kid.',
    overview:
      'Our before & after school program bridges the gap between the school day and your work day. Mornings offer a relaxed start with breakfast and quiet activities before we walk or shuttle children to nearby schools. Afternoons balance homework support with the things kids love most — sports, STEM challenges, art projects, and free play with friends. PA days and school holidays are covered with full-day themed camps.',
    highlights: [
      {
        icon: FaBus,
        title: 'School Pick-Up & Drop-Off',
        text: 'Safe, supervised walks and shuttle service to and from partnered neighbourhood schools.',
      },
      {
        icon: FaPencilAlt,
        title: 'Homework Club',
        text: 'A quiet, supported space and caring staff to help children complete homework before heading home.',
      },
      {
        icon: FaAppleAlt,
        title: 'Healthy Snacks',
        text: 'Nutritious after-school snacks refuel growing bodies for an active afternoon.',
      },
      {
        icon: FaGamepad,
        title: 'Clubs & Activities',
        text: 'Rotating clubs — LEGO robotics, art studio, board games, drama — let kids follow their interests.',
      },
      {
        icon: FaRunning,
        title: 'Active Play',
        text: 'Daily outdoor time, gym games, and sports burn off energy and build teamwork.',
      },
      {
        icon: FaSun,
        title: 'PA Day & Holiday Camps',
        text: 'Full-day themed programming on school closure days, so your childcare never has a gap.',
      },
    ],
    schedule: [
      { time: '7:00 – 8:15', activity: 'Before-school care — breakfast & calm activities' },
      { time: '8:15 – 9:00', activity: 'Walk / shuttle to school' },
      { time: '3:30 – 4:00', activity: 'School pick-up & healthy snack' },
      { time: '4:00 – 4:45', activity: 'Homework club & quiet reading' },
      { time: '4:45 – 5:30', activity: 'Clubs, gym games & outdoor play' },
      { time: '5:30 – 6:00', activity: 'Free choice & pick-up' },
    ],
  },

  summer: {
    id: 'summer',
    path: '/programs/summer',
    icon: FaSun,
    tagline: 'A summer they\u2019ll never forget',
    title: 'Summer Programs & Camps',
    ageRange: '2.5 – 12 Years',
    ratio: 'Age-Based Group Ratios',
    hours: 'Mon – Fri · 7:00 AM – 6:00 PM · Weekly Sessions (July & August)',
    heroDescription:
      'Splash days, nature hikes, science experiments, and new friendships — our weekly themed summer camps keep children active, curious, and smiling all summer long.',
    overview:
      'Each week of summer brings a brand-new theme — Under the Sea, Space Explorers, Mad Science, Around the World, and more. Preschoolers continue their Montessori routine with a summery twist, while school-age campers enjoy field trips, water play, sports tournaments, and creative workshops. Families can register for individual weeks or the full summer, with early-bird pricing and sibling discounts available.',
    highlights: [
      {
        icon: FaCampground,
        title: 'Weekly Themes',
        text: 'Every Monday launches a fresh adventure — from dinosaur digs to superhero training academies.',
      },
      {
        icon: FaSwimmer,
        title: 'Water Play Days',
        text: 'Sprinklers, splash pads, and water games twice a week keep campers cool all summer.',
      },
      {
        icon: FaLeaf,
        title: 'Outdoor Adventures',
        text: 'Nature walks, gardening, scavenger hunts, and park trips connect kids with the outdoors.',
      },
      {
        icon: FaPaintBrush,
        title: 'Arts & Crafts Studio',
        text: 'Painting, clay, tie-dye, and take-home projects tied to each week\u2019s theme.',
      },
      {
        icon: FaPuzzlePiece,
        title: 'STEM Discovery',
        text: 'Hands-on science experiments, building challenges, and coding games for curious minds.',
      },
      {
        icon: FaUtensils,
        title: 'Snacks Included',
        text: 'Two healthy snacks daily, plus special treat days like ice-cream Fridays.',
      },
    ],
    schedule: [
      { time: '7:00 – 9:00', activity: 'Arrival & free play stations' },
      { time: '9:00 – 9:30', activity: 'Camp circle & morning snack' },
      { time: '9:30 – 11:00', activity: 'Theme activity blocks — STEM, art, drama' },
      { time: '11:00 – 12:00', activity: 'Outdoor games / water play' },
      { time: '12:00 – 1:00', activity: 'Lunch & chill-out time' },
      { time: '1:00 – 2:30', activity: 'Rest (young campers) / workshops (older campers)' },
      { time: '2:30 – 3:00', activity: 'Afternoon snack' },
      { time: '3:00 – 4:30', activity: 'Sports, group challenges & special guests' },
      { time: '4:30 – 6:00', activity: 'Free play & pick-up' },
    ],
  },
};

// Handy array for "Explore Other Programs" sections
export const programsList = Object.values(programsData).map((p) => ({
  id: p.id,
  path: p.path,
  title: p.title,
  ageRange: p.ageRange,
  icon: p.icon,
}));

export default programsData;
