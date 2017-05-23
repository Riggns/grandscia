package br.com.gdsdev.grandscia.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.ItemVendaRepository;
import br.com.gdsdev.grandscia.domain.model.ItemVenda;


@Service
public class ItemVendaService extends GumgaService<ItemVenda, Long> {

	private final ItemVendaRepository repository;

	@Autowired
	public ItemVendaService(ItemVendaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
