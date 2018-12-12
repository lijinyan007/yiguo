//上传头像
window.onload = function() {
	var filebtn = document.getElementById('btn');
	//按钮发生变化
	filebtn.onchange = function() {
		var file = this.files[0];
		//在给定从中读取数据的 File 的情况下创建一个新 FileReader
		var fs = new FileReader();
		//FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL
		fs.readAsDataURL(file);
		fs.onloadend = function() {
			document.getElementsByClassName('myimg')[0].src = fs.result;
		}
	}
}