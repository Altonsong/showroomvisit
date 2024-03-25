// 定义用于计算报价的变量
let locationCost = 1500;

let kCabCount = 0;
let kCabCost = 0;
let kOthCost = 5000;
let kitchenCost = 0;

let bath1Cost = 0;
let bath2Cost = 0;
let bath3Cost = 0;

let laminateSize = 0;
let laminateCost = 0;
let vinylSize = 0;
let vinylCost = 0;
let hardwoodSize = 0;
let hardwoodCost = 0;
let floortileSize = 0;
let floortileCost = 0;

let wallPaintSize = 0;
let wallPaintCost = 0;
let doorPaintAmount = 0;
let doorPaintCost = 0;

let kitDemoCost = 0;
let bath1DemoCost = 0;
let bath2DemoCost = 0;
let bath3DemoCost = 0;
let laminateDemoCost = 0;
let vinylDemoCost = 0;
let hardwoodDemoCost = 0;
let floortileDemoCost = 0;

let kitDeliCost = 0;
let bath1DeliCost = 0;
let bath2DeliCost = 0;
let bath3DeliCost = 0;
let laminateDeliCost = 0;
let vinylDeliCost = 0;
let hardwoodDeliCost = 0;
let floortileDeliCost = 0;

let kitClenCost = 0;
let bath1ClenCost = 0;
let bath2ClenCost = 0;
let bath3ClenCost = 0;
let floorClenCost = 0;

let kitTravCost = 0;
let bath1TravCost = 0;
let bath2TravCost = 0;
let bath3TravCost = 0;
let floorTravCost = 0;

let subTotalCost = 0;

// 在每次成本值发生变化时更新 subTotalCost
function updateSubTotalCost() {
    subTotalCost = locationCost + kitchenCost + bath1Cost + bath2Cost + bath3Cost + floorCost + paintCost + totalDemoCost + totalDeliCost + totalTravCost + totalClenCost;
    console.log("subTotalCost", subTotalCost); // 可以在此处输出 subTotalCost 进行调试
}

//==================================================
//bathroom 根据kind隐藏选项，并计算bath相关施工cost，demolish cost，delivery cost，和travel cost

document.addEventListener('DOMContentLoaded', function() {
  const bath1TubRadio = document.getElementById('bath1Tub');
  const bath1ShowerRadio = document.getElementById('bath1Shower');
  const bath1BothRadio = document.getElementById('bath1Both');

  const kind1BathtubDiv = document.querySelector('.kind1_bathtub');
  const kind1ShowerDiv = document.querySelector('.kind1_shower');
  const kind1ShowerDoorDiv = document.querySelector('.kind1_showerDoor');

  // Hide or show div elements based on radio button selection
  function handleRadioChange() {
      if (bath1TubRadio.checked) {
          kind1ShowerDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'none';
          kind1BathtubDiv.style.display = 'block';
          bath1Cost = 9040;
          bath1DemoCost = 1000;
          bath1DeliCost = 200;
          bath1TravCost = 200;
      } else if (bath1ShowerRadio.checked) {
          kind1BathtubDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          bath1Cost = 10340;
          baht1DemoCost = 1000;
          bath1DeliCost = 200;
          bath1TravCost = 200;
      } else if (bath1BothRadio.checked) {
          kind1BathtubDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          kind1ShowerDoorDiv.style.display = 'block';
          bath1Cost = 12940;
          baht1DemoCost = 1200;
          bath1DeliCost = 200;
          bath1Travcost = 200;
      }
      // console.log(bath1Cost);
      updateSubTotalCost();
  }

  // Attach event listeners to radio buttons
  bath1TubRadio.addEventListener('change', handleRadioChange);
  bath1ShowerRadio.addEventListener('change', handleRadioChange);
  bath1BothRadio.addEventListener('change', handleRadioChange);

  // Initial state on page load
  handleRadioChange();
});

// bath2 kind 选择性显示

document.addEventListener('DOMContentLoaded', function() {
  const bath2TubRadio = document.getElementById('bath2Tub');
  const bath2ShowerRadio = document.getElementById('bath2Shower');
  const bath2BothRadio = document.getElementById('bath2Both');

  const kind1BathtubDiv = document.querySelector('.kind2_bathtub');
  const kind1ShowerDiv = document.querySelector('.kind2_shower');
  const kind1ShowerDoorDiv = document.querySelector('.kind2_showerDoor');

  // Hide or show div elements based on radio button selection
  function handleRadioChange() {
      if (bath2TubRadio.checked) {
          kind1ShowerDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'none';
          kind1BathtubDiv.style.display = 'block';
          bath2Cost = 9040;
          bath2DemoCost = 1000;
          bath2DeliCost = 200;
          bath2TravCost = 200;
      } else if (bath2ShowerRadio.checked) {
          kind1BathtubDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          bath2Cost = 10340;
          bath2DemoCost = 1000;
          bath2DeliCost = 200;
          bath2TravCost = 200;
      } else if (bath2BothRadio.checked) {
          kind1BathtubDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          kind1ShowerDoorDiv.style.display = 'block';
          bath2Cost = 12940
          bath2DemoCost = 1200;
          bath2DeliCost = 200;
          bath2TravCost = 200;
      }
      // console.log(bath2Cost);
      updateSubTotalCost();

  }

  // Attach event listeners to radio buttons
  bath2TubRadio.addEventListener('change', handleRadioChange);
  bath2ShowerRadio.addEventListener('change', handleRadioChange);
  bath2BothRadio.addEventListener('change', handleRadioChange);

  // Initial state on page load
  handleRadioChange();
});

// bath3 kind 选择性显示

document.addEventListener('DOMContentLoaded', function() {
  const bath3TubRadio = document.getElementById('bath3Tub');
  const bath3ShowerRadio = document.getElementById('bath3Shower');
  const bath3BothRadio = document.getElementById('bath3Both');
  const bath3PowderRadio = document.getElementById('bath3Powder');

  const kind1BathtubDiv = document.querySelector('.kind3_bathtub');
  const kind1ShowerDiv = document.querySelector('.kind3_shower');
  const kind1ShowerDoorDiv = document.querySelector('.kind3_showerDoor');
  const kind1WallTileDiv = document.querySelector('.kind3_wallTile');
  const kind1ShowerFaucetDiv = document.querySelector('.kind3_showerFaucet')

  // Hide or show div elements based on radio button selection
  function handleRadioChange() {
      if (bath3TubRadio.checked) {
          kind1ShowerDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'none';
          kind1BathtubDiv.style.display = 'block';
          bath3Cost = 9040;
          bath3DemoCost = 1000;
          bath3DeliCost = 200;
          bath3TravCost = 200;
      } else if (bath3ShowerRadio.checked) {
          kind1BathtubDiv.style.display = 'none';
          kind1ShowerDoorDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          bath3Cost = 10340;
          bath3DemoCost = 1000;
          bath3DeliCost = 200;
          bath3TravCost = 200;
      } else if (bath3BothRadio.checked) {
          kind1BathtubDiv.style.display = 'block';
          kind1ShowerDiv.style.display = 'block';
          kind1ShowerDoorDiv.style.display = 'block';
          bath3Cost = 12940
          bath3DemoCost = 1200;
          bath3DeliCost = 200;
          bath3TravCost = 200;
      } else if (bath3PowderRadio.checked) {
        kind1BathtubDiv.style.display = 'none';
        kind1ShowerDiv.style.display = 'none';
        kind1ShowerDoorDiv.style.display = 'none';
        kind1WallTileDiv.style.display = 'none';
        kind1ShowerFaucetDiv.style.display = 'none';
          bath3Cost = 4430;
          bath3DemoCost = 400;
          bath3DeliCost = 100;
          bath3TravCost = 200;
      }
      // console.log(bath3Cost);
      updateSubTotalCost();
  }

  // Attach event listeners to radio buttons
  bath3TubRadio.addEventListener('change', handleRadioChange);
  bath3ShowerRadio.addEventListener('change', handleRadioChange);
  bath3BothRadio.addEventListener('change', handleRadioChange);
  bath3PowderRadio.addEventListener('change', handleRadioChange);

  // Initial state on page load
  handleRadioChange();
});

//==================================================
//计算报价
const locationSelect = document.getElementById('locationSelector');
locationSelect.addEventListener('change', function() {
    const selectedValue = locationSelect.value;
    switch (selectedValue) {
        case 'disabled':
            locationCost = 1500;
            break;
        case 'torontoDowntown':
            locationCost = 1500;
            break;
        case 'northYork':
            locationCost = 800;
            break;
        case 'scarborough':
            locationCost = 0;
            break;
        case 'markham':
            locationCost = 0;
            break;
        case 'richmondHill':
            locationCost = 500;
            break;
        case 'etobicoke':
            locationCost = 1500;
            break;
        case 'mississauga':
            locationCost = 2000;
            break;
        case 'vaughan':
            locationCost = 800;
            break;
        case 'newMarket':
            locationCost = 1200;
            break;
        default:
            locationCost = 0;
            break;
    }
    updateSubTotalCost();
});



const cabinetInput = document.getElementById("cabinetCount");
cabinetInput.addEventListener("input", function() {
    kCabCount = parseInt(cabinetCount.value) || 0;
    kCabCost = kCabCount * 380; 
kitchenCost = kCabCost + kOthCost;
updateSubTotalCost(); // 更新 subTotalCost

});

const laminateInput = document.getElementById("laminateArea");
laminateInput.addEventListener("input", function(){
    laminateSize = parseInt(laminateInput.value) || 0;

    if (laminateSize < 200) {
        laminateCost = laminateSize * 10;
    } else if (laminateSize < 800) {
        laminateCost = laminateSize * 6;
    } else if (laminateSize < 1400) {
        laminateCost = laminateSize * 5;
    } else {
        laminateCost = laminateSize * 4;
    }

    laminateDemoCost = laminateSize * 0.5;

    updateSubTotalCost(); // 更新 subTotalCost

});

const vinylInput = document.getElementById("vinylArea");
vinylInput.addEventListener("input", function(){
    vinylSize = parseInt(vinylInput.value) || 0;

    if (vinylSize < 200) {
        vinylCost = vinylSize * 11;
    } else if (vinylSize < 800) {
        vinylCost = vinylSize * 7;
    } else if (vinylSize < 1400) {
        vinylCost = vinylSize * 6;
    } else {
        vinylCost = vinylSize * 5;
    }

    vinylDemoCost = vinylSize * 0.5;

    updateSubTotalCost(); // 更新 subTotalCost

});

const hardwoodInput = document.getElementById("hardwoodArea");
hardwoodInput.addEventListener("input", function(){
    hardwoodSize = parseInt(hardwoodInput.value) || 0;

    if (hardwoodSize < 200) {
        hardwoodCost = hardwoodSize * 15;
    } else if (hardwoodSize < 800) {
        hardwoodCost = hardwoodSize * 11;
    } else if (hardwoodSize < 1400) {
        hardwoodCost = hardwoodSize * 10;
    } else {
        hardwoodCost = hardwoodSize * 9;
    }

    hardwoodDemoCost = hardwoodSize * 0.5;

    updateSubTotalCost(); // 更新 subTotalCost

});

const floortileInput = document.getElementById("floortileArea");
floortileInput.addEventListener("input", function(){
    floortileSize = parseInt(floortileInput.value) || 0;

    if (floortileSize < 200) {
        floortileCost = floortileSize * 30;
    } else if (floortileSize < 800) {
        floortileCost = floortileSize * 25;
    } else if (floortileSize < 1400) {
        floortileCost = floortileSize * 23;
    } else {
        floortileCost = floortileSize * 20;
    }

    floortileDemoCost = floortileSize * 0.5;

    updateSubTotalCost(); // 更新 subTotalCost

});

const wallPaintInput = document.getElementById("wallPaintArea");
wallPaintInput.addEventListener("input", function(){
  wallPaintSize = parseInt(wallPaintInput.value) || 0;

    if (wallPaintSize < 200) {
      wallPaintCost = wallPaintSize * 4;
    } else if (wallPaintSize < 800) {
      wallPaintCost = wallPaintSize * 3.5;
    } else if (wallPaintSize < 1400) {
      wallPaintCost = wallPaintSize * 3;
    } else {
      wallPaintCost = wallPaintSize * 2.5;
    }

    updateSubTotalCost(); // 更新 subTotalCost

});

const doorPaintInput = document.getElementById("doorAmount");
doorPaintInput.addEventListener("input", function(){
  doorPaintAmount = parseInt(doorPaintInput.value) || 0;

    if (doorPaintAmount < 6) {
      doorPaintCost = doorPaintAmount * 90;
    } else if (doorPaintAmount < 10) {
      doorPaintCost = doorPaintAmount * 80;
    } else {
      doorPaintCost = doorPaintAmount * 100;
    }

    updateSubTotalCost(); // 更新 subTotalCost

});

const cabinetCountInput = document.getElementById("cabinetCount");
cabinetCountInput.addEventListener("input", function(){
    const cabinetCount = parseInt(cabinetCountInput.value) || 0;

    if (cabinetCount > 0) {
        kitDemoCost = 1000;
        kitDeliCost = 200;
        kitTravCost = 200;
        
    } else {
        kitDemoCost = 0;
        kitDeliCost = 0;
        kitTravCost = 0;
    }

    updateSubTotalCost(); // 更新 subTotalCost

});

let totalDemoCost = 0;
let totalDeliCost = 0;
let totalTravCost = 0;
let totalClenCost = 0;

const gMarRate = 0.2;
let conTing = 0;
let mFee = 0;

let totalCost = 0;
let stdPrice = 0;

// 更新 subTotalCost 的函数
function updateSubTotalCost() {
    floorCost = laminateCost + vinylCost + hardwoodCost + floortileCost;
    paintCost = wallPaintCost + doorPaintCost;
    totalDemoCost = kitDemoCost + bath1DemoCost + bath2DemoCost + bath3DemoCost;
    totalDeliCost = kitDeliCost + bath1DeliCost + bath2DeliCost + bath3DeliCost;
    totalTravCost = kitTravCost + bath1TravCost + bath2TravCost + bath3TravCost;
    totalClenCost = kitClenCost + bath1ClenCost + bath2ClenCost + bath3ClenCost;

    if (totalDemoCost < 1600) {
        totalDemoCost = 1600;
    }

    if (totalDeliCost < 300) {
        totalDeliCost = 300;
    } else if (totalDeliCost > 700) {
        totalDeliCost = 700;
    }

    if (totalTravCost < 500) {
        totalTravCost = 500;
    } else if (totalTravCost > 1500) {
        totalTravCost = 1500;
    }
    
    if (totalClenCost < 300) {
        totalClenCost = 300;
    } else if (totalClenCost > 600) {
        totalClenCost = 600;
    }


    subTotalCost = locationCost + kitchenCost + bath1Cost + bath2Cost + bath3Cost + floorCost + paintCost + totalDemoCost + totalDeliCost + totalTravCost + totalClenCost;

    console.log("location cost", locationCost);
    console.log("kitchenCost", kitchenCost);
    console.log("bath1Cost", bath1Cost);
    console.log("bath2Cost", bath2Cost);
    console.log("bath3cost", bath3Cost);
    console.log("floorCost", floorCost);
    console.log("paintCost", paintCost);
    console.log("total demolish cost", totalDemoCost);
    console.log("total delivery cost", totalDeliCost);
    console.log("total travel cost", totalTravCost);
    console.log("total clean cost", totalClenCost);
    console.log("subTotalCost", subTotalCost);
    
    if (subTotalCost === 0) {
        stdPrice = 0;
    } else {
        conTing = subTotalCost * 0.1;
        mFee = subTotalCost * 0.05;
        totalCost = subTotalCost + conTing + mFee;
        testGProfit = totalCost / (1 - gMarRate) - totalCost;
    
        if (testGProfit > 18000) {
            stdPrice = totalCost + 18000;
        } else if (testGProfit <= 2000) {
            stdPrice = totalCost + 2000;
        } else {
            stdPrice = totalCost + testGProfit;
        }
    }

    console.log("stdPrice",stdPrice);
    
}


// const kCabChoPriceElement = document.getElementById("kCabChoPrice");
// const kCabChoPrice = parseFloat(kCabChoPriceElement.innerText);

const optionRows = document.querySelectorAll('.optionRow');

optionRows.forEach(optionRow => {
  // Get all optionColumns within the current optionRow
  const optionColumns = optionRow.querySelectorAll('.optionColumn');

  optionColumns.forEach(optionColumn => {
      // Add a click event listener to each optionColumn
      optionColumn.addEventListener('click', () => {
          // Get the necessary elements within the current optionColumn
          const optionBox = optionColumn.querySelector('.optionBox');
          const newChoiceText = optionBox.innerText;
          const newDetail = optionBox.getAttribute('data-detail');
          const newImgSrc = optionColumn.querySelector('.imgItems').getAttribute('src');
          const optionPrice = optionColumn.querySelector('.optionPrice');
          const newChoicePrice = parseFloat(optionPrice.innerText); // Parse the price to float

           // Print the ChoicePrice to the console
           console.log('Choice Price:', newChoicePrice);

          // Add the newChoicePrice to the totalUpgradePrice
          // totalUpgradePrice += newChoicePrice;

          // Find the elements to be updated in the choiceRow
          const choiceBox = optionRow.closest('.itemBox').querySelector('.choiceRow .choiceBox');
          const detailBox = optionRow.closest('.itemBox').querySelector('.choiceRow .detailBox');
          const imgItem = optionRow.closest('.itemBox').querySelector('.choiceRow .imgItems');
          const choicePrice = optionRow.closest('.itemBox').querySelector('.choiceRow .choicePrice');

          // Update the content and attributes with the values from optionBox
          if (choiceBox) {
              choiceBox.innerText = newChoiceText;
          }
          if (detailBox) {
              detailBox.innerText = newDetail;
          }
          if (imgItem) {
              imgItem.setAttribute('src', newImgSrc);
          }
          if (choicePrice) {
              choicePrice.innerText = newChoicePrice.toFixed(2); // Set the price with two decimal places
          }

       });
  });
});


let totalChoicePrice = 0; // 初始化总价为0
// let laminateChoicePrice = 0;


// document.addEventListener('DOMContentLoaded', function() {
//     let estimateButton = document.getElementById('estimateBtn');

//     estimateButton.addEventListener('click', function() {
//         let totalChoicePrice = 0; // 初始化总价为0
//         const choicePrices = document.querySelectorAll('.choicePrice'); // 获取所有的choicePrice元素
        
//         // 遍历所有的choicePrice元素并将价格加总
//         choicePrices.forEach(choicePrice => {
//             totalChoicePrice += parseFloat(choicePrice.innerText);
//             console.log("total choice price", totalChoicePrice);
//         });

//         // let totalChoicePrice = 0; // 初始化总价为0
//         let laminateArea = parseInt(document.getElementById('laminateArea').value) || 0;
//         let vinylArea = parseInt(document.getElementById('vinylArea').value) || 0;
//         let hardwoodArea = parseInt(document.getElementById('hardwoodArea').value) || 0;
//         let floortileArea = parseInt(document.getElementById('floortileArea').value) || 0;

//         let wallpaintArea = parseInt(document.getElementById('wallPaintArea').value) || 0;
//         let doorpaintAmount = parseInt(document.getElementById('doorAmount').value) || 0;


//         let choiceLaminatePrice = parseFloat(document.getElementById('choiceLaminatePrice').innerText);
//         let choiceVinylPrice = parseFloat(document.getElementById('choiceVinylPrice').innerText);
//         let choiceHardwoodPrice = parseFloat(document.getElementById('choiceHardwoodPrice').innerText);
//         let choiceFloortilePrice = parseFloat(document.getElementById('choiceFloortilePrice').innerText);

//         let choiceBaseboardPrice = parseFloat(document.getElementById('choiceBaseboardPrice').innerText);
//         let choiceShoemoldPrice = parseFloat(document.getElementById('choiceShoemoldPrice').innerText);

//         let choiceWallpaintPrice = parseFloat(document.getElementById('choiceWallpaintPrice').innerText);
//         let choiceDoorpaintPrice = parseFloat(document.getElementById('choiceDoorpaintPrice').innerText);


//         let totalArea = laminateArea + vinylArea + hardwoodArea + floortileArea;

//         let laminateChoicePrice = 0;
//         if (choiceLaminatePrice === 0) {
//             laminateChoicePrice = 0;
//         } else {
//             laminateChoicePrice = laminateArea * choiceLaminatePrice;
//         } 

//         let vinylChoicePrice = 0;
//         if (choiceVinylPrice === 0) {
//             vinylChoicePrice = 0;
//         } else {
//             vinylChoicePrice = vinylArea * choiceVinylPrice;
//         }

//         let hardwoodChoicePrice = 0;
//         if (choiceHardwoodPrice === 0) {
//             hardwoodChoicePrice = 0;
//         } else {
//             hardwoodChoicePrice = hardwoodArea * choiceHardwoodPrice;
//         }

//         let floortileChoicePrice = 0;
//         if (choiceFloortilePrice === 0) {
//             floortileChoicePrice = 0;
//         } else {
//             floortileChoicePrice = floortileArea * choiceFloortilePrice;
//         }

//         let baseboardChoicePrice = 0;
//         if (choiceBaseboardPrice === 0) {
//             baseboardChoicePrice = 0;
//         } else {
//             baseboardChoicePrice = totalArea * choiceBaseboardPrice; 
//         }

//         let shoemoldChoicePrice = 0;
//         if (choiceShoemoldPrice === 0) {
//             shoemoldChoicePrice = 0;
//         } else {
//             shoemoldChoicePrice = totalArea * choiceShoemoldPrice;
//         }

//         let wallpaintChoicePrice = 0;
//         if (choiceWallpaintPrice === 0) {
//             wallpaintChoicePrice = 0;
//         } else {
//             wallpaintChoicePrice = wallpaintArea * choiceWallpaintPrice;
//         }

//         let doorpaintChoicePrice = 0;
//         if (choiceDoorpaintPrice === 0) {
//             doorpaintChoicePrice = 0;
//         } else {
//             doorpaintChoicePrice = doorpaintAmount * choiceDoorpaintPrice;
//         }

//         let choiceFloorPaintPrice = laminateChoicePrice + vinylChoicePrice + hardwoodChoicePrice + floortileChoicePrice + baseboardChoicePrice + shoemoldChoicePrice + wallpaintChoicePrice + doorpaintChoicePrice;

//         console.log("laminate choice price", laminateChoicePrice);
//         console.log("vinyl Choice Price", vinylChoicePrice);
//         console.log("hardwood Choice Price", hardwoodChoicePrice);
//         console.log("floor tile Choice Price", floortileChoicePrice);

//         console.log("baseboard Choice Price", baseboardChoicePrice);
//         console.log("shoemold Choice Price", shoemoldChoicePrice);

//         console.log("wall paint Choice Price", wallpaintChoicePrice);
//         console.log("door paint Choice Price", doorpaintChoicePrice);

//         console.log("choice floor paint price", choiceFloorPaintPrice);


//         // 将总价合并到stdPrice中并向上取整到百位
//         stdPrice = Math.ceil((stdPrice + totalChoicePrice + choiceFloorPaintPrice) / 100) * 100;
        
//         // 创建URL参数对象
//         let urlParams = new URLSearchParams();
//         urlParams.append('stdPrice', stdPrice);
        
//         // 检查并添加其他查询参数
//         // let kitchenExclude = document.getElementById('kitchenExclude');
//         // if (kitchenExclude.checked) {
//         //     urlParams.append('excludeKitchen', 'true');
//         // }

//         if (cabinetInput.value === "" || parseInt(cabinetInput.value) === 0) {
//             urlParams.append('excludeKitchen', 'true');
//         }

//         let bath1TubRadioCheck = document.getElementById('bath1Tub');
//         let bath1ShowerRadioCheck = document.getElementById('bath1Shower');
//         let bath1BothRadioCheck = document.getElementById('bath1Both');
//         let bath2TubRadioCheck = document.getElementById('bath2Tub');
//         let bath2ShowerRadioCheck = document.getElementById('bath2Shower');
//         let bath2BothRadioCheck = document.getElementById('bath2Both');
//         let bath3TubRadioCheck = document.getElementById('bath3Tub');
//         let bath3ShowerRadioCheck = document.getElementById('bath3Shower');
//         let bath3BothRadioCheck = document.getElementById('bath3Both');
//         let bath3PowderRadioCheck = document.getElementById('bath3Powder');



//         if (!bath1TubRadioCheck.checked && !bath1ShowerRadioCheck.checked && !bath1BothRadioCheck.checked) {
//             urlParams.append('excludeBath1', 'true');
//         }

//         if (!bath2TubRadioCheck.checked && !bath2ShowerRadioCheck.checked && !bath2BothRadioCheck.checked) {
//             urlParams.append('excludeBath2', 'true');
//         }

//         if (!bath3TubRadioCheck.checked && !bath3ShowerRadioCheck.checked && !bath3BothRadioCheck.checked &&!bath3PowderRadioCheck) {
//             urlParams.append('excludeBath3', 'true');
//         }
        
        

//         if ((laminateInput.value === "" || parseInt(laminateInput.value) === 0) &&
//         (vinylInput.value === "" || parseInt(vinylInput.value) === 0) &&
//         (hardwoodInput.value === "" || parseInt(hardwoodInput.value) === 0) &&
//         (floortileInput.value === "" || parseInt(floortileInput.value) === 0)) {
//         urlParams.append('excludeFloor', 'true');
//         }

//         if ((wallPaintInput.value === "" || parseInt(wallPaintInput.value) === 0) &&
//         (doorPaintInput.value === "" || parseInt(doorPaintInput.value) === 0)) {
//         urlParams.append('excludePaint', 'true');
//         }


//         // 将查询参数附加到 URL 中
//         let url = 'estimate.html' + '?' + urlParams.toString();
        
//         // 打开新的estimate.html网页
//         window.open(url, '_blank');
//     });
// });



// //============================
// //测试更新打开报价页面部分
// document.addEventListener('DOMContentLoaded', function() {
//     var estimateButton = document.getElementById('estimateBtn');
  
//     estimateButton.addEventListener('click', function() {
//       var urlParams = new URLSearchParams();
  
//       var urlParams = new URLSearchParams();
//       urlParams.append('stdPrice', stdPrice);
  
//       // 将查询参数附加到 URL 中
//       var url = 'estimate.html' + '?' + urlParams.toString();
  
//         var kitchenExclude = document.getElementById('kitchenExclude');
//         if (kitchenExclude.checked) {
//           urlParams.append('excludeKitchen', 'true');
//         }
  
//         var bathExclude = document.getElementById('bath1Exclude');
//         if (bathExclude.checked) {
//           urlParams.append('excludeBathroom', 'true');
//         }
  
//         var bathExclude = document.getElementById('bath2Exclude');
//         if (bathExclude.checked) {
//           urlParams.append('excludeBathroom', 'true');
//         }
  
//         var bathExclude = document.getElementById('bath3Exclude');
//         if (bathExclude.checked) {
//           urlParams.append('excludeBathroom', 'true');
//         }
  
  
//         var floorExclude = document.getElementById('floorExclude');
//         if (floorExclude.checked) {
//           urlParams.append('excludeFloor', 'true');
//       }
  
//         var paintExclude = document.getElementById('paintExclude');
//         if (paintExclude.checked) {
//         urlParams.append('excludePaint', 'true');
//         }
  
//         var url = 'estimate.html' + '?' + urlParams.toString();
//         window.open(url, '_blank');
      
//     });
  
//   });


//============================
