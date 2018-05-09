/*
现在有很多只猫，都很肥：

const cats = [
  { name: 'Tom', weight: 300 },
  { name: 'Lucy', weight: 400 },
  { name: 'Lily', weight: 700 },
  { name: 'Jerry', weight: 600 },
  ...
]
现在你需要把它们按照由胖到瘦的顺序把它们渲染到 id 为 cats-list 的 div 元素当中：

<div id="cat-list">
  <div class='cat'>
    <span class='cat-name'>Lily</span>
    <span class='cat-weight'>700</span>
  </div>
  <div class='cat'>
    <span class='cat-name'>Jerry</span>
    <span class='cat-weight'>600</span>
  </div>
  <div class='cat'>
    <span class='cat-name'>Lucy</span>
    <span class='cat-weight'>400</span>
  </div>
  <div class='cat'>
    <span class='cat-name'>Tom</span>
    <span class='cat-weight'>300</span>
  </div>
  ...
</div>
完成 renderFatCats 函数，接受一个 cats 数组作为参数，然后它会往 div#cats-list 元素内渲染类似以上的结果。
注意类名需要保持一致；另外renderFatCats 可能会被多次调用，注意清空上一次渲染的数据。

你可以使用 jQuery、React.js 等方式来完成。

（你不需要调用 renderFatCats）。

*/

const $catsList = $("#cats-list")

const renderFatCats = (cats) => {
  if (!Array.isArray(cats)) return;
  $catsList.children().remove();

  cats.sort((a, b) => b.weight - a.weight).map((item, index) => {
    const $item = `
      <div class='cat'>
        <span class='cat-name'>${item.name}</span>
        <span class='cat-weight'>${item.weight}</span>
      </div>
    `;
    $catsList.append($($item));
  })
}


const cats = [
  { name: 'Tom', weight: 300 },
  { name: 'Lucy', weight: 400 },
  { name: 'Lily', weight: 700 },
  { name: 'Jerry', weight: 600 }
]

renderFatCats(cats);