package br.com.gdsdev.grandscia.domain.model;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import io.gumga.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Venda")
@Audited
@Entity
@Table(name = "Venda")
public class Venda extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "cliente")
	private String cliente;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ItemVenda> itens;

	public Venda() {
	}

	public String getCliente() {
		return this.cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}

	public List<ItemVenda> getItens() {
		return this.itens;
	}
	public void setItens(List<ItemVenda> itens) {
		this.itens = itens;
	}
}