package br.com.gdsdev.grandscia.api;

import br.com.gdsdev.grandscia.application.service.AcessoriosService;
import br.com.gdsdev.grandscia.domain.model.Acessorios;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import io.gumga.presentation.RestResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.validation.BindingResult;
import io.gumga.application.GumgaTempFileService;
import io.gumga.domain.domains.GumgaImage;
import io.gumga.presentation.GumgaAPI;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/acessorios")
public class AcessoriosAPI extends GumgaAPI<Acessorios, Long> {


    @Autowired
    public AcessoriosAPI(GumgaService<Acessorios, Long> service) {
        super(service);
    }

    @Override
    public Acessorios load(@PathVariable Long id) {
        return ((AcessoriosService)service).loadAcessoriosFat(id);
    }


}
