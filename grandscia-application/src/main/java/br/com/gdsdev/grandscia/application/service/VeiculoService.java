package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.VeiculoRepository;
import br.com.gdsdev.grandscia.domain.model.Veiculo;


@Service
public class VeiculoService extends GumgaService<Veiculo, Long> {

	private final VeiculoRepository repository;

	@Autowired
	public VeiculoService(VeiculoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
