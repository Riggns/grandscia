package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.CombustivelRepository;
import br.com.gdsdev.grandscia.domain.model.Combustivel;


@Service
public class CombustivelService extends GumgaService<Combustivel, Long> {

	private final CombustivelRepository repository;

	@Autowired
	public CombustivelService(CombustivelRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
