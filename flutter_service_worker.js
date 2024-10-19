'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c9994fd693ba79d012c6c0c38eae2250",
"version.json": "f9a9ae135c39399785f34b2ea788e23b",
"index.html": "d3e52081216605719aea54a35d3bf242",
"/": "d3e52081216605719aea54a35d3bf242",
"main.dart.js": "e9157ad0c93c7606e1bc8938a327b876",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9bb5729bf87a7aefef5cfc927fbda14e",
".git/ORIG_HEAD": "1c55bff6a805d1dc244e87e93e4138ec",
".git/config": "eeef690baf2e7f4a71b670d204de8094",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9e/58e06b3b3e054aa5b508e9fde2b1cbfaa3a7cd": "c6e30a0a1761e059eea1d10e0e98bead",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/8978fd22cadbd3252195f47dcd0cac097e6dc7": "587732a41a904422a530ee574f7b51ce",
".git/objects/56/326b230c9f5bd3cf5006b24e7b7f69ff2ec73b": "edd6510ba02937f32d7397e9a8acfb64",
".git/objects/58/bafd1631dacaf77dcc4adfa0af2744ca7684c0": "b7f6253a428b945a906f31f4c42c3783",
".git/objects/58/3be9269f57ad39a286833f84be02bb55df4df3": "945a4cd3c0f92ebd29496d9050682f53",
".git/objects/5a/9a723bb4b580b73b3f8f2ee6a206f950b53242": "510717a4b4740dc65fdd9b9b62bd815c",
".git/objects/33/0e84f9548499cd9ad7c32ba563cc9bc637d8b3": "692e28633bd09d8cb706ea885f5f9b01",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/b5/c4d61917099e2fee538f4d6c2404c97356f728": "d35b2a8c71257c3ecb734d40eec84c9a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/df3959c7741cad3cdcb6362a603a65a63267ee": "3732221c4298a7634f964a0b23354bf0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/b9240505eb917e498b26f843e2e75da1c5043c": "87aabf15182fb597d8544dadce0d15f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/2b31f98a45d8dd8561d0108f38f1eaaa37c317": "293bb5a053a88a4dc468f6a77f3e64ce",
".git/objects/c9/b072285cd5750d176e26d694c0f987344ab926": "4400160d9572ceab367cdf6716b67f25",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9ab045405b8714e7bbb3d5a4c1efc46c7b4a1c": "1833d20bbf097ca014d98e0c974a1839",
".git/objects/f5/eb89343e0945f5580440c3d08bd224a75c0caa": "a41e56d517b17555957ce9072e64f889",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/3ec81975f889a76b90e449b77c781b0ecd9293": "ec3c2d394061d5ee09671621c62ac219",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/df03dda3a6ef6b7b2593530634572d0259466a": "d7fe9350ccb5095f04be47d39ab6103e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/e36abde0aed84fe9e53c9196b932d76964e7fe": "cc5d4c0b17c2a6e9643551bbe54e2fa6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/db5d344a4d01eb7a3afefadbbb6a01078ccd22": "8ea0bca7393d9cc58d26e68805cd2c18",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/463ee72c46bcdb9caf08e4a4fd2d0b5bd6b18a": "eecbfc87227db049f72c8094f0fc5488",
".git/objects/5e/1254b12404019dcfb770503ac9cfe3818e3f7d": "3e8781c9d0b2c03f4fc495dca75884ff",
".git/objects/5b/02c0bf186e7567b9d226ce0aa16d0572180dcc": "0712ff322ff163dfd9ec4a67b1c40f9c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/b23dd2d6776cfc1644a68b97712545d515d6d7": "001e3207c7389caf6592f60db2399c55",
".git/objects/0f/d7e946fcdc247776a48fd6d3912aa62cc5bab2": "a60ba40a366a51d3cf5ff16f55691207",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/691fba20f89ec3834dbe7bf5f68f2885802337": "5caf9d58961e4e57d6bc07eedfcfa373",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/ead279f6790e2bb343932c98dabe19c5418238": "11804bb8ac639ebd909e359cd19f9657",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ef882a2d3a1ad8986574b433f516ab35bb1c30": "81f09e026d6e917f03e52a080e718d03",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/6bbea7b493571f935863b6383726e10f24c121": "4ab5aa71d4ed7fb006923f33cae50609",
".git/objects/c2/6c056067aa22c97ef86d0e33d70dec0acf951a": "23d7e9235704c99f118d90ae96749a76",
".git/objects/f1/cad982587a9545186304e426b5061ee0753a9c": "678a9ad1a4239a1b02082dfb48545598",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/f584fa2ffdace08bd5e5396e57064522824025": "48545824965d2b3fde41a785554cf913",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ddecbe5ccf6f20862412041d3465c44",
".git/logs/refs/heads/main": "1d56d134df372326bfc5de829831c200",
".git/logs/refs/remotes/origin/main": "892997583bd0ebbfd741a3776caeb2f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1c55bff6a805d1dc244e87e93e4138ec",
".git/refs/remotes/origin/main": "1c55bff6a805d1dc244e87e93e4138ec",
".git/index": "79725bc41da80bc8b404f85e01cea87e",
".git/COMMIT_EDITMSG": "c74b6d3def659453e94f84cf5b675888",
".git/FETCH_HEAD": "fb7a6bcd1865f66a3638f743e0f77d4a",
"assets/AssetManifest.json": "d223e873b9bbdac2b191ff86ff192fde",
"assets/NOTICES": "9e698dcf07780755edb48ffeb0968ef5",
"assets/FontManifest.json": "d6d8f0fabd7280a88953d6d1c726aac7",
"assets/AssetManifest.bin.json": "2e3a34d08bca152a567863982f1c12c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "956de7130451ef0983a6fa56cff8d3c8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/onboarding_image3.png": "17b81d36cca295b1213d3466f0b51438",
"assets/assets/images/onboarding_image2.png": "44af33eac5c9f6195c919feb90cf9c0f",
"assets/assets/images/onboarding_image1.png": "8e4870c0ca4057b201a21b1e708810a3",
"assets/assets/images/welcome_image.png": "fef3b3e4c72232baea17c6789b6fbeda",
"assets/assets/svgs/food_app_logo.svg": "3e795d1ccb529b7f530abe12273c178a",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
