package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.EspecieRepository;
import br.com.gdsdev.grandscia.domain.model.Especie;


@Service
public class EspecieService extends GumgaService<Especie, Long> {

	private final EspecieRepository repository;

	@Autowired
	public EspecieService(EspecieRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
