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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Proprietario")
@Audited
@Entity
@Table(name = "Proprietario")
public class Proprietario extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "nome")
    private String nome;
    @Column(name = "cpf")
    private String cpf;
    @Columns(columns = {
        @Column(name = "address_zip_code"),
        @Column(name = "address_premisse_type"),
        @Column(name = "address_premisse"),
        @Column(name = "address_number"),
        @Column(name = "address_information"),
        @Column(name = "address_neighbourhood"),
        @Column(name = "address_localization"),
        @Column(name = "address_state"),
        @Column(name = "address_country"),
        @Column(name = "latitude"),
        @Column(name = "longitude"),
        @Column(name = "formalCode")
    })
    private GumgaAddress address;    

    public Proprietario() {
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public GumgaAddress getAddress() {
        return address;
    }

    public void setAddress(GumgaAddress address) {
        this.address = address;
    }
        
}
