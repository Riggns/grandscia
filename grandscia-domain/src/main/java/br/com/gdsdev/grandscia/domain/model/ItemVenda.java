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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_ItemVenda")
@Audited
@Entity
@Table(name = "ItemVenda")
public class ItemVenda extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "data")
	private Date data;
    @Column(name = "quantidade")
	private Integer quantidade;
	@ManyToOne
	private Veiculo veiculo;

	public ItemVenda() {
	}

	public Date getData() {
		return this.data;
	}
	public void setData(Date data) {
		this.data = data;
	}

	public Integer getQuantidade() {
		return this.quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Veiculo getVeiculo() {
		return this.veiculo;
	}
	public void setVeiculo(Veiculo veiculo) {
		this.veiculo = veiculo;
	}
}