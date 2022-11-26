import * as Icons from 'react-icons/md';
import * as Icons2 from 'react-icons/bs';
import * as Icons3 from 'react-icons/fa';
const logo_Source =
  'https://images.pngnice.com/download/2100/Gym-Silhoutte-PNG-Photo.png';
const banner1_Source =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Ffitness%2Ffitness_PNG45.png&f=1&nofb=1&ipt=de1588d591e4f78a0391c852af9574f8db507d75f3181c3952e52f672623ec3c&ipo=images';
const Icon_Search = <Icons.MdSearch />;
const Icon_Menu = <Icons.MdMenu />;
const Icon_Close = <Icons.MdClose />;
const IconDarkMode = <Icons.MdDarkMode />;
const IconLightMode = <Icons.MdLightMode />;
const IconArrowBack = <Icons.MdArrowBack />;
const IconsArrowForward = <Icons.MdArrowForward />;
const IconsListOfBodyPart = [
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2FWoman_Running_Emoji_Icon_ios10_grande.png%3Fv%3D1542436017&f=1&nofb=1&ipt=7753afe5266fdfd946fb6682d79590ec6d796989206357266bb1a0dd6af872cd&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fweightlifter-png-hd-weightlifting-zeppelin-logo-request-by-foutley-pluspng-com-weightlifting-png-1000.png&f=1&nofb=1&ipt=5469b01f813cb1b246943f81f7667ecad448896b1007cddb275c70d79b1f151e&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fimg%2Fweight-lifting-silhouette-vector-4.png&f=1&nofb=1&ipt=13b4618467441d65be832c8402e9938cc14280b4e1df1ac2b1daff38d83edd54&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficon-icons.com%2Ficons2%2F847%2FPNG%2F512%2Fweightlifting_icon-icons.com_67203.png&f=1&nofb=1&ipt=a2c56c11c27a1ec7ed7ceadfb305fd3411e5cf77382642dd8a7a54caf86a36d3&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stretchmarks.org%2Fwp-content%2Fuploads%2F2016%2F08%2Ficon-bodybuilding.png&f=1&nofb=1&ipt=3da7f7d55aa81ff6bef46bce7f8c8710fff061b17c0d550b3f84c9ee082e428d&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fdumbbell-clipart-weight-lifting-18.png&f=1&nofb=1&ipt=ea00c907a141082477f1614fa88bc08051235e4906950218191cf9ddd15f6016&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F561-5613768_bench-press-cartoon-png-clipart.png&f=1&nofb=1&ipt=a8cb842a014f5ffe99d28d77254482513d8ad7023df98b5ea477bfba73e3741a&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fnew_gallery%2F362-3625158_weightlifter-tr2-cartoon.png&f=1&nofb=1&ipt=7473c178da31dee6b01592ac691ccad0b5569571f08aacfb7044d016822a28e8&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimage%2Fmuscle-vector-24.png&f=1&nofb=1&ipt=069e957f021ab4ac025b5d2942e12c892c9c6e05d8a59240b22285f6dc606633&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F565-5657687_fitness-clipart-balance-exercise-fitness-balance-exercise-exercise.png&f=1&nofb=1&ipt=37a3ba9ef5e21614df39bb26dd441e6caa4f2fda6a6727772b3570233401ad94&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fweightlifting-png-there-is-a-human-figure-standing-with-its-arms-extended-over-its-head-and-its-legs-png-50-px-1600.png&f=1&nofb=1&ipt=53015f1c282eb665a66975a37a3636aa6003e0d31943d09bb013dd85ee47fbbd&ipo=images',
];

const dataOfRouterLinks = [
  {
    name: 'home',
    to: '',
    icon: <Icons.MdHome />,
  },
  {
    name: 'help us',
    to: 'helpus',
    icon: <Icons.MdHelp />,
  },
];

const listOfEquipment = [
  'assisted',
  'band',
  'barbell',
  'body weight',
  'bosu ball',
  'cable',
  'dumbbell',
  'elliptical machine',
  'ez barbell',
  'hammer',
  'kettlebell',
  'leverage machine',
  'medicine ball',
  'olympic barbell',
  'resistance band',
  'roller',
  'rope',
  'skierg machine',
  'sled machine',
  'smith machine',
  'stability ball',
  'stationary bike',
  'stepmill machine',
  'tire',
  'trap bar',
  'upper body ergometer',
  'weighted',
  'wheel roller',
];

const listOfTargetMuscle = [
  'abductors',
  'abs',
  'adductors',
  'biceps',
  'calves',
  'cardiovascular system',
  'delts',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'levator scapulae',
  'pectorals',
  'quads',
  'serratus anterior',
  'spine',
  'traps',
  'triceps',
  'upper back',
];

export {
  logo_Source,
  dataOfRouterLinks,
  Icon_Search,
  Icon_Menu,
  Icon_Close,
  banner1_Source,
  IconDarkMode,
  IconArrowBack,
  IconsArrowForward,
  IconLightMode,
  IconsListOfBodyPart,
  listOfEquipment,
  listOfTargetMuscle,
};
