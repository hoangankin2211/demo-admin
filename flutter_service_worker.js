'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86b92348f33f0802c951de6fb29faed8",
".git/config": "c58173fdd512ba67f62142776162f5d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1d12866e559da5566ff6a8a205d30f67",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10b7f6e48f5bb7bffefc2e4ad71b99c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef07912bacb962be42365af158294ada",
".git/logs/refs/heads/master": "46b29ff31f66fa6f61ac73ab34c90c84",
".git/logs/refs/remotes/origin/master": "9b98973f7b3581e98bbf6381dde7e0f8",
".git/objects/03/8790d7f8d8ebb8b7415ff400539f5d9fdaed2e": "aeca842595c550f9d24b8a95721bac70",
".git/objects/05/9371628f11f0c78b69b930479c7fb2fb35e2a6": "8cf709699e245b50894e3b6f35cab055",
".git/objects/0b/5954ffb5c7c3a24f731de1c463ab5185a669ac": "10a77879634e41c50c231ef4ae19583a",
".git/objects/0f/63907c88e84a7953ae11075f5c204eb5550c85": "234847b93cd8a58e47d7384ddc9ccdbe",
".git/objects/14/d5f18377ea7e3d2a65c92b03ffd72363761164": "96576d22e5d5557fe68ff5628f2d0305",
".git/objects/15/5e76d6b2545cacfa15497c724bd84c435f882e": "9f329983f9a68f2c8fb15c2ef7fbb415",
".git/objects/19/0d116917afaf1a7668f62d39585b06d9663a6a": "38652c959a09f998f609bd1231f49415",
".git/objects/1a/537ecd4cb1a5bf401418c6e357adcf580a5b51": "f9c1a1d0369c5f250db1fa9144193ab2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/4b772703afb1935710230f3e93ef88333c75e5": "938a3a07860c49547dd787de890cdda8",
".git/objects/1e/d1727b194b924442d38111644466f5b7d6c0e0": "452a24825564e6750fcfc6d6c0d814e5",
".git/objects/20/a798d6d658191f637d361023306d655e6a3af4": "3f869ef9ae9f1c4f7b818664e4130f1b",
".git/objects/20/aa8ed72cc72eed1382a9368f7987528657f262": "c2bbc466640d1a97252cf1b61540280d",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/6fed175ee98987f1ec63b8a1f95e323c06b198": "0ecc28c484a589fb9044b460cf02cccf",
".git/objects/31/f1dc8ac5f5e10ee85e52f6d9806b5f71a9283a": "11032ced008402c54e6a6dc04dab20a8",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/38/e23fc654d2a47737bda363a9ffb93e25314b30": "26e33af157e6d6de33af54db8cd56e0a",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/e73782c6924f80a6e57ef499fe63fbef6fb9a9": "50553c68c3bd78cc1460a059ee8def7e",
".git/objects/46/cbfb97d373860d8eb9d015222234fab85c8f97": "f7f572a7e84d15ac8105366aba14469a",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/56/c3041fcec665d40d2e868aa5d4e50f5e256f8e": "422813bba1fab38f1a6f31789695cbff",
".git/objects/5a/8e0494b8ae8c99c11e09456c1479166cad3dca": "9474788ed59ef1755a7d139e7b8021f5",
".git/objects/5b/9c2b1c7888877ad2ab3377ae1f5d5cfd9b7b39": "ff239f9e787ce225ad482b422584a747",
".git/objects/5b/ea5d8b0260905b6c1a734d9f651eb485abc266": "baa7275114bc4f506398b9a224fce8e9",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/30e151a7b593be5e33661e6813ffd0604a2bdc": "8c43fa88203a56ddc4c5c7b00a8e7c3c",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/d356998b26aea9cdf9b19f6dff6c7716396234": "062afae95849e17b42f6836e8fc4cafc",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/79/14215c04694ce755c4bd89788f2693cb7fc10a": "1c7e8ecc945975856132b3b5ce5e4873",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0a6a8dab4918a9ef18ec9d2830302e68287f01": "38d088d3c66451ad8569008ed03d0aa3",
".git/objects/7b/860e151e8c51149afdee54a1f26919c3919f0b": "84edf3d340f66464144cd197ec7b9b32",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/26801e493a1c4d538727cea3887b3ba6c1c1a9": "0e6097ae5c562acffa9aa0aa7e0dfcb7",
".git/objects/84/25706921049ddf3a3ad52448b0fa4b089512d0": "b106e1137b178873388f95da464b59e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/51e0f740c4f2939aa88a3429a665cb8ca9c554": "d554a25349a52356eb5825c67727f28c",
".git/objects/90/08d8e749650d0908b96f40536170ae5abea3ec": "fa427e0e750af3873a86acb63f90ebe0",
".git/objects/90/bf2e3e76fcfa69fd21e6fe50b28be8b86bd0b0": "40de051374ab022fd7fbf51afa04ad29",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/7cdc024c40b583bbd8688824bd59f20e32d7ea": "b6aa5c51afd21f73040c00f799814dc6",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9e/c5236cfeaa50159b8b0f237a3e0fe4bcbe57f5": "09516969740b8b688ec8eee5c0f03908",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/607968881e5d93dcee67ca59250f2bdf917f61": "62de595f0197fdc1302fccc3b2e819ca",
".git/objects/a6/3b08a5bb19140931587750a6cb9c49ec368363": "04c9e058b200644ded32bfe903001c85",
".git/objects/ac/eb9e93b9894ed5430968002782d148283b6741": "90e97df50c7e8e4b959cf997bbfddadb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/c1/0ccaa9294088b874398fbf2fdc988a54d67006": "0b002a12186b9120c161a3a038a118df",
".git/objects/c1/1d2a1cd35cca08e9a90117b630b141f1b5fdc6": "9283ff74964f5ed90672518b5084dfdc",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c8/5b76e7f032b0bceb04aec22979108d98105615": "5dea73dd2c3d69e7217dbf9c18d371f1",
".git/objects/c9/7d47d92d690a59585f7b8a52a2b56356deff45": "42b2090a33eae996795903fbc7cee972",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0edfef5f1fea8ebff3833613f95628e288ecbe": "bce14a0e469e4a1f6c93fde7ca32fa6f",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e4/3327c49100a2d4cdf75ccfe13639b343867119": "c98b2421c46684a758c8e5626f0073ff",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/393e080ea6c4182f5431549af09d4a8b967c95": "91d505f0b02cfa1295f7d35371c6df8d",
".git/objects/ef/5c48041c92d7cc638e9f692b7f9c65c0feeee4": "2f3955430cf8115e0e4226dddff883d0",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f7/66972b54ec73753e55fbd7567d61f9246cdf9b": "a1ba6ee697516184541e5b56676dddda",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fd/1f76c381248329fff4ae29f21aca119277a224": "bb22e46ed0ea4aafe49dc800f7e1cc1d",
".git/ORIG_HEAD": "58ae4e7da450827a462a9083de668c93",
".git/refs/heads/master": "58ae4e7da450827a462a9083de668c93",
".git/refs/remotes/origin/master": "58ae4e7da450827a462a9083de668c93",
"assets/AssetManifest.json": "99a262c9b6e1df9a40fc93af5b0199c1",
"assets/assets/images/app_icon.png": "b6cea08205dea0a08ff9ba729d03eec0",
"assets/assets/images/course.png": "20c9c84e7189067e74e6f3c3cfdb8015",
"assets/assets/images/document.png": "b08417294b6f4c721df39dfac5643fcd",
"assets/assets/images/face8.jpg": "a8b4531d00ae1fc9a21fed11081004ae",
"assets/assets/images/facebook.png": "61a96c78b48018b48fbb6254a93b93f8",
"assets/assets/images/figma.png": "611dc0ca639f5f54c1f164e07b7bc508",
"assets/assets/images/flutter.png": "624cc028f83ce58080310d502fa873e1",
"assets/assets/images/google_form.png": "bb4b54ed1c37d06e3a62025f665b262f",
"assets/assets/images/growth.png": "f3a98142f2f3d8bad251ffd3b734b79e",
"assets/assets/images/increase.png": "ee5c7deec4845aac13378e88e5194cb2",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/kahoot.png": "6a368ebeef5fa159d74bc054ccbb9ad9",
"assets/assets/images/letter-u.png": "6514ebb88330994ed308e913f2044348",
"assets/assets/images/messenger_admin.png": "e8bf29d12fc0ff70e3d60805313a8443",
"assets/assets/images/microsoft_form.jpg": "3f43ef775744ee7441314701246d13a2",
"assets/assets/images/nodejs.png": "322ce66ed267b76ef663d8ddbd9c50de",
"assets/assets/images/person.png": "14adee85d6e9d855c5824074aa9143cd",
"assets/assets/images/person1.png": "dda4941fcd08d9bce532d369c8e18246",
"assets/assets/images/person2.png": "fae1b569faa7207a7508add772f1fa12",
"assets/assets/images/person3.png": "c9f9690a52178bc442bbc598b81b9ca9",
"assets/assets/images/react.png": "cba0b89d2bf2d96a1ed26edb5849f804",
"assets/assets/images/sea.jpg": "abf8f7e0d485c31257130b053ba56dab",
"assets/assets/images/twitter.png": "5e50007c58f3521b7fd6470e6af616c6",
"assets/assets/images/typeform_logo.png": "040aec54b141af7c09f0a738bab034c9",
"assets/assets/images/ueh_gif.gif": "81da890dcde40948d188d0af5833c1f1",
"assets/assets/images/ueh_logo.jpg": "5c55ec930c522c9d793a5edcc64cf35b",
"assets/FontManifest.json": "4f5c6372e52ed085732d81b206cfd9ac",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a43eabdaf15248ec3b6e6f159ba21851",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "e430f2f229b1a9126b9b96896408ca3d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c37033c7686f1f8de766cd2c0e604dbd",
"/": "c37033c7686f1f8de766cd2c0e604dbd",
"main.dart.js": "93d65930093677404a916b5422ae9e26",
"manifest.json": "7f73df82a2fee990039dc5ce66192ac3",
"version.json": "d1d18351ab38eaba256bb45305b7966e"
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
