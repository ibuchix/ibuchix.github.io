'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9094aacdae789dccd67fa32109ff1a18",
"favicon.ico": "0e59b6772616679623a66d30e99989ec",
"index.html": "6b55690c195a85ce0e5f14162e3515ea",
"/": "6b55690c195a85ce0e5f14162e3515ea",
"CNAME": "64e106be54e198b91c4b10660b2cfea8",
"main.dart.js": "06dfc763416e336b613d17cdc83262ed",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "390af0b5b071f206e95717c06fe07e8c",
".git/config": "6d028d92601a357b7f196bf90cdc500b",
".git/objects/0d/2dc3bf621fe6c903416ad0fa37fb0f12ab36e2": "8bfd72aff16963f1844c06eefaf31a57",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/b5f350307cf0507ebfe31f7af2c79c9474c4d3": "f8c7cc62936fdacbcbbfa4a19ffb8bf8",
".git/objects/59/43065f2f409f01e6c54703a37291591c76c418": "71456a208929f1e8691d26b9bf23ac1c",
".git/objects/3e/92bf68d39f04a4eb8f258da0954d5fb0ec7bfa": "79c4f08a44618681d5afdd02db7624aa",
".git/objects/50/8b9ab22a6fa2381a2704284594149a6b582969": "6ef0c4e5623634f0bc78ec1b125e5d39",
".git/objects/50/20df6a527ed65ba55240b14c67af7d44d7d572": "1bf9e5b3559ed887ea002545d954dc96",
".git/objects/68/389ec411d67c4b2d75932f1cfb4fd3edebf95b": "bb34f29adee3c23cfc7f94206a83d6e5",
".git/objects/68/177e6961048d49bdffa1017188f7ca1c2a37bb": "4b045a5cf1f01336d57637707d2073fe",
".git/objects/9b/1267c5caa7e1d619bf9bc37f32b42df9ac1a58": "6289582b12d9c0c88730ef8095d7227e",
".git/objects/9e/862e8d0836bad772a958672a2786d48239633e": "91364a46d2114edb2b23d64819cd2f13",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/35/e5930919848bbdd671cb6b81eeec77ddc9bf43": "454a48682a74a137e8a39f74a50c5909",
".git/objects/35/c7cb6ae68e3fb7a8e2870638e12d3b704da2e8": "d4692c27ec1b9d52a0d34568e5792055",
".git/objects/69/b865251954ca90982ea027c1b1d697239514c9": "652b824162fe354da98a0e0295a5a3bc",
".git/objects/56/8dd725c7ef74b396aa92e6d3d3a42d2d711038": "4fc18abd7d6d6152f989a67a9ca30293",
".git/objects/56/419b72c8865e47dee5cd08987d5a2f13fc2147": "eb02bd0563aa22e4bfd55407dc099ec0",
".git/objects/67/607b711859bea4f1535dd7f868e28767597e29": "35b2655dbfb1750fa237c61bb0bc7cba",
".git/objects/94/1c1553ce423b6b6a0668cda2b745699dbd42b0": "dbcc4b9fc846e57fdcd1cd614c142e8a",
".git/objects/60/c66da721e0c017b6503d821502b56f40e5f25e": "36d486aacf8db15ff06f11244f5f9bf8",
".git/objects/5a/ff072e364461f0dc005605b9805a555bc78cb0": "3834e34e499030d371b9fbae679d5205",
".git/objects/33/4ea682fa615eb95a24318315fac5135759d65c": "236541eb3de0b7a6411dc8c75fd65dbf",
".git/objects/05/3b20eb2886151f5c1efddf5cb7372ee458222c": "8b9d2779373851cfae4f52bd50f1aeac",
".git/objects/9d/bdbafd55b1353036d7a614165f870c62def8ed": "1936e24eb24b25bf85939ab6301905cf",
".git/objects/9d/df678ee07e3cab4fc0d9f7ee6d7259446a263d": "9cd8a21f46ee7d8cec992bdbb3bcbc66",
".git/objects/9c/29e431a36e82ff91be05d8de0aad50c17deb4c": "2958e10c3e5c4130fbfe6118edb27f22",
".git/objects/02/71341760f1c9df06ecee4d2131ace0b8bd6255": "aa006a763faca123caff1a6729473ceb",
".git/objects/02/eb0fde822ba66b7bf3ec3d056aad046902ffef": "683dfd079eaacbe0be82edf894fe8bef",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/d353712a1165626a86c2d35a269148c9b63689": "bc045a286b59bccc384f005a4499a966",
".git/objects/ad/22b7960946a4996636c7b41c1a10123bdaf940": "ec27f944495b15687f7a8da3020b23c1",
".git/objects/ad/65cd93b2a50eff7667da3c969a3747344c9009": "634f3a84b6816f4648e1564413308b33",
".git/objects/bb/d2da8b4a22cf3063aba711ba5cc2a941d56f2f": "751a5d74eb1580356ff0f130e1f1e74a",
".git/objects/d7/19890f95a37eaf8bd8d772d609fb9a87187099": "b2130e90c6afbbedfde01d73797c75c6",
".git/objects/d7/457ae8db589b8990931a295c4840240c0180cd": "24f566385ca093c6f71b01e441f7b0c2",
".git/objects/be/feda0301cab0ebcb5e76231dfc1f91b062f54c": "338e9bead610f3c7935faf6a3f4e7b20",
".git/objects/df/80e20e647910ec21eb7e35fd9e24d5ce1b4046": "f1af4109e44092d73f861ff25e6ce88c",
".git/objects/df/ffadd7181f4c76a2588541fc1cec25cd01c219": "feb08fc07e3c81e3c8d23ce831dfd046",
".git/objects/da/f911c9c4e2979435036af57cb1bc046565e727": "ec97ffa0408ec01931563e614d0a674b",
".git/objects/a5/1473ff112c3975f6b12f57df64ade1ce2ce548": "1fcf569d75fb2a2519772fa234793d53",
".git/objects/bd/45072cb92b359e2a622670210e4907817b25df": "e918e231bc5fc82318e969c7132f5c8d",
".git/objects/ae/c58bb1d90a6eda6b59398139bdbc53d959749d": "d21236f596d29357d52342d94bce5f71",
".git/objects/d8/7ff5390d51ed60c923910fe757befd6d3f4276": "c9c46a264ae9e65da7bc78c11c13bdc9",
".git/objects/d8/6db3450396bdfff2e047efabc948f6e8c8e60f": "68209be029227fc2bc9314dd8ae30a16",
".git/objects/e2/770f1ea9a16618182923c03cda447069ce0cd7": "0d12f8d056e19442b43597408a7b7cc3",
".git/objects/f4/bef8dfa9842c3213cded8573a56d74942cf619": "ace09ba52ba1e0f7e3a3fa6619664101",
".git/objects/eb/b87dfd909abc2abf9d4e5f4410ebc4e5b568cc": "9228136a2d5682a78c358b7148793678",
".git/objects/c7/fc3f9bd365af7214ba64439211572941682bed": "ecb5abeed34a00b817bad9f8538f5ae5",
".git/objects/ee/b0635af79d2de42d0462fa121db1f6eae613e0": "73b3d053cba6c372c7b3b13f5c7948a2",
".git/objects/ee/fc2eb7ac3d20e9c4e10c89250fafbb1d67de8c": "359cdc95f92ce06adf0077bbe6747976",
".git/objects/f5/182985701183d5663a3b7caaf8e9288d3466d3": "9f60361566c0aaa3540f1f0f99342bbf",
".git/objects/e3/c9b5bada20af0bf4d54c9821c5ccabfb2f2b57": "dd11eb953fd9626e4fc01825296c2892",
".git/objects/e3/d62e61d13cdf09dd5b1268bdf84e92cf3283af": "6edacd37136d66acc79ce2de4fa2ab1e",
".git/objects/ca/8522bec32c2d40167a94161cfa96cbfb81e211": "84f3b79115cf835813dacf384fb53975",
".git/objects/e4/e7dcf8440bd3b219e780778af2bc5c6c5cbc5b": "e38f49055148ca79fd50a0351fc87e42",
".git/objects/fb/7874d38523588c25a79f4104dad5128335c578": "5f40733bb202d5858c19fd0b047ff2bd",
".git/objects/ed/b2cc68143c0079bf695934c3f8b5681eadf2d7": "c946e9edfe749e122e7f5c7caa31be27",
".git/objects/ed/4dc795e9f06f6430db8682b2bb2a9e846d1593": "24f6a9d050f25be678e589fa791f6c69",
".git/objects/c6/25a1cc70fb3ada69bd23792969d926243130c6": "d50336a471b08297104e01db86741e31",
".git/objects/c6/16363ea0f8b0102a1f3ff7595b94793f170aab": "9b3ddd6bdd65b2dbfe146ea5c1dccd73",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c82c05b2e6b13d9be7c5ff50b8d9b3a4ad3534": "48940dee45410888b9d63dedabaf08fb",
".git/objects/27/1edd48d61a90410df54624b67c03e1a8a29686": "01502b86fc763a3bba9d8aa563cec220",
".git/objects/4b/bc4ede8315baf667fdf4d409f69593f7c829fa": "bf30d4d9ebc13173d5ebe3fda47f4a9c",
".git/objects/pack/pack-8ae3b00687b7cf85d0ab73c94bb100c8638b1b05.pack": "4f7c517f6c88f99eecbdfd16201571dd",
".git/objects/pack/pack-8ae3b00687b7cf85d0ab73c94bb100c8638b1b05.idx": "1330c70b4efcede3be4ed8efd6cca341",
".git/objects/7d/04684fab4001619366fcfda62def8ca25e8bab": "eda4074dad0b0e232226abd1dd86f976",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/bcd583ce398bfc73106daa732130310d3ff62e": "8b7f2b288998a193b34761dc07483d2f",
".git/objects/87/ba769d1eaba1531f9837810518c5f2cd6eb5c8": "a5080b4b2884682ea31c076e7227894e",
".git/objects/74/ed2262e93d088289e613d0e3ffab79f3406ea8": "134566e0bf7faa5b71c3f036f3723e4d",
".git/objects/28/da59be88801b1abcc9b1b3302b323d98212b98": "e1921a946dfea5190a659f7f35d7f9ed",
".git/objects/8f/bf6e41c702b0e97686c8e8d864a7b5e04d30c7": "2c5d0f41503168a02423d9a25699b188",
".git/objects/10/c47d588263cb4ec75515199ec805e1a050efb2": "b2eb7cfacd0201c3c62f047c6c333361",
".git/objects/19/be80ff5f6dcde36bf1c106477e9868a68ec390": "d98ec36ea37e83b03ada7acbac21efac",
".git/objects/26/3f77260eedfd7c44cfbfeaf693993b668ac520": "eb603bfe92289f532c956554be4c9b38",
".git/objects/26/83c0c6eecbae5a8f7590d2491c871b8892e6ea": "717d0d88599ff8405bbaba462851d676",
".git/objects/26/1c7a5081a5a31e4ccf6a155e6b220c973b3e0d": "beaf26b67ba526dae50b0e3df5e790ea",
".git/objects/21/77f4dc4effb5823a92a088f7b83f437aa1405f": "80b5caee1b85e89aeff3cb0a73555525",
".git/objects/4d/2f02b602dc52498b6a23cc1ba00d8902a87c69": "758a48a2608dd9ef0454c251cde99ec7",
".git/objects/75/2311a57c806b2e604a9e4964ba8f60b2ac9c3c": "8695b5eb2bf9c116612d61b692f3a073",
".git/objects/81/4d7d51e187ae52884223a2ff23945a6bd90694": "bbdf2e058504ead8fbf6c97cc4d8de26",
".git/objects/44/8f63fec64ebc3e5260372c26d208df286ac948": "79bb5c404d60df7d872311b11c591422",
".git/objects/44/65afea0d6bd64a7b1ae2e579c93b182156aec4": "11c5d10902e0fe7630e1e5be399140f9",
".git/objects/44/2fdbe300ff3912d2c6180c64d8037b0b7dfc1d": "17eda0bb1e7cc89069f15d4d22ed696a",
".git/objects/2a/a31994601d22758d55784904a3d33f9a42051e": "b6a8d68673ece50c44302b85a98e9a57",
".git/objects/43/6c7f1cde6b7db23fae9d4f947369b213e4db98": "5b0bfb55543e855f7b1217de2ca4bb80",
".git/objects/88/4fa448588fe8cb8c195c49601cde0561ea6155": "bc1bcf81ff61f662d66836d4e1873ebe",
".git/objects/9f/27c8db025311b2857d7f07a098f8776d866e36": "e11927e4209d1d47f8930051e2dff68d",
".git/objects/9f/763db97e89773cdf29380f6bf223e1600ad2bb": "057d7afd8b1f7ff974bdcd58edceb68e",
".git/objects/6b/93223c8d48afa483ed133c2e2221d701e28d79": "a43adf3e41a6c7d09e0f61efd8f14b59",
".git/objects/07/fc68fe3a982db8c29d94789caab52dbb6cfd13": "edfba5fd6c266873441c473e008eb73f",
".git/objects/07/4857857ea9ae879e5a1cd0661f081eea8add99": "d6d425ace2d80893bc8ffe58916f7818",
".git/objects/38/546a64212e04a59e0e66ff41740f19530cf99d": "ee0dfae56822b5c4890ba297aac741d5",
".git/objects/6e/ffa635c5319b768f0b1a5f5049bb5d84be0655": "30855d661b5ce66cdc785a5662d50961",
".git/objects/5c/7ba12ccb23369a3f95491d641d4a4bb3ae41c9": "22ab78c949badcad146899d00226e351",
".git/objects/5d/e74bf7c03c2a191093b1c8d6ed03b700586eab": "57e1012074de3238142cd6ebb5b70126",
".git/objects/5d/68b1ea3286968661bce96d2465bfc62ef8376c": "076632c228084323a6271b9b6d56914b",
".git/objects/3a/e2d7de8163356efc7c605bfc15ab47ab47c88f": "8b64e41a28f01d3c008207a11e1832bd",
".git/objects/3a/c9124b7602877a9ad93ad248768f7647d134ed": "e57c474b159a98d2070afec1fba67327",
".git/objects/98/7af3f21d9fd50bdda12c529581ef701f643ffc": "ac09b5b39a87fd60321d9544a0e18275",
".git/objects/53/85bbc4dd2f4111e58e23a348d5f67c11533cc3": "e55bc204537a2ac5d406f78f4d6036cb",
".git/objects/53/7e90082c50f6bfe281750a48d524cfb4e2d484": "eaa174434808954d8962ef1762a3571b",
".git/objects/53/de960585bf33afcecd4bc316ce7bfd5878a923": "f81d7b0355be604ad6d65abe1949d1b2",
".git/objects/30/a3a8b47b53a80e5a24ab67c5e85414960e34d0": "9d910201a384a836a17274881d47e83e",
".git/objects/5e/da17512b549a61b6c591259110fc03d7e9d77d": "14c317a1398409bfd5d62c7c37336e33",
".git/objects/5b/92d031cb0cc42a9f4363f0232946258c832f14": "6eb954760cc5ec20f1d17c443fc45f58",
".git/objects/5b/7489a9f11fd651d48abb16ce2af9db08510e28": "09f155ce398631b40e973ddb6fd776da",
".git/objects/01/e6dc1da94b7944507c114ca4e624a23679f110": "8204fd1979329509d37d5fba6b9be824",
".git/objects/6c/cf09b88956aa2337548866f3b36f19212a95a6": "686f9694a815fd1330b519e3f7453882",
".git/objects/99/848a618aa583f7e915418e891711b08d95629d": "f49236f1419a726147dd2912906a3232",
".git/objects/99/543cd076b9b24319c79f96493312248a3c3b3e": "96cd8e80bbf038b498558797c2f7931a",
".git/objects/52/7abf65ea9a89820156d55cbe53b62900e5aca4": "ec676aaa07acd13497ead45dbf604acd",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/2d298778e3b061e80eba0f7a1f33080a31e85b": "465b356e0dcc150291a3706dad57982e",
".git/objects/55/40c444f8575b9ce46622e0903c1a787c10d829": "9d81ee3ddc4de7cac20469a024318d8e",
".git/objects/63/af08f8d9e2cb2a78dfb56cc9d386b41e683de6": "78f1d9220bcc20970fc014a235877ac1",
".git/objects/0a/d8488d276c1f9c34d808356a0f1d3f63cf999b": "15ea4bc97c6a3cb4ecf3969b25b0877b",
".git/objects/90/1b9161ca9543bc002ec4d926eeee9fd6fc5825": "6412aece8e3c6c3159ddfb6151cf8e97",
".git/objects/90/a279ccc2aab57152646222515f675accac337a": "9b0175831ba4bcb8bf29558234b5649f",
".git/objects/bf/626eee48f1e8e8e4b946c559f31d5a602360b1": "2074cd8ede0f866d46279c31ac212839",
".git/objects/bf/9ce42e27a073e9819d6278ab5adc61bdae8dc2": "7554caa8dc7b823744ea31e7f9d35450",
".git/objects/a0/f6055667c223804bd1d2a6bbebf01985212a04": "0e5a3d27ebc8dd5daeef1a74d78668c9",
".git/objects/a7/9f6f287ea7eb10415298f42903ea983a7c27a4": "aa042ace3f689ce01b2d4f833785789d",
".git/objects/b8/2b137e15d7b18e59045e0fe81c56ff6f331099": "8e786ad328be28de4693c7bcf89f9a24",
".git/objects/b1/a14c771e93bca4b9c9cae66e04c7d9a67aed81": "29e6b0efbbf2253ef85a42d3bc8de35b",
".git/objects/b1/f598e9e9cee84793363c38f9995a4264fdcee7": "4edc22113ecf3f9c7c06b22a003de5e6",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/d5/702bf70f64b143ff81d8c08f80060453889f97": "1c90d91fcc6b63d1a96d6158e6cbf8bd",
".git/objects/d2/5ebf8ee223a3039d27a9134510120936aa55a7": "f9a4036936a378135fe841a202f8616d",
".git/objects/aa/0a3ca8d6e87acca2ee72a23140cb6d4a53da7a": "8e5918ec1186ea41359dbfb42920d788",
".git/objects/af/5e1ad3a8cf481b7cd186436908c693acd24b46": "58400a2a40ff00abd8b2b4be7d9553fe",
".git/objects/db/d46629b0ecd6f2c0729f2d22a5e5477e3f0757": "83c5aa25c632b66beaf77bb469253448",
".git/objects/db/8979a49cc5833357c6dea10c263e2ab3433770": "d4f960a41703f63fc7df978db297d796",
".git/objects/a8/e5e14d7832ce81e478b0f93a10f73df0c4b970": "0be9366f8b583af0ed52625da2582b84",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/c3/8ff74f6fb43d5090160ed9a3833871583817f2": "0cf67d169d21731b8275767b1734ed22",
".git/objects/ea/35b03aab21ef1130abf2d7c22ba3723c41d545": "efe346e55c6816558c93dd6fb5c381af",
".git/objects/cd/c4ed0b0fc009a6c3f73c34634c5ff098c1ee60": "8fd072a900d0a9f659e2595819934b51",
".git/objects/cd/d408d61bab0f24ebc16400fa8f465481512468": "6393b9b3d916637874ddfc096879f309",
".git/objects/e6/8eade9d9b4ed5a352a7a46f50c82d804b1bc6c": "4807bbc762a16757db30fb7cdf88102a",
".git/objects/f0/ac45191f08831f0cba298f94e3dd1bda4fd5fe": "49074a9c313f04f030fabd73ca34df64",
".git/objects/f0/39db596930490bc27f91ca6cb3dc1a24cc787e": "131c63189d32e63b69834fa13b3284d0",
".git/objects/f0/24e972ba6884f3cc952f2dea26da4ad5aeaa71": "d76fa75f32af787bbfef330fa9ca745d",
".git/objects/f7/48975a55cb860581402b9916eb957982244eb1": "5b89fe1a9d82b93ade1ec75bb974f736",
".git/objects/f7/2adb1a1ac456800993e8acea98da23fcd1a298": "afdc80281c3c93c02b5e2d538637ffe3",
".git/objects/f7/4c7e851994709cc29e4bb8f47fbb6d21a6d414": "ab5a5a4896a6909ec791959f462e6e72",
".git/objects/fa/691a31e934594414b6f5920a57f206f1229d35": "4cfcfbef836a251bdeb3e3b0629590a7",
".git/objects/c5/638d1fdc3ade567c3d6f07549164b9eebaae33": "d8ff8d9cb640c46521b5b648206b44dd",
".git/objects/c5/6e9b70b04e2947ae242684d1215a2db28fe7fd": "8ac29b8c4af75031b7e8e5900094a388",
".git/objects/c2/58c0323baa71b754adc2fd60959e175c02e719": "9a35020a4917506bf8aab841a8dbab8c",
".git/objects/c2/818018c33b0d8ed16a835ed4de7cc6f10fb886": "4b18562502f8a9e2e1586e09871a9801",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/d1978a80eae82e362c0571188129f3eba4991f": "80e89a7af75425355f9a002348da134c",
".git/objects/e9/7fd95f4700894270dd1e1c9f31f13e0a67f5c5": "0a2d714cee526a2cfb626291c22cfb23",
".git/objects/f1/88d08853b68fe03d1806623522c2f7702d1c9d": "ba7a3ad940132d0d7382b8279ffa8a28",
".git/objects/e7/b18972d926f990145ce675696a1aa38a8a7a55": "8f922dd5cc33ac9cebab11ce40e7386e",
".git/objects/ce/adf7425496045688a93809565c3bd189e9f0d7": "315ebbaeccdde1e2189f5dfda1832de1",
".git/objects/ce/dfd068a6fdb08b8de8fc053f3edf48caf39df7": "0570cc295643813fc75da5cfd6edb943",
".git/objects/46/f376dbe6ea27dfe4ead5e0a8fab28d3e3a3188": "d3e60a01e3dc3c73504705d675b8e6e1",
".git/objects/46/1649ae395b7c14ea72641f3ca7f2312d63018b": "027fea6702de4c075bc155746edd5694",
".git/objects/46/0a00dc88914a65fd1b8c8d30684a787ebf5081": "161e4d5832e0c3a104e7e7a534ffd155",
".git/objects/79/a67071488844676ba10bdaff40999469f67f19": "836030e92dd790faa73e60d1c62da2ed",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/80e358be116e5976a704675db02871bd9d9abe": "08b3b38a0e5b9eb1e9d59dafd8310e40",
".git/objects/2d/9708995866096c1e2ee7645b0b43a166497926": "326e69c6295972dec3f0d6c587031d4b",
".git/objects/41/cd8a047b8ca0f95140b66bce6d055e079cf6fb": "4e3d00556955f421023fb3a591a7ed56",
".git/objects/1b/28eb3c0ce5fb2c62c163b94eb37395d9f1d7a1": "ab276b851c3a3a4c70bc7ba34032e5d4",
".git/objects/1b/9badf489f6ddc62117782d55e54b8cd035952c": "3bba093d48d8970d6ab7dc5c7f39ee48",
".git/objects/48/d23e2b7e21fc2fc0c5631d48a73996a509fddf": "a2ee8b4480fe1b69cce5fc67c74b3252",
".git/objects/70/bd1ac1f7b487a2f1b5786552858319b9bc8733": "08b814ee1f245788f380f677909b3c64",
".git/objects/24/629dba79f63b3d30db8e8f681d7c328ce28227": "a4d860206bb43ed7f5ddb188cfef1351",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/021ce82ded85dbf245b2140130e55d4a09e3c8": "ea45244ac1df4b5831b4d628dd2fcd73",
".git/objects/15/b539f8ad8d31abe07d76684e27142ba56faee6": "2107ce42378614b7e3c1d54643b8d826",
".git/objects/12/d27a822bb5c4f57fad461cb8822c14e82d24d8": "3e9262a16544a810a7a24e2e1fdf1f05",
".git/objects/8c/5e05b3a4c8cc301c6a723e4cc0c4e1f7183333": "8f026298b97151c99bcba99953e3a4c6",
".git/objects/85/3349ca64b7a86479d9c7252a9ee47afd42001f": "462d2fb7db15bd9c13749871191ee150",
".git/objects/85/14a185a1d04bd069f5137ad5e1d89b5bf6960f": "b86ebff6d5d014362fa92647783bb852",
".git/objects/1d/46878f4bd129555dfec75e79d3c9640ddffd4c": "9017b2e85311dd8a9c6d7c3596af75c6",
".git/objects/76/bf10ea3e53e34087ae68430a026e128d7f851b": "d85e7d46807434bb1b73d8bc351bcf9a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/387c9e79c6937f1f21f3b99daf396a977e6516": "b23fdc481ede495c50dba9d93aeef5f7",
".git/objects/82/55027849020c5e2b2e63854311759dc1fb73e9": "dc2bc5238c5e51f4202cd6369764a9a9",
".git/objects/2b/800e943aeb5d537f1ef7bcc728d4f2569dcd0b": "ae5e7a8419e58b8bb9650a34b625322d",
".git/objects/47/ad53e9378b5e3e3263888aa86e551fc11596dc": "df1e30ef7721e8e44e1d242422d4a11c",
".git/objects/78/f9f86e09b2fae66f27bebd9bd0e338ddf9831c": "ea6b0221f9254802de37c4359e7d37f0",
".git/objects/8b/fdc41e59940139bf4d92db4e01447292d72a25": "fd2f46df1656a5f0520f4a2dab271282",
".git/objects/8b/ab1d62a3bcf2c932b83080e9f8e41a93bc9da5": "021bcf05d06e154887b47b2ee9dfc5c0",
".git/objects/7a/188b1b3101ba0d6561027b95867120c6e98807": "1988a6732c8e213df7b2cd80259024c8",
".git/objects/22/a7f13fa266936eba7bf0d480cf203453b9ba6c": "d55b0ac410c77699e2aa9bc1b7810857",
".git/objects/25/eccc238ad2019467567703101d441c49794687": "07269e656f07ea26480bcc59fa4d724d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f2537cdb0b9b4a2f8d3cf161d72b968",
".git/logs/refs/heads/main": "9f2537cdb0b9b4a2f8d3cf161d72b968",
".git/logs/refs/remotes/origin/HEAD": "5e72a3e8ca180fa5f6952bd744483f3e",
".git/logs/refs/remotes/origin/main": "4acb8d0fc74db79d5a1b9ee3cc747e5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d6ff10f112b53cf5d1a51ae4dc3b2763",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d6ff10f112b53cf5d1a51ae4dc3b2763",
".git/index": "0d7f41cd922ebfa840f733fd6cf6bcb3",
".git/packed-refs": "e23d4c739b4cceaf0c53dc90d0817fca",
".git/COMMIT_EDITMSG": "4105d44866efecc0c4b5ba37f6689286",
"assets/AssetManifest.json": "d8831063cea9376edee493cbf8d6c120",
"assets/NOTICES": "875cd153c5d25060e95fb1e547793755",
"assets/FontManifest.json": "6dc7ef8aee8a990329ac305a683d67a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "8927f05a9c617aef2d003b77e9d284de",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Syncopate/Syncopate-Regular.ttf": "8e2a1f1891530987f66c4f327c446be2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/birmingham2.jpg": "a91e0ac0a831967d87518132794e5351",
"assets/assets/images/About%2520US%2520Pinecones.png": "a7f6837ae3b4b3eebed27900feb3c508",
"assets/assets/images/birmingham.JPG": "ae4a20b42dc74395c86d3e5171b61d7c",
"assets/assets/images/milton_keynes.jpg": "56a05db75c028df4d11c2c47d3860801",
"assets/assets/images/london.JPG": "6c02d2fd31bc1dba5d1716ede60d8684",
"assets/assets/images/logistics.jpg": "02c8fddd49886b86e8c45d85eeefa257",
"assets/assets/images/staffing.jpg": "c31282674bbd4c0dd6f5c41efa824d08",
"assets/assets/images/bedford.JPG": "70c329dc8e8d8b02498e05deee21ee02",
"assets/assets/images/edinburgh.JPG": "2a1a633a2bc2bf41750cd784ca658504",
"assets/assets/images/inventory_management.jpg": "f8ba7a68f6ca031c476bb0b97e62afe9",
"assets/assets/images/About%2520US%2520Pinecones%25202.png": "b968658aced33426b740940ea0d26084",
"assets/assets/images/cover.png": "29a6fe0f7df34f06c0c15548b915f22f",
"assets/assets/images/manchester.jpg": "31d215534a1b2474a67e4c001b20c5cc",
"assets/assets/images/Pinecones%2520Group%2520Ltd-logo/cover.png": "098c39b79cf35ae0611637be964b6697",
"assets/assets/images/Pinecones%2520Group%2520Ltd-logo/default.png": "01bb6f14acaaf52ab7d12c774a77aea0",
"assets/assets/images/staff.jpg": "b501c34ed0ddeca74407479864bc1682",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
