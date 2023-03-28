package kr.infonation.controller.mst.biz;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mst/biz")
public class BizController {

    @GetMapping
    public String biz(){
        return "/mst/biz/biz";
    }
}
