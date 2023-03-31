<%--
  Created by IntelliJ IDEA.
  User: kyungsoohan
  Date: 2023/03/31
  Time: 11:21 PM
--%>

<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>signup</title>
	<%
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
		String nowDatetime = formatter.format(now);
	%>
	<!-- Google Font: Source Sans Pro -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
	<!-- icheck bootstrap -->
	<link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
	<!-- Theme style -->
	<link rel="stylesheet" href="../../dist/css/adminlte.min.css">
	<style>
		input[type="date"]::-webkit-calendar-picker-indicator {
			display: none;
		}
	</style>
</head>
<body class="hold-transition register-page">
<div class="register-box">
	<div class="register-logo">
		<a href="../../index.jsp"><b>WMS </b>Infonation</a>
	</div>

	<div class="card">
		<div class="card-body register-card-body">
			<p class="login-box-msg">회원 가입</p>

			<form >
				<div class="input-group mb-3">
					<input type="text" id="name" class="form-control" placeholder="Name">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-user"></span>
						</div>
					</div>
				</div>
				<div class="input-group mb-3">
					<input type="email" id="email" class="form-control" placeholder="Email">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-envelope"></span>
						</div>
					</div>
				</div>
				<div class="input-group mb-3">
					<input type="password" id="password" class="form-control" placeholder="Password">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-lock"></span>
						</div>
					</div>
				</div>
				<div class="input-group mb-3">
					<input type="password" id="password2" class="form-control" placeholder="Retype password">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-lock"></span>
						</div>
					</div>
				</div>

				<div class="input-group mb-3">
					<input type="text"id="phoneNo"  class="form-control" placeholder="Phone number">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-phone"></span>
						</div>
					</div>
				</div>

				<div class="input-group mb-3">
					<input type="date" id="birthDate" class="form-control" placeholder="Birth date">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-birthday-cake"></span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-8">
						<div class="icheck-primary">
							<input type="checkbox" id="agreeTerms" name="terms" value="agree">

							<a href="/user/lofinForm" class="text-center">이미 가입되어 있습니다.</a>
						</div>
					</div>
					<!-- /.col -->
					<div class="col-4">
						<button onclick="Save()" class="btn btn-primary btn-block">회원 등록</button>
					</div>
					<!-- /.col -->
				</div>
			</form>

		</div>
		<!-- /.form-box -->
	</div><!-- /.card -->
</div>
<!-- /.register-box -->

<!-- jQuery -->
<script src="../../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../../dist/js/adminlte.min.js"></script>
<script type="text/javascript" src="/user/signup.js?vs=<%=nowDatetime%>"></script>
</body>
</html>