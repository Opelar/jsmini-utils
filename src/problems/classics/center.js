/*

有一个 div#wrapper 元素，高、宽度都未知。
它其中有一个宽高都为 100px 的 div#box 元素，
请你完成 CSS，使得 div#box 在 div#wrapper 内水平、垂直方向居中。

（本题来源：360 前端笔试题）

*/

const html = `
	<div id='wrapper'>
	  <div id='box'></div>
	</div>
`;

const styleCSS = `
	#box {
	  width: 100px;
	  height: 100px;
	}
`;