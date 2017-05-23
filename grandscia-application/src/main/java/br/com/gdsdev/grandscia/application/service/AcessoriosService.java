package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.AcessoriosRepository;
import br.com.gdsdev.grandscia.domain.model.Acessorios;

import br.com.gdsdev.grandscia.domain.model.Veiculo;

@Service
public class AcessoriosService extends GumgaService<Acessorios, Long> {

	private final AcessoriosRepository repository;

	@Autowired
	public AcessoriosService(AcessoriosRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Acessorios loadAcessoriosFat(Long id) {
		Acessorios obj = view(id);	
		
		Hibernate.initialize(obj.getVeiculo());
		
		
		return obj;
	}
}
