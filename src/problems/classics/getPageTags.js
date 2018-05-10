/*
完成 getPageTags 函数，判断你的代码所执行的页面用到了哪些标签。

例如，如果页面中：

	<html>
	  <head></head>
	  <body></body>
	  <script>...</script>
	</html>
那么 getPageTags() 则返回数组 ['html', 'head' 'body', 'script']（顺序不重要）。
*/

const getPageTags = (nodes, result = []) => {
  for (const item of nodes) {
    let childNodes = item.childNodes;
    let localName = item.localName;

    localName && result.push(localName);
    childNodes && getPageTags(childNodes, result);
  }
	// 去重 TODO...
  return result;
};

let res = getPageTags(document.childNodes, []); 
console.log(res);
