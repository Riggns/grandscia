package br.com.gdsdev.grandscia.application.service;

import br.com.gdsdev.grandscia.application.repository.VeiculoRepository;
import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gdsdev.grandscia.application.repository.VendaRepository;
import br.com.gdsdev.grandscia.domain.model.Venda;

import br.com.gdsdev.grandscia.domain.model.ItemVenda;
import br.com.gdsdev.grandscia.domain.model.Veiculo;

@Service
public class VendaService extends GumgaService<Venda, Long> {

    private final VendaRepository repository;

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Autowired
    public VendaService(VendaRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Transactional
    public Venda loadVendaFat(Long id) {
        Venda obj = view(id);

        Hibernate.initialize(obj.getItens());

        return obj;
    }
    
    @Override
    public void afterSave(Venda entity) {
        for (ItemVenda item : entity.getItens()) {
            if (item.getVeiculo().getId() == null) {
                continue;
            } 
            Veiculo veiculo = veiculoRepository.findOne(item.getVeiculo().getId());
            veiculo.setVendido("Sim");
        }
    }
    
}
