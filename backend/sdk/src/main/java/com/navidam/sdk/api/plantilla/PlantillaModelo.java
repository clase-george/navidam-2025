package com.navidam.sdk.api.plantilla;

import java.time.format.DateTimeFormatter;

public class PlantillaModelo {

	private String nombre;
	private String apellido;
	private String curso;
	private String centro;
	private String tipo_postal;
	private String mensaje_personalizado;
	private String emisor;
	private String email;
	private String fecha;
	private static final DateTimeFormatter FMT_FECHA = DateTimeFormatter.ofPattern("dd/MM/yyyy");

	public PlantillaModelo(String nombre, String apellido, String curso, String centro, String tipo_postal,
			String mensaje_personalizado, String emisor, String email) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.curso = curso;
		this.centro = centro;
		this.tipo_postal = tipo_postal;
		this.mensaje_personalizado = mensaje_personalizado;
		this.emisor = emisor;
		this.email = email;
		this.fecha = java.time.LocalDate.now().format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy"));
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public String getCentro() {
		return centro;
	}

	public void setCentro(String centro) {
		this.centro = centro;
	}

	public String getTipo_postal() {
		return tipo_postal;
	}

	public void setTipo_postal(String tipo_postal) {
		this.tipo_postal = tipo_postal;
	}

	public String getMensaje_personalizado() {
		return mensaje_personalizado;
	}

	public void setMensaje_personalizado(String mensaje_personalizado) {
		this.mensaje_personalizado = mensaje_personalizado;
	}

	public String getEmisor() {
		return emisor;
	}

	public void setEmisor(String emisor) {
		this.emisor = emisor;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
