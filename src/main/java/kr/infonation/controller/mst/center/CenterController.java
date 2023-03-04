package kr.infonation.controller.mst.center;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mst/center")
public class CenterController {

    @GetMapping
    public String center(){
        return "/mst/center/center";
    }
}
