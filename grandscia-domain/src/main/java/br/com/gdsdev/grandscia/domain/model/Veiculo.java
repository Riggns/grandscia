package br.com.gdsdev.grandscia.domain.model;

import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESS�RIOS
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Veiculo")
@Audited
@Entity
@Table(name = "Veiculo")
public class Veiculo extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "renavam")
    private String renavam;
    @Column(name = "placa")
    private String placa;
    @Column(name = "anofabricado")
    private Integer anofabricado;
    @Column(name = "anomodelo")
    private Integer anomodelo;
    @Column(name = "cor")
    private String cor;
    @Column(name = "restricao")
    private String restricao;
    @Column(name = "situacao")
    private String situacao;
    @Column(name = "vendido")
    private String vendido;
    @ManyToOne
    private Proprietario proprietario;
    @ManyToOne
    private MarcaModelo marcamodelo;
    @ManyToOne
    private Categoria categoria;
    @ManyToOne
    private Especie especie;
    @ManyToOne
    private Combustivel combustivel;

    public Veiculo() {
    }

    public String getRenavam() {
        return this.renavam;
    }

    public void setRenavam(String renavam) {
        this.renavam = renavam;
    }

    public String getPlaca() {
        return this.placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public Integer getAnofabricado() {
        return this.anofabricado;
    }

    public void setAnofabricado(Integer anofabricado) {
        this.anofabricado = anofabricado;
    }

    public Integer getAnomodelo() {
        return this.anomodelo;
    }

    public void setAnomodelo(Integer anomodelo) {
        this.anomodelo = anomodelo;
    }

    public String getCor() {
        return this.cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getRestricao() {
        return this.restricao;
    }

    public void setRestricao(String restricao) {
        this.restricao = restricao;
    }

    public String getSituacao() {
        return this.situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Proprietario getProprietario() {
        return this.proprietario;
    }

    public void setProprietario(Proprietario proprietario) {
        this.proprietario = proprietario;
    }

    public MarcaModelo getMarcamodelo() {
        return this.marcamodelo;
    }

    public void setMarcamodelo(MarcaModelo marcamodelo) {
        this.marcamodelo = marcamodelo;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Especie getEspecie() {
        return this.especie;
    }

    public void setEspecie(Especie especie) {
        this.especie = especie;
    }

    public Combustivel getCombustivel() {
        return this.combustivel;
    }

    public void setCombustivel(Combustivel combustivel) {
        this.combustivel = combustivel;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getVendido() {
        return vendido;
    }

    public void setVendido(String vendido) {
        this.vendido = vendido;
    }

}
