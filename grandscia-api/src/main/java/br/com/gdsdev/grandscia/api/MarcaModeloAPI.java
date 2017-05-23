package br.com.gdsdev.grandscia.api;

import br.com.gdsdev.grandscia.application.service.MarcaModeloService;
import br.com.gdsdev.grandscia.domain.model.MarcaModelo;
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
@RequestMapping("/api/marcamodelo")
public class MarcaModeloAPI extends GumgaAPI<MarcaModelo, Long> {


    @Autowired
    public MarcaModeloAPI(GumgaService<MarcaModelo, Long> service) {
        super(service);
    }


}
