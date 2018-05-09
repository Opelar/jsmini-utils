/*
完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
例如，输入 emoji.png，返回 .png。
*/

function extname(filename = "") {
	return "." + filename.split(".")[1]
}

console.log(extname("emoji.png"));