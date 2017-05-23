package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.CategoriaRepository;
import br.com.gdsdev.grandscia.domain.model.Categoria;


@Service
public class CategoriaService extends GumgaService<Categoria, Long> {

	private final CategoriaRepository repository;

	@Autowired
	public CategoriaService(CategoriaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
