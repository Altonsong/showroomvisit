
//=======================================================
//根据卫生间数量，显示卫生间sections
function showHideSections() {
  var selectedValue = document.querySelector('input[name="bathNumber"]:checked').value;
  var bath1Section = document.querySelector('.bath1SectionBox');
  var bath2Section = document.querySelector('.bath2SectionBox');
  var bath3Section = document.querySelector('.bath3SectionBox');

  if (selectedValue === '1') {
      bath1Section.style.display = 'block';
      bath2Section.style.display = 'none';
      bath3Section.style.display = 'none';
  } else if (selectedValue === '2') {
      bath1Section.style.display = 'block';
      bath2Section.style.display = 'block';
      bath3Section.style.display = 'none';
  } else if (selectedValue === '3') {
      bath1Section.style.display = 'block';
      bath2Section.style.display = 'block';
      bath3Section.style.display = 'block';
  }
} 

//==================================================
// 隐藏根据选择exclude的项目

// 获取复选框和要控制显示隐藏的其他 div 元素
const kitchenExcludeCheckbox = document.getElementById('kitchenExclude');
const kitchenLogoRow = document.querySelector('.kitchenLogoRow');
const otherDivs = document.querySelectorAll('.kitchenExclude');

// 添加事件监听器，监视复选框状态的变化
kitchenExcludeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // 当复选框被选中时，只显示 kitchenLogoRow，隐藏其他 div 元素
        kitchenLogoRow.style.display = 'flex';
        otherDivs.forEach(function(div) {
            div.style.display = 'none';
        });
    } else {
        // 当复选框取消选中时，显示其他 div 元素
        kitchenLogoRow.style.display = 'flex';
        otherDivs.forEach(function(div) {
            div.style.display = 'grid';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const bath1ExcludeCheckbox = document.getElementById('bath1Exclude');
  const bath1LogoRow = document.querySelector('.bath1LogoRow');
  const otherBath1Divs = document.querySelectorAll('.bath1Exclude');

  // 添加事件监听器，监视复选框状态的变化
  bath1ExcludeCheckbox.addEventListener('change', function() {
      if (this.checked) {
          // 当复选框被选中时，只显示 bath1LogoRow，隐藏其他 div 元素
          bath1LogoRow.style.display = 'flex';
          otherBath1Divs.forEach(function(div) {
              div.style.display = 'none';
          });
      } else {
          // 当复选框取消选中时，显示其他 div 元素
          bath1LogoRow.style.display = 'flex';
          otherBath1Divs.forEach(function(div) {
              div.style.display = 'grid';
          });
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const bath2ExcludeCheckbox = document.getElementById('bath2Exclude');
  const bath2LogoRow = document.querySelector('.bath2LogoRow');
  const otherbath2Divs = document.querySelectorAll('.bath2Exclude');

  // 添加事件监听器，监视复选框状态的变化
  bath2ExcludeCheckbox.addEventListener('change', function() {
      if (this.checked) {
          // 当复选框被选中时，只显示 bath2LogoRow，隐藏其他 div 元素
          bath2LogoRow.style.display = 'flex';
          otherbath2Divs.forEach(function(div) {
              div.style.display = 'none';
          });
      } else {
          // 当复选框取消选中时，显示其他 div 元素
          bath2LogoRow.style.display = 'flex';
          otherbath2Divs.forEach(function(div) {
              div.style.display = 'grid';
          });
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const bath3ExcludeCheckbox = document.getElementById('bath3Exclude');
  const bath3LogoRow = document.querySelector('.bath3LogoRow');
  const otherbath3Divs = document.querySelectorAll('.bath3Exclude');

  // 添加事件监听器，监视复选框状态的变化
  bath3ExcludeCheckbox.addEventListener('change', function() {
      if (this.checked) {
          // 当复选框被选中时，只显示 bath3LogoRow，隐藏其他 div 元素
          bath3LogoRow.style.display = 'flex';
          otherbath3Divs.forEach(function(div) {
              div.style.display = 'none';
          });
      } else {
          // 当复选框取消选中时，显示其他 div 元素
          bath3LogoRow.style.display = 'flex';
          otherbath3Divs.forEach(function(div) {
              div.style.display = 'grid';
          });
      }
  });
});

// 获取复选框和要控制显示隐藏的其他 div 元素
const floorExcludeCheckbox = document.getElementById('floorExclude');
const floorLogoRow = document.querySelector('.floorLogoRow');
const otherFloorDivs = document.querySelectorAll('.floorExclude');

// 添加事件监听器，监视复选框状态的变化
floorExcludeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // 当复选框被选中时，只显示 kitchenLogoRow，隐藏其他 div 元素
        floorLogoRow.style.display = 'flex';
        otherFloorDivs.forEach(function(div) {
            div.style.display = 'none';
        });
    } else {
        // 当复选框取消选中时，显示其他 div 元素
        floorLogoRow.style.display = 'flex';
        otherFloorDivs.forEach(function(div) {
            div.style.display = 'grid';
        });
    }
});

// 获取复选框和要控制显示隐藏的其他 div 元素
const paintExcludeCheckbox = document.getElementById('paintExclude');
const paintLogoRow = document.querySelector('.paintLogoRow');
const otherPaintDivs = document.querySelectorAll('.paintExclude');

// 添加事件监听器，监视复选框状态的变化
paintExcludeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // 当复选框被选中时，只显示 kitchenLogoRow，隐藏其他 div 元素
        paintLogoRow.style.display = 'flex';
        otherPaintDivs.forEach(function(div) {
            div.style.display = 'none';
        });
    } else {
        // 当复选框取消选中时，显示其他 div 元素
        paintLogoRow.style.display = 'flex';
        otherPaintDivs.forEach(function(div) {
            div.style.display = 'grid';
        });
    }
});
//==================================================
