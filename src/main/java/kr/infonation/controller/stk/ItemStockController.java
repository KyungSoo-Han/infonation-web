package kr.infonation.controller.stk;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/stk")
public class ItemStockController {

    @GetMapping("/item_stock")
    public String item_stock(){
        return "/stk/item_stock";
    }
}
