'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9094aacdae789dccd67fa32109ff1a18",
"index.html": "9fcbe4b212f6febb1b336006cac4d3bd",
"/": "9fcbe4b212f6febb1b336006cac4d3bd",
"CNAME": "64e106be54e198b91c4b10660b2cfea8",
"main.dart.js": "78f064b776250b029dc53fb5c29ce089",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
".git/config": "6d028d92601a357b7f196bf90cdc500b",
".git/objects/59/43065f2f409f01e6c54703a37291591c76c418": "71456a208929f1e8691d26b9bf23ac1c",
".git/objects/68/177e6961048d49bdffa1017188f7ca1c2a37bb": "4b045a5cf1f01336d57637707d2073fe",
".git/objects/9b/1267c5caa7e1d619bf9bc37f32b42df9ac1a58": "6289582b12d9c0c88730ef8095d7227e",
".git/objects/35/e5930919848bbdd671cb6b81eeec77ddc9bf43": "454a48682a74a137e8a39f74a50c5909",
".git/objects/69/b865251954ca90982ea027c1b1d697239514c9": "652b824162fe354da98a0e0295a5a3bc",
".git/objects/5a/ff072e364461f0dc005605b9805a555bc78cb0": "3834e34e499030d371b9fbae679d5205",
".git/objects/02/eb0fde822ba66b7bf3ec3d056aad046902ffef": "683dfd079eaacbe0be82edf894fe8bef",
".git/objects/b2/d353712a1165626a86c2d35a269148c9b63689": "bc045a286b59bccc384f005a4499a966",
".git/objects/d7/19890f95a37eaf8bd8d772d609fb9a87187099": "b2130e90c6afbbedfde01d73797c75c6",
".git/objects/da/f911c9c4e2979435036af57cb1bc046565e727": "ec97ffa0408ec01931563e614d0a674b",
".git/objects/ee/b0635af79d2de42d0462fa121db1f6eae613e0": "73b3d053cba6c372c7b3b13f5c7948a2",
".git/objects/e3/d62e61d13cdf09dd5b1268bdf84e92cf3283af": "6edacd37136d66acc79ce2de4fa2ab1e",
".git/objects/ca/8522bec32c2d40167a94161cfa96cbfb81e211": "84f3b79115cf835813dacf384fb53975",
".git/objects/c6/25a1cc70fb3ada69bd23792969d926243130c6": "d50336a471b08297104e01db86741e31",
".git/objects/c6/16363ea0f8b0102a1f3ff7595b94793f170aab": "9b3ddd6bdd65b2dbfe146ea5c1dccd73",
".git/objects/pack/pack-8ae3b00687b7cf85d0ab73c94bb100c8638b1b05.pack": "4f7c517f6c88f99eecbdfd16201571dd",
".git/objects/pack/pack-8ae3b00687b7cf85d0ab73c94bb100c8638b1b05.idx": "1330c70b4efcede3be4ed8efd6cca341",
".git/objects/7c/bcd583ce398bfc73106daa732130310d3ff62e": "8b7f2b288998a193b34761dc07483d2f",
".git/objects/28/da59be88801b1abcc9b1b3302b323d98212b98": "e1921a946dfea5190a659f7f35d7f9ed",
".git/objects/43/6c7f1cde6b7db23fae9d4f947369b213e4db98": "5b0bfb55543e855f7b1217de2ca4bb80",
".git/objects/9f/763db97e89773cdf29380f6bf223e1600ad2bb": "057d7afd8b1f7ff974bdcd58edceb68e",
".git/objects/53/85bbc4dd2f4111e58e23a348d5f67c11533cc3": "e55bc204537a2ac5d406f78f4d6036cb",
".git/objects/30/a3a8b47b53a80e5a24ab67c5e85414960e34d0": "9d910201a384a836a17274881d47e83e",
".git/objects/5e/da17512b549a61b6c591259110fc03d7e9d77d": "14c317a1398409bfd5d62c7c37336e33",
".git/objects/63/af08f8d9e2cb2a78dfb56cc9d386b41e683de6": "78f1d9220bcc20970fc014a235877ac1",
".git/objects/a7/9f6f287ea7eb10415298f42903ea983a7c27a4": "aa042ace3f689ce01b2d4f833785789d",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/d5/702bf70f64b143ff81d8c08f80060453889f97": "1c90d91fcc6b63d1a96d6158e6cbf8bd",
".git/objects/af/5e1ad3a8cf481b7cd186436908c693acd24b46": "58400a2a40ff00abd8b2b4be7d9553fe",
".git/objects/cd/c4ed0b0fc009a6c3f73c34634c5ff098c1ee60": "8fd072a900d0a9f659e2595819934b51",
".git/objects/f0/ac45191f08831f0cba298f94e3dd1bda4fd5fe": "49074a9c313f04f030fabd73ca34df64",
".git/objects/f7/48975a55cb860581402b9916eb957982244eb1": "5b89fe1a9d82b93ade1ec75bb974f736",
".git/objects/c5/6e9b70b04e2947ae242684d1215a2db28fe7fd": "8ac29b8c4af75031b7e8e5900094a388",
".git/objects/c2/818018c33b0d8ed16a835ed4de7cc6f10fb886": "4b18562502f8a9e2e1586e09871a9801",
".git/objects/e7/b18972d926f990145ce675696a1aa38a8a7a55": "8f922dd5cc33ac9cebab11ce40e7386e",
".git/objects/46/f376dbe6ea27dfe4ead5e0a8fab28d3e3a3188": "d3e60a01e3dc3c73504705d675b8e6e1",
".git/objects/79/a67071488844676ba10bdaff40999469f67f19": "836030e92dd790faa73e60d1c62da2ed",
".git/objects/85/3349ca64b7a86479d9c7252a9ee47afd42001f": "462d2fb7db15bd9c13749871191ee150",
".git/objects/2b/800e943aeb5d537f1ef7bcc728d4f2569dcd0b": "ae5e7a8419e58b8bb9650a34b625322d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c46c60fd77091d5976f16ee8a334133f",
".git/logs/refs/heads/main": "c46c60fd77091d5976f16ee8a334133f",
".git/logs/refs/remotes/origin/HEAD": "5e72a3e8ca180fa5f6952bd744483f3e",
".git/logs/refs/remotes/origin/main": "136936da347f6d66fd262124bd82f959",
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
".git/refs/heads/main": "4a7fee4691ed90057c15f96a4ce5cf37",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4a7fee4691ed90057c15f96a4ce5cf37",
".git/index": "68b2e2bcc30fffcfbf8259ab37ea4c02",
".git/packed-refs": "e23d4c739b4cceaf0c53dc90d0817fca",
".git/COMMIT_EDITMSG": "4105d44866efecc0c4b5ba37f6689286",
"assets/AssetManifest.json": "605fe8419d56de06bebd055a7884bfc3",
"assets/NOTICES": "16f54c1c21f2cfcd393d16cfa370b5d2",
"assets/FontManifest.json": "6d0c097ea7c6c173a185e706a4508a9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Syncopate/Syncopate-Bold.ttf": "b30af0a94c91b0887548b847d0b06653",
"assets/fonts/Syncopate/Syncopate-Regular.ttf": "8e2a1f1891530987f66c4f327c446be2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/birmingham2.jpg": "a91e0ac0a831967d87518132794e5351",
"assets/assets/images/birmingham.JPG": "ae4a20b42dc74395c86d3e5171b61d7c",
"assets/assets/images/milton_keynes.jpg": "56a05db75c028df4d11c2c47d3860801",
"assets/assets/images/london.JPG": "6c02d2fd31bc1dba5d1716ede60d8684",
"assets/assets/images/logistics.jpg": "02c8fddd49886b86e8c45d85eeefa257",
"assets/assets/images/staffing.jpg": "c31282674bbd4c0dd6f5c41efa824d08",
"assets/assets/images/bedford.JPG": "70c329dc8e8d8b02498e05deee21ee02",
"assets/assets/images/edinburgh.JPG": "2a1a633a2bc2bf41750cd784ca658504",
"assets/assets/images/inventory_management.jpg": "f8ba7a68f6ca031c476bb0b97e62afe9",
"assets/assets/images/cover.png": "29a6fe0f7df34f06c0c15548b915f22f",
"assets/assets/images/manchester.jpg": "31d215534a1b2474a67e4c001b20c5cc",
"assets/assets/images/staff.jpg": "b501c34ed0ddeca74407479864bc1682",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
