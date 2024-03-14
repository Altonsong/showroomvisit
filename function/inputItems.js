let kitchenCabinetsHTML = '';
kitchenCabinets.forEach((kitchenCabinet) => {
  kitchenCabinetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${kitchenCabinet.detail}">${kitchenCabinet.name}</div>
      <img src="${kitchenCabinet.image}" class="imgItems">
      <div class="optionPrice">${kitchenCabinet.price}</div>
    </div>
  `;
})
document.querySelector('.js-kitchenCabinet-area').innerHTML = kitchenCabinetsHTML;

let kitchenCountertopsHTML = '';
kitchenCountertops.forEach((kitchenCountertop) => {
  kitchenCountertopsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${kitchenCountertop.detail}">${kitchenCountertop.name}</div>
      <img src="${kitchenCountertop.image}" class="imgItems">
      <div class="optionPrice">${kitchenCountertop.price}</div>
    </div>
  `;
})
document.querySelector('.js-kitchenCountertop-area').innerHTML = kitchenCountertopsHTML;

let kitchenBacksplashsHTML = '';
kitchenBacksplashs.forEach((kitchenBacksplash) => {
  kitchenBacksplashsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${kitchenBacksplash.detail}">${kitchenBacksplash.name}</div>
      <img src="${kitchenBacksplash.image}" class="imgItems">
      <div class="optionPrice">${kitchenBacksplash.price}</div>
  </div>
  `;
})
document.querySelector('.js-kitchenBacksplash-area').innerHTML = kitchenBacksplashsHTML;

let kitchenSinksHTML = '';
kitchenSinks.forEach((kitchenSink) => {
  kitchenSinksHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${kitchenSink.detail}">${kitchenSink.name}</div>
      <img src="${kitchenSink.image}" class="imgItems">
      <div class="optionPrice">${kitchenSink.price}</div>
    </div>
  `;
})
document.querySelector('.js-kitchenSink-area').innerHTML = kitchenSinksHTML;

let kitchenFaucetsHTML = '';
kitchenFaucets.forEach((kitchenFaucet) => {
  kitchenFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${kitchenFaucet.detail}">${kitchenFaucet.name}</div>
      <img src="${kitchenFaucet.image}" class="imgItems">
      <div class="optionPrice">${kitchenFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-kitchenFaucet-area').innerHTML = kitchenFaucetsHTML;


let bath1WallTilesHTML = '';
bathWallTiles.forEach((bathWallTile) => {
  bath1WallTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathWallTile.detail}">${bathWallTile.name}</div>
      <img src="${bathWallTile.image}" class="imgItems">
      <div class="optionPrice">${bathWallTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1WallTile-area').innerHTML = bath1WallTilesHTML;

let bath1FloorTilesHTML = '';
bathFloorTiles.forEach((bathFloorTile) => {
  bath1FloorTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathFloorTile.detail}">${bathFloorTile.name}</div>
      <img src="${bathFloorTile.image}" class="imgItems">
      <div class="optionPrice">${bathFloorTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1FloorTile-area').innerHTML = bath1FloorTilesHTML;

let bath1VanitiesHTML = '';
bathVanities.forEach((bathVanity) => {
  bath1VanitiesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanity.detail}">${bathVanity.name}</div>
      <img src="${bathVanity.image}" class="imgItems">
      <div class="optionPrice">${bathVanity.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1Vanity-area').innerHTML = bath1VanitiesHTML;

let bath1VanityFaucetsHTML = '';
bathVanityFaucets.forEach((bathVanityFaucet) => {
  bath1VanityFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityFaucet.detail}">${bathVanityFaucet.name}</div>
      <img src="${bathVanityFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathVanityFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1VanityFaucet-area').innerHTML = bath1VanityFaucetsHTML;

let bath1VanityLightsHTML = '';
bathVanityLights.forEach((bathVanityLight) => {
  bath1VanityLightsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityLight.detail}">${bathVanityLight.name}</div>
      <img src="${bathVanityLight.image}" class="imgItems">
      <div class="optionPrice">${bathVanityLight.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1VanityLight-area').innerHTML = bath1VanityLightsHTML;

let bath1VanityMirrorsHTML = '';
bathVanityMirrors.forEach((bathVanityMirror) => {
  bath1VanityMirrorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityMirror.detail}">${bathVanityMirror.name}</div>
      <img src="${bathVanityMirror.image}" class="imgItems">
      <div class="optionPrice">${bathVanityMirror.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1VanityMirror-area').innerHTML = bath1VanityMirrorsHTML;

let bath1ToiletsHTML = '';
bathToilets.forEach((bathToilet) => {
  bath1ToiletsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathToilet.detail}">${bathToilet.name}</div>
      <img src="${bathToilet.image}" class="imgItems">
      <div class="optionPrice">${bathToilet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1Toilet-area').innerHTML = bath1ToiletsHTML;

let bath1TubsHTML = '';
bathTubs.forEach((bathTub) => {
  bath1TubsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathTub.detail}">${bathTub.name}</div>
      <img src="${bathTub.image}" class="imgItems">
      <div class="optionPrice">${bathTub.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1Tub-area').innerHTML = bath1TubsHTML;

let bath1ShowerFaucetsHTML = '';
bathShowerFaucets.forEach((bathShowerFaucet) => {
  bath1ShowerFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerFaucet.detail}">${bathShowerFaucet.name}</div>
      <img src="${bathShowerFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathShowerFaucet.price}</div>
    </div>
  `;
})
// console.log(bath1ShowerFaucetsHTML);
document.querySelector('.js-bath1ShowerFaucet-area').innerHTML = bath1ShowerFaucetsHTML;

let bath1ShowersHTML = '';
bathShowers.forEach((bathShower) => {
  bath1ShowersHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShower.detail}">${bathShower.name}</div>
      <img src="${bathShower.image}" class="imgItems">
      <div class="optionPrice">${bathShower.price}</div>
    </div>
  `;
})
// console.log(bath1ShowersHTML);
document.querySelector('.js-bath1Shower-area').innerHTML = bath1ShowersHTML;

let bath1ShowerEnclosuresHTML = '';
bathShowerEnclosures.forEach((bathShowerEnclosure) => {
  bath1ShowerEnclosuresHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerEnclosure.detail}">${bathShowerEnclosure.name}</div>
      <img src="${bathShowerEnclosure.image}" class="imgItems">
      <div class="optionPrice">${bathShowerEnclosure.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath1ShowerEnclosure-area').innerHTML = bath1ShowerEnclosuresHTML;


let bath2WallTilesHTML = '';
bathWallTiles.forEach((bathWallTile) => {
  bath2WallTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathWallTile.detail}">${bathWallTile.name}</div>
      <img src="${bathWallTile.image}" class="imgItems">
      <div class="optionPrice">${bathWallTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2WallTile-area').innerHTML = bath2WallTilesHTML;

let bath2FloorTilesHTML = '';
bathFloorTiles.forEach((bathFloorTile) => {
  bath2FloorTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathFloorTile.detail}">${bathFloorTile.name}</div>
      <img src="${bathFloorTile.image}" class="imgItems">
      <div class="optionPrice">${bathFloorTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2FloorTile-area').innerHTML = bath2FloorTilesHTML;

let bath2VanitiesHTML = '';
bathVanities.forEach((bathVanity) => {
  bath2VanitiesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanity.detail}">${bathVanity.name}</div>
      <img src="${bathVanity.image}" class="imgItems">
      <div class="optionPrice">${bathVanity.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2Vanity-area').innerHTML = bath2VanitiesHTML;

let bath2VanityFaucetsHTML = '';
bathVanityFaucets.forEach((bathVanityFaucet) => {
  bath2VanityFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityFaucet.detail}">${bathVanityFaucet.name}</div>
      <img src="${bathVanityFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathVanityFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2VanityFaucet-area').innerHTML = bath2VanityFaucetsHTML;

let bath2VanityLightsHTML = '';
bathVanityLights.forEach((bathVanityLight) => {
  bath2VanityLightsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityLight.detail}">${bathVanityLight.name}</div>
      <img src="${bathVanityLight.image}" class="imgItems">
      <div class="optionPrice">${bathVanityLight.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2VanityLight-area').innerHTML = bath2VanityLightsHTML;

let bath2VanityMirrorsHTML = '';
bathVanityMirrors.forEach((bathVanityMirror) => {
  bath2VanityMirrorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityMirror.detail}">${bathVanityMirror.name}</div>
      <img src="${bathVanityMirror.image}" class="imgItems">
      <div class="optionPrice">${bathVanityMirror.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2VanityMirror-area').innerHTML = bath2VanityMirrorsHTML;

let bath2ToiletsHTML = '';
bathToilets.forEach((bathToilet) => {
  bath2ToiletsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathToilet.detail}">${bathToilet.name}</div>
      <img src="${bathToilet.image}" class="imgItems">
      <div class="optionPrice">${bathToilet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2Toilet-area').innerHTML = bath2ToiletsHTML;

let bath2TubsHTML = '';
bathTubs.forEach((bathTub) => {
  bath2TubsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathTub.detail}">${bathTub.name}</div>
      <img src="${bathTub.image}" class="imgItems">
      <div class="optionPrice">${bathTub.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2Tub-area').innerHTML = bath2TubsHTML;

let bath2ShowerFaucetsHTML = '';
bathShowerFaucets.forEach((bathShowerFaucet) => {
  bath2ShowerFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerFaucet.detail}">${bathShowerFaucet.name}</div>
      <img src="${bathShowerFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathShowerFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2ShowerFaucet-area').innerHTML = bath2ShowerFaucetsHTML;

let bath2ShowersHTML = '';
bathShowers.forEach((bathShower) => {
  bath2ShowersHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShower.detail}">${bathShower.name}</div>
      <img src="${bathShower.image}" class="imgItems">
      <div class="optionPrice">${bathShower.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2Shower-area').innerHTML = bath2ShowersHTML;

let bath2ShowerEnclosuresHTML = '';
bathShowerEnclosures.forEach((bathShowerEnclosure) => {
  bath2ShowerEnclosuresHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerEnclosure.detail}">${bathShowerEnclosure.name}</div>
      <img src="${bathShowerEnclosure.image}" class="imgItems">
      <div class="optionPrice">${bathShowerEnclosure.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath2ShowerEnclosure-area').innerHTML = bath2ShowerEnclosuresHTML;



let bath3WallTilesHTML = '';
bathWallTiles.forEach((bathWallTile) => {
  bath3WallTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathWallTile.detail}">${bathWallTile.name}</div>
      <img src="${bathWallTile.image}" class="imgItems">
      <div class="optionPrice">${bathWallTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3WallTile-area').innerHTML = bath3WallTilesHTML;

let bath3FloorTilesHTML = '';
bathFloorTiles.forEach((bathFloorTile) => {
  bath3FloorTilesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathFloorTile.detail}">${bathFloorTile.name}</div>
      <img src="${bathFloorTile.image}" class="imgItems">
      <div class="optionPrice">${bathFloorTile.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3FloorTile-area').innerHTML = bath3FloorTilesHTML;

let bath3VanitiesHTML = '';
bathVanities.forEach((bathVanity) => {
  bath3VanitiesHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanity.detail}">${bathVanity.name}</div>
      <img src="${bathVanity.image}" class="imgItems">
      <div class="optionPrice">${bathVanity.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3Vanity-area').innerHTML = bath3VanitiesHTML;

let bath3VanityFaucetsHTML = '';
bathVanityFaucets.forEach((bathVanityFaucet) => {
  bath3VanityFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityFaucet.detail}">${bathVanityFaucet.name}</div>
      <img src="${bathVanityFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathVanityFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3VanityFaucet-area').innerHTML = bath3VanityFaucetsHTML;

let bath3VanityLightsHTML = '';
bathVanityLights.forEach((bathVanityLight) => {
  bath3VanityLightsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityLight.detail}">${bathVanityLight.name}</div>
      <img src="${bathVanityLight.image}" class="imgItems">
      <div class="optionPrice">${bathVanityLight.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3VanityLight-area').innerHTML = bath3VanityLightsHTML;

let bath3VanityMirrorsHTML = '';
bathVanityMirrors.forEach((bathVanityMirror) => {
  bath3VanityMirrorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathVanityMirror.detail}">${bathVanityMirror.name}</div>
      <img src="${bathVanityMirror.image}" class="imgItems">
      <div class="optionPrice">${bathVanityMirror.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3VanityMirror-area').innerHTML = bath3VanityMirrorsHTML;

let bath3ToiletsHTML = '';
bathToilets.forEach((bathToilet) => {
  bath3ToiletsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathToilet.detail}">${bathToilet.name}</div>
      <img src="${bathToilet.image}" class="imgItems">
      <div class="optionPrice">${bathToilet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3Toilet-area').innerHTML = bath3ToiletsHTML;

let bath3TubsHTML = '';
bathTubs.forEach((bathTub) => {
  bath3TubsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathTub.detail}">${bathTub.name}</div>
      <img src="${bathTub.image}" class="imgItems">
      <div class="optionPrice">${bathTub.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3Tub-area').innerHTML = bath3TubsHTML;

let bath3ShowerFaucetsHTML = '';
bathShowerFaucets.forEach((bathShowerFaucet) => {
  bath3ShowerFaucetsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerFaucet.detail}">${bathShowerFaucet.name}</div>
      <img src="${bathShowerFaucet.image}" class="imgItems">
      <div class="optionPrice">${bathShowerFaucet.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3ShowerFaucet-area').innerHTML = bath3ShowerFaucetsHTML;

let bath3ShowersHTML = '';
bathShowers.forEach((bathShower) => {
  bath3ShowersHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShower.detail}">${bathShower.name}</div>
      <img src="${bathShower.image}" class="imgItems">
      <div class="optionPrice">${bathShower.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3Shower-area').innerHTML = bath3ShowersHTML;

let bath3ShowerEnclosuresHTML = '';
bathShowerEnclosures.forEach((bathShowerEnclosure) => {
  bath3ShowerEnclosuresHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${bathShowerEnclosure.detail}">${bathShowerEnclosure.name}</div>
      <img src="${bathShowerEnclosure.image}" class="imgItems">
      <div class="optionPrice">${bathShowerEnclosure.price}</div>
    </div>
  `;
})
document.querySelector('.js-bath3ShowerEnclosure-area').innerHTML = bath3ShowerEnclosuresHTML;


let laminateFloorsHTML = '';
laminateFloors.forEach((laminateFloor) => {
  laminateFloorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${laminateFloor.detail}">${laminateFloor.name}</div>
      <img src="${laminateFloor.image}" class="imgItems">
      <div class="optionPrice">${laminateFloor.price}</div>
    </div>
  `;
})
document.querySelector('.js-laminateFloor-area').innerHTML = laminateFloorsHTML;

let vinylFloorsHTML = '';
vinylFloors.forEach((vinylFloor) => {
  vinylFloorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${vinylFloor.detail}">${vinylFloor.name}</div>
      <img src="${vinylFloor.image}" class="imgItems">
      <div class="optionPrice">${vinylFloor.price}</div>
    </div>
  `;
})
document.querySelector('.js-vinylFloor-area').innerHTML = vinylFloorsHTML;

let hardwoodFloorsHTML = '';
hardwoodFloors.forEach((hardwoodFloor) => {
  hardwoodFloorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${hardwoodFloor.detail}">${hardwoodFloor.name}</div>
      <img src="${hardwoodFloor.image}" class="imgItems">
      <div class="optionPrice">${hardwoodFloor.price}</div>
    </div>
  `;
})
document.querySelector('.js-hardwoodFloor-area').innerHTML = hardwoodFloorsHTML;

let tileFloorsHTML = '';
tileFloors.forEach((tileFloor) => {
  tileFloorsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${tileFloor.detail}">${tileFloor.name}</div>
      <img src="${tileFloor.image}" class="imgItems">
      <div class="optionPrice">${tileFloor.price}</div>
    </div>
  `;
})
document.querySelector('.js-tileFloor-area').innerHTML = tileFloorsHTML;

let baseboardsHTML = '';
baseboards.forEach((baseboard) => {
  baseboardsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${baseboard.detail}">${baseboard.name}</div>
      <img src="${baseboard.image}" class="imgItems">
      <div class="optionPrice">${baseboard.price}</div>
    </div>
  `;
})
document.querySelector('.js-baseboard-area').innerHTML = baseboardsHTML;

let shoemoldsHTML = '';
shoemolds.forEach((shoemold) => {
  shoemoldsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${shoemold.detail}">${shoemold.name}</div>
      <img src="${shoemold.image}" class="imgItems">
      <div class="optionPrice">${shoemold.price}</div>
    </div>
  `;
})
document.querySelector('.js-shoemold-area').innerHTML = shoemoldsHTML;


let wallPaintsHTML = '';
wallPaints.forEach((wallPaint) => {
  wallPaintsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${wallPaint.detail}">${wallPaint.name}</div>
      <img src="${wallPaint.image}" class="imgItems">
      <div class="optionPrice">${wallPaint.price}</div>
    </div>
  `;
})
document.querySelector('.js-wallPaint-area').innerHTML = wallPaintsHTML;

let doorPaintsHTML = '';
doorPaints.forEach((doorPaint) => {
  doorPaintsHTML += `
    <div class="optionColumn">
      <div class="optionBox" data-detail="${doorPaint.detail}">${doorPaint.name}</div>
      <img src="${doorPaint.image}" class="imgItems">
      <div class="optionPrice">${doorPaint.price}</div>
    </div>
  `;
})
document.querySelector('.js-doorPaint-area').innerHTML = doorPaintsHTML;

