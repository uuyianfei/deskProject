$(document).ready(function() {
	 var randomNumber = Math.floor(Math.random() * 10000); // 生成一个四位数的随机数  
	 $('#code').text(randomNumber); // 将随机数插入到<span id="code"></span>元素中  
	
	$('#myForm').validate({
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			},
			subject: 'required',
			message: 'required',
			code: 'required'
		},
		messages: {
			name: 'Please enter your name',
			email: {
				required: 'Please enter your email address',
				email: 'Please enter a valid email address'
			},
			subject: 'Please enter a theme',
			message: 'Please enter a message',
			code: 'Please enter the code'
		},
		submitHandler: function(form) {
			event.preventDefault(); // 阻止表单默认提交行为

			var name = $('input[name="name"]').val();
			var email = $('input[name="email"]').val();
			var subject = $('input[name="subject"]').val();
			var message = $('textarea[name="message"]').val();
			var code = $('input[name="code"]').val();
			
			if(code !== $('#code').text()){
				$.message({type:'error',content:"error code"});
				return
			}
			
			// 构造表单数据对象
			var formData = {
				name: name,
				email: email,
				subject: subject,
				message: message,
				code: code
			};
			// 发送POST请求
			// const url = 'http://localhost:3000/sendEmail'
			const url = 'https://api.nistac.de/sendEmail'
			$.confirm('确定提交留言吗?','提示信息',{
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
						define:function(){
							$.ajax({
								// 3.79.3.6
								url: url,
								type: 'POST',
								data: formData,
								success: function(response) {
									$.message({type:'success',content:"发送成功"}); // 输出：{ code: 200, data: 'Send Success!!!' }
								},
								error: function(error) {
									$.message({type:'error',content:"发送失败"});
								}
							});
						},cancel:function(){
							$.message({content:'取消发送',time:2000})
						}
			})	
		}
	});
});