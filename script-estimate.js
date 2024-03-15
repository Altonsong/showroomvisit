document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const stdPriceParam = urlParams.get('stdPrice');
  const costNumberElement = document.querySelector('.costNumber');

  if (stdPriceParam !== null) {
    costNumberElement.textContent = '$' + stdPriceParam;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const stdPriceParam = urlParams.get('stdPrice');
  const costNumberElement = document.querySelector('.costNumber');

  if (stdPriceParam !== null) {
    const stdPriceNumber = parseFloat(stdPriceParam);

    if (!isNaN(stdPriceNumber)) {
      const formattedPrice = stdPriceNumber.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
      });

      costNumberElement.textContent = '$' + formattedPrice;
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);

  const excludeKitchen = urlParams.get('excludeKitchen') === 'true';
  const excludeBath1 = urlParams.get('excludeBath1') === 'true';
  const excludeBath2 = urlParams.get('excludeBath2') === 'true';
  const excludeBath3 = urlParams.get('excludeBath3') === 'true';
  const excludeFloor = urlParams.get('excludeFloor') === 'true';
  const excludePaint = urlParams.get('excludePaint') === 'true';

  hideExcludedSections(excludeKitchen, excludeBath1, excludeBath2, excludeBath3, excludeFloor, excludePaint);

//----------------------------

const weeksElement = document.querySelector('.weeks');

if (excludeKitchen && excludeBath1 && excludeBath2 && excludeBath3) {
  weeksElement.textContent = "1 week";
} else if (excludeBath1 && excludeBath2 && excludeBath3) {
  weeksElement.textContent = "3-4 weeks";
} else if (excludeKitchen && excludeBath2 && excludeBath3) {
  weeksElement.textContent = "3-4 weeks";
} else if (!excludeBath3) {
  weeksElement.textContent = "4-5 weeks";
}

//----------------------------

});

function hideExcludedSections(excludeKitchen, excludeBath1, excludeBath2, excludeBath3, excludeFloor, excludePaint) {
  if (excludeKitchen) {
    const kitchenSection = document.querySelector('.kitchen');
    if (kitchenSection) {
      kitchenSection.style.display = 'none';
      shiftServiceAreas(kitchenSection, '.serviceArea > div');
    }
  }

  if (excludeBath1) {
    const bathroomSection = document.querySelector('.bathroom1');
    if (bathroomSection) {
      bathroomSection.style.display = 'none';
      shiftServiceAreas(bathroomSection, '.serviceArea > div');
    }
  }

  if (excludeBath2) {
    const bathroomSection = document.querySelector('.bathroom2');
    if (bathroomSection) {
      bathroomSection.style.display = 'none';
      shiftServiceAreas(bathroomSection, '.serviceArea > div');
    }
  }

  if (excludeBath3) {
    const bathroomSection = document.querySelector('.bathroom3');
    if (bathroomSection) {
      bathroomSection.style.display = 'none';
      shiftServiceAreas(bathroomSection, '.serviceArea > div');
    }
  }

  if (excludeFloor) {
    const floorSection = document.querySelector('.flooring');
    if (floorSection) {
      floorSection.style.display = 'none';
      shiftServiceAreas(floorSection, '.serviceArea > div');
    }
  }

  if (excludePaint) {
    const paintSection = document.querySelector('.paint');
    if (paintSection) {
      paintSection.style.display = 'none';
      shiftServiceAreas(paintSection, '.serviceArea > div');
    }
  }

  if (excludeKitchen && excludeBath1 && excludeBath2 && excludeBath3) {
    const plumbingSection = document.querySelector('.plumbing');
    if (plumbingSection) {
      plumbingSection.style.display = 'none';
      shiftServiceAreas(plumbingSection, '.serviceArea > div');
    }
  }
}

function shiftServiceAreas(excludedSection, selector) {
  const serviceAreas = document.querySelectorAll(selector);
  if (serviceAreas) {
    serviceAreas.forEach((area) => {
      if (area !== excludedSection && area.style.display !== 'none') {
        area.style.order -= 1;
      }
    });
  }
}

