package kr.infonation.controller.mst.item;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mst/item")
public class ItemController {

    @GetMapping
    public String item(){
        return "/mst/item/item";
    }
}
