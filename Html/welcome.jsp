<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<h1>welcome, </h1>

<%
	//jsp 파일 안에서 자바 코드 적을 때
	String id = request.getParameter("id");
	String pass = request.getParameter("pass");
	out.println(id); // browser 에 출력
	out.println(pass); //
%>

<br>
<a href="formtest.html">back</a>