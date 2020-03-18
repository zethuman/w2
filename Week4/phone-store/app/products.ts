export interface Product {
  name: string,
  price: number,
  description: string,
  rating: number,
  img: string,
  url: string
}

export const products = [
  {
    name: 'iPhone X 256 GB',
    price: 629,
    description: 'iPhone X features an all-screen design with a 5.8-inch Super Retina HD display with HDR and True Tone.',
    imgUrl: 'https://thegoodguys.sirv.com/products/50050727/50050727_535681.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
    aliexpressUrl: 'https://aliexpress.ru/item/32952258136.html?spm=a2g0o.productlist.0.0.6fa37fe74itsFR&algo_pvid=90254268-1916-48a8-9098-95808c7926f5&algo_expid=90254268-1916-48a8-9098-95808c7926f5-0&btsid=0ab6d69515814952575847404eec01&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 4.7,
  },

  {
    name: 'Samsung Galaxy S10 Plus 128GB Prism Green ',
    price: 559,
    description: 'This prism green Samsung Galaxy S10 Plus has a 6.4 inch Quad HD Infinity-O display so videos, shows, photos and movies fill the front of the phone for a cinematic experience.',
    imgUrl:'https://thegoodguys.sirv.com/products/50064324/50064324_605474.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
    aliexpressUrl: 'https://aliexpress.ru/item/4000459786332.html?spm=a2g0o.productlist.0.0.2505790av6bc8d&algo_pvid=61885515-e541-4f16-8e7c-fad147e2b760&algo_expid=61885515-e541-4f16-8e7c-fad147e2b760-0&btsid=0ab6d69515814952566227329eec01&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 4.9,
  },

  {
    name: 'Apple iPhone 7 256GB - Gold',
    price: 330,
    description: 'iPhone 7 features an all-new 12-megapixel camera with an /1.8 aperture for great low-light photos and 4K video. Optical image stabilisation. ',
    imgUrl:'https://thegoodguys.sirv.com/products/50035051/50035051_529913.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
    aliexpressUrl: 'https://aliexpress.ru/item/10000004911346.html?spm=a2g0o.productlist.0.0.4d09ae6cv8GhVz&algo_pvid=09302757-d255-4080-9d04-d0f1f5f17121&algo_expid=09302757-d255-4080-9d04-d0f1f5f17121-0&btsid=0ab6fb8815814944338997720e151d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 5.0,
  },

  {
    name: 'Xiaomi Mi 9 Lite - Blue',
    price: 330,
    description: 'Large 4030mAh battery is sufficient for up to 2 days* of normal usage | 18W fast charge can quickly restore full power.',
    imgUrl:'https://img.mvideo.ru/Pdb/30046147b.jpg',
    aliexpressUrl: 'https://www.aliexpress.com/item/4000228044743.html?spm=a2g0o.productlist.0.0.240a76e1dhCebf&algo_pvid=34e9213a-0536-41fe-a8a0-55c6683f70d7&algo_expid=34e9213a-0536-41fe-a8a0-55c6683f70d7-0&btsid=0ab6f83915815003894573126e14f1&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    rating: 4.9,
  },

  {
    name: '7T Pro 5G McLaren 256Gb',
    price: 843,
    description: 'The OnePlus 7T Pro 5G McLaren delivers a next-level viewing experience, thanks to its smooth 90Hz display. ',
    imgUrl:'https://alfa.kz/files/alfa/messages/thumbnails_452x339/1/4/5/5/6/14556950-oneplus-7t-pro-dual-sim-mclaren-edition__1_.1574843071800_957851.jpg',
    aliexpressUrl: 'https://aliexpress.ru/item/4000334933480.html?spm=a2g0o.productlist.0.0.12ba7251krZwj7&algo_pvid=6c6e0811-eb93-43ef-bcc8-42fb8ba6a946&algo_expid=6c6e0811-eb93-43ef-bcc8-42fb8ba6a946-1&btsid=0be3769015815008623966160e337a&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 5.0,
  },

  {
    name: 'iPhone 11 Pro - Silver',
    price: 1424,
    description: 'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. ',
    imgUrl:'https://object.pscloud.io/cms/cms/Photo/img_0_77_2147_1.jpg',
    aliexpressUrl: 'https://aliexpress.ru/item/4000200667700.html?spm=a2g0o.productlist.0.0.cf653680U4DXkv&algo_pvid=d7952b2a-8598-48c9-9a90-1acbfe355d38&algo_expid=d7952b2a-8598-48c9-9a90-1acbfe355d38-0&btsid=0ab6f82215815016321493068e26cc&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 4.9,
  },

  {
    name: 'Pixel 4 - Just Black',
    price: 390,
    description: 'Pixel 4 is the phone made the Google way. Its camera takes the perfect shot every time, even when it is dark out',
    imgUrl:'https://www.mrfix.ua/media/product/153693c95/google-pixel-4-6-128gb-clearly-white.webp',
    aliexpressUrl: 'https://aliexpress.ru/item/4000335620138.html?spm=a2g0o.productlist.0.0.1f1611a2JM8OAJ&algo_pvid=4846ce7a-d189-4b4d-8142-ddb1daf9ba41&algo_expid=4846ce7a-d189-4b4d-8142-ddb1daf9ba41-0&btsid=0ab50f6215815021259302275ea512&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    rating: 5.0,
  },

  {
    name: 'Apple iPhone 7 Plus 256GB - Black',
    price: 320,
    description: 'iPhone 7 Plus features 12MP dual cameras with 4K video, optical image stabilization, and Portrait mode. A 5.5-inch Retina HD display with wide color gamut and 3D Touch. A10 Fusion chip for high performance. ',
    imgUrl:'https://apollo-frankfurt.akamaized.net/v1/files/ux1snxe7ojkh-KZ/image;s=644x461',
    aliexpressUrl: 'https://aliexpress.ru/item/32979565350.html?spm=a2g0o.productlist.0.0.14b56d53vn9wcI&algo_pvid=a8c60917-7eb3-4cc0-86e6-82f493d7a41f&algo_expid=a8c60917-7eb3-4cc0-86e6-82f493d7a41f-0&btsid=0ab50f6215815024874147210ea512&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    rating: 4.7,
  },

  {
    name: 'Google Pixel 3a - Black',
    price: 318,
    description: 'Get more done with Pixel 3a. It has an extraordinary camera with features like Night Sight, Portrait Mode, and unlimited storage at high quality with Google Photos.',
    imgUrl:'https://avatars.mds.yandex.net/get-mpic/2008488/img_id8655972710144304538.png/9hq',
    aliexpressUrl: 'https://aliexpress.ru/item/4000290157900.html?spm=a2g0o.productlist.0.0.73776bbayyjYYe&algo_pvid=6a60e91e-20c7-4424-80d2-e17278622272&algo_expid=6a60e91e-20c7-4424-80d2-e17278622272-0&btsid=0ab6fab215815027390488156e951b&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 4.4,
  },

  {
    name: 'Apple iPhone XR 128Gb - White',
    price: 762,
    description: 'iPhone XR features the most advanced LCD in a smartphone—a 6.1-inch Liquid Retina display with industry-leading color accuracy and an innovative backlight design that allows the screen to stretch into the corners.',
    imgUrl:'https://object.pscloud.io/cms/cms/Photo/img_0_77_1740_0.jpg',
    aliexpressUrl: 'https://aliexpress.ru/item/33014813526.html?spm=a2g0o.productlist.0.0.58bc26e1MisHWa&algo_pvid=14c52521-4584-4c2b-a120-80c11179c281&algo_expid=14c52521-4584-4c2b-a120-80c11179c281-3&btsid=0ab6fab215815028973904467e951b&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    ,rating: 4.6,
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/