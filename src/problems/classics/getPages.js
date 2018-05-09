/*
数据的分页在我们的业务当中非常常见，例如 ScriptOJ 的问题列表就有分页。

完成分页函数 getPages，接收两个参数：

getPages(total, itemsPerPage)
	total： 表示总共有多少条数据
	itemsPerPage：表示每页有多少条数据

getPages(total, itemsPerPage) 会返回一个数字告诉我们需要有多少页数据。
例如，总共 101 条数据，每页有 10 条，就需要 11 页，那么就返回 11。

itemsPerPage 为 0 的时候返回 0。

你只需要完成 getPages 函数。
*/

const getPages = (total, itemsPerPage) => {
	if (itemsPerPage === 0) return 0;
	return Math.ceil(total / itemsPerPage)
};

console.log(getPages(8, 10));
console.log(getPages(8000, 10));
console.log(getPages(8000, 0));
