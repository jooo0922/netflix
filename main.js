'use strict';

// 일단 tab icon/ tap content 3개씩 가져온 거야. 3개 이상 가져올땐 querySelectorAll()
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
//e는 이벤트 파라미터(parameter), 즉 click을 받는거
function selectItem(e){
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border'); // 'this' 개념은 좀 더 찾아보자ㅠ 뭔지 모르겠음...
    // Grab content item from DOM
    console.log(this.id); 
    /* 
    item을 click하면 해당 파라미터(item)의 id값(tab-x)을 가져올 수 있음.
    이거를 가져와서 string으로 활용하면 'tab-x-content'라는 tab content item들의 id값을 만들 수 있음
    콘솔창으로 한번 확인해봐라
    따라서 여기에다가 show를 add 해서 display: block을 적용해주는거지. 한마디로 트릭, 잔머리ㅋㅋ
    */
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    /* 
    위에 const tabContentItems 랑은 다른 const 변수임.
    클릭한 파라미터, 즉 this.id값으로 tab-content-item태그들의 id를 완성해서 그 값을 넣기위해 만든 변수임. 
    */

    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
/*
tabItems라는 array 안에 들어있는 모든 tab-item들에 대해서 ()안에 함수를 각각 실행시켜 주는거!
여기서 'item'은 tabItems 배열안에 들어있는 각각의 element에 대한 parameter를 임의로 이름지은거 같은데?
=>는 내 생각에는 
tabItem.forEach(function(item){
    item.addEventListener('click', selectItem)
})
결국 forEach함수의 파라미터 안에 또 함수를 넣어서 표기하는 거를 
화살표로 간단하게 표현한거 같음. '=>' = 'function'
*/