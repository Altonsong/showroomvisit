
document.addEventListener('DOMContentLoaded', function() {
  let estimateButton = document.getElementById('estimateBtn');

  estimateButton.addEventListener('click', function() {

    let clientName = document.getElementById('clientName').value;
    let clientAddress = document.getElementById('clientAddress').value;


      let totalChoicePrice = 0; // 初始化总价为0
      const choicePrices = document.querySelectorAll('.choicePrice'); // 获取所有的choicePrice元素
      
      // 遍历所有的choicePrice元素并将价格加总
      choicePrices.forEach(choicePrice => {
          totalChoicePrice += parseFloat(choicePrice.innerText);
          console.log("total choice price", totalChoicePrice);
      });

      // let totalChoicePrice = 0; // 初始化总价为0
      let laminateArea = parseInt(document.getElementById('laminateArea').value) || 0;
      let vinylArea = parseInt(document.getElementById('vinylArea').value) || 0;
      let hardwoodArea = parseInt(document.getElementById('hardwoodArea').value) || 0;
      let floortileArea = parseInt(document.getElementById('floortileArea').value) || 0;

      let wallpaintArea = parseInt(document.getElementById('wallPaintArea').value) || 0;
      let doorpaintAmount = parseInt(document.getElementById('doorAmount').value) || 0;


      let choiceLaminatePrice = parseFloat(document.getElementById('choiceLaminatePrice').innerText);
      let choiceVinylPrice = parseFloat(document.getElementById('choiceVinylPrice').innerText);
      let choiceHardwoodPrice = parseFloat(document.getElementById('choiceHardwoodPrice').innerText);
      let choiceFloortilePrice = parseFloat(document.getElementById('choiceFloortilePrice').innerText);

      let choiceBaseboardPrice = parseFloat(document.getElementById('choiceBaseboardPrice').innerText);
      let choiceShoemoldPrice = parseFloat(document.getElementById('choiceShoemoldPrice').innerText);

      let choiceWallpaintPrice = parseFloat(document.getElementById('choiceWallpaintPrice').innerText);
      let choiceDoorpaintPrice = parseFloat(document.getElementById('choiceDoorpaintPrice').innerText);


      let totalArea = laminateArea + vinylArea + hardwoodArea + floortileArea;

      let laminateChoicePrice = 0;
      if (choiceLaminatePrice === 0) {
          laminateChoicePrice = 0;
      } else {
          laminateChoicePrice = laminateArea * choiceLaminatePrice;
      } 

      let vinylChoicePrice = 0;
      if (choiceVinylPrice === 0) {
          vinylChoicePrice = 0;
      } else {
          vinylChoicePrice = vinylArea * choiceVinylPrice;
      }

      let hardwoodChoicePrice = 0;
      if (choiceHardwoodPrice === 0) {
          hardwoodChoicePrice = 0;
      } else {
          hardwoodChoicePrice = hardwoodArea * choiceHardwoodPrice;
      }

      let floortileChoicePrice = 0;
      if (choiceFloortilePrice === 0) {
          floortileChoicePrice = 0;
      } else {
          floortileChoicePrice = floortileArea * choiceFloortilePrice;
      }

      let baseboardChoicePrice = 0;
      if (choiceBaseboardPrice === 0) {
          baseboardChoicePrice = 0;
      } else {
          baseboardChoicePrice = totalArea * choiceBaseboardPrice; 
      }

      let shoemoldChoicePrice = 0;
      if (choiceShoemoldPrice === 0) {
          shoemoldChoicePrice = 0;
      } else {
          shoemoldChoicePrice = totalArea * choiceShoemoldPrice;
      }

      let wallpaintChoicePrice = 0;
      if (choiceWallpaintPrice === 0) {
          wallpaintChoicePrice = 0;
      } else {
          wallpaintChoicePrice = wallpaintArea * choiceWallpaintPrice;
      }

      let doorpaintChoicePrice = 0;
      if (choiceDoorpaintPrice === 0) {
          doorpaintChoicePrice = 0;
      } else {
          doorpaintChoicePrice = doorpaintAmount * choiceDoorpaintPrice;
      }

      let choiceFloorPaintPrice = laminateChoicePrice + vinylChoicePrice + hardwoodChoicePrice + floortileChoicePrice + baseboardChoicePrice + shoemoldChoicePrice + wallpaintChoicePrice + doorpaintChoicePrice;

      console.log("laminate choice price", laminateChoicePrice);
      console.log("vinyl Choice Price", vinylChoicePrice);
      console.log("hardwood Choice Price", hardwoodChoicePrice);
      console.log("floor tile Choice Price", floortileChoicePrice);

      console.log("baseboard Choice Price", baseboardChoicePrice);
      console.log("shoemold Choice Price", shoemoldChoicePrice);

      console.log("wall paint Choice Price", wallpaintChoicePrice);
      console.log("door paint Choice Price", doorpaintChoicePrice);

      console.log("choice floor paint price", choiceFloorPaintPrice);


      // 将总价合并到stdPrice中并向上取整到百位
      stdPrice = Math.ceil((stdPrice + totalChoicePrice + choiceFloorPaintPrice) / 100) * 100;
      
      // 创建URL参数对象
      let urlParams = new URLSearchParams();
      urlParams.append('stdPrice', stdPrice);
      
      // 检查并添加其他查询参数
      // let kitchenExclude = document.getElementById('kitchenExclude');
      // if (kitchenExclude.checked) {
      //     urlParams.append('excludeKitchen', 'true');
      // }

      if (cabinetInput.value === "" || parseInt(cabinetInput.value) === 0) {
          urlParams.append('excludeKitchen', 'true');
      }

      let bath1TubRadioCheck = document.getElementById('bath1Tub');
      let bath1ShowerRadioCheck = document.getElementById('bath1Shower');
      let bath1BothRadioCheck = document.getElementById('bath1Both');

      let bath2TubRadioCheck = document.getElementById('bath2Tub');
      let bath2ShowerRadioCheck = document.getElementById('bath2Shower');
      let bath2BothRadioCheck = document.getElementById('bath2Both');

      let bath3TubRadioCheck = document.getElementById('bath3Tub');
      let bath3ShowerRadioCheck = document.getElementById('bath3Shower');
      let bath3BothRadioCheck = document.getElementById('bath3Both');
      let bath3PowderRadioCheck = document.getElementById('bath3Powder');

      //-----------pass shower string test start-----------
      if (!bath1TubRadioCheck.checked && !bath1ShowerRadioCheck.checked && !bath1BothRadioCheck.checked) {
        urlParams.append('excludeBath1', 'true');
    } else if (bath1ShowerRadioCheck.checked) {
        // If bath1Shower radio is checked, append "shower" to URL params
        urlParams.append('bathType', 'shower');
    }

    if (!bath2TubRadioCheck.checked && !bath2ShowerRadioCheck.checked && !bath2BothRadioCheck.checked) {
      urlParams.append('excludebath2', 'true');
  } else if (bath2ShowerRadioCheck.checked) {
      // If bath2Shower radio is checked, append "shower" to URL params
      urlParams.append('bathType', 'shower');
  }

      if (!bath3TubRadioCheck.checked && !bath3ShowerRadioCheck.checked && !bath3BothRadioCheck.checked) {
        urlParams.append('excludebath3', 'true');
    } else if (bath3ShowerRadioCheck.checked) {
        // If bath3Shower radio is checked, append "shower" to URL params
        urlParams.append('bathType', 'shower');
    }

      if (!bath1TubRadioCheck.checked && !bath1ShowerRadioCheck.checked && !bath1BothRadioCheck.checked) {
          urlParams.append('excludeBath1', 'true');
      }

      if (!bath2TubRadioCheck.checked && !bath2ShowerRadioCheck.checked && !bath2BothRadioCheck.checked) {
          urlParams.append('excludeBath2', 'true');
      }

      if (!bath3TubRadioCheck.checked && !bath3ShowerRadioCheck.checked && !bath3BothRadioCheck.checked && !bath3PowderRadioCheck.checked) {
          urlParams.append('excludeBath3', 'true');
      }
      
      if ((laminateInput.value === "" || parseInt(laminateInput.value) === 0) &&
      (vinylInput.value === "" || parseInt(vinylInput.value) === 0) &&
      (hardwoodInput.value === "" || parseInt(hardwoodInput.value) === 0) &&
      (floortileInput.value === "" || parseInt(floortileInput.value) === 0)) {
      urlParams.append('excludeFloor', 'true');
      }

      if ((wallPaintInput.value === "" || parseInt(wallPaintInput.value) === 0) &&
      (doorPaintInput.value === "" || parseInt(doorPaintInput.value) === 0)) {
      urlParams.append('excludePaint', 'true');
      }

      let url = 'estimate.html' + '?' + urlParams.toString();
      

      let newWindow = window.open(url, '_blank');

        if (bath1ShowerRadioCheck.checked && newWindow) {
          newWindow.addEventListener('DOMContentLoaded', function() {
              let bathroom1IconText = newWindow.document.querySelector('.bathroom1 .iconText');
              if (bathroom1IconText) {
                  bathroom1IconText.innerText = bathroom1IconText.innerText.replace('bathtub', 'shower');
              }
          });
        }

        if (bath2ShowerRadioCheck.checked && newWindow) {
          newWindow.addEventListener('DOMContentLoaded', function() {
              let bathroom2IconText = newWindow.document.querySelector('.bathroom2 .iconText');
              if (bathroom2IconText) {
                  bathroom2IconText.innerText = bathroom2IconText.innerText.replace('bathtub', 'shower');
              }
          });
        }

      if (bath3ShowerRadioCheck.checked && newWindow) {
        newWindow.addEventListener('DOMContentLoaded', function() {
            let bathroom3IconText = newWindow.document.querySelector('.bathroom3 .iconText');
            if (bathroom3IconText) {
                bathroom3IconText.innerText = bathroom3IconText.innerText.replace('bathtub', 'shower');
            }

          });
      }


      if (newWindow) {
        newWindow.addEventListener('DOMContentLoaded', function() {
            let currentDate = new Date();
            let dateString = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            let dateElement = newWindow.document.querySelector('.date');
            if (dateElement) {
                dateElement.innerText = "Date: " + dateString;
            }

            currentDate.setDate(currentDate.getDate() + 30);
            let validUntilString = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            let validUntilElement = newWindow.document.querySelector('.validUnitl');
            if (validUntilElement) {
                validUntilElement.innerText = "Valid Until: " + validUntilString;
            }

            let clientsNameElement = newWindow.document.querySelector('.clientsName');
            if (clientsNameElement) {
                clientsNameElement.innerText = clientName;
            }

            let serviceAddressElement = newWindow.document.querySelector('.serviceAddress');
            if (serviceAddressElement) {
                serviceAddressElement.innerText = clientAddress;
            }

        });
    }


  });
});

