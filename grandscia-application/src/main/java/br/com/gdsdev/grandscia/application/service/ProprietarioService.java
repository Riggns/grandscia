package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.ProprietarioRepository;
import br.com.gdsdev.grandscia.domain.model.Proprietario;


@Service
public class ProprietarioService extends GumgaService<Proprietario, Long> {

	private final ProprietarioRepository repository;

	@Autowired
	public ProprietarioService(ProprietarioRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
