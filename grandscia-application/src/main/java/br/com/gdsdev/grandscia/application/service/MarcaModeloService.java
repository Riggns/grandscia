package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.MarcaModeloRepository;
import br.com.gdsdev.grandscia.domain.model.MarcaModelo;


@Service
public class MarcaModeloService extends GumgaService<MarcaModelo, Long> {

	private final MarcaModeloRepository repository;

	@Autowired
	public MarcaModeloService(MarcaModeloRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
