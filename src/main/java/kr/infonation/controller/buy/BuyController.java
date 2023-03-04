package kr.infonation.controller.buy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/buy")
public class BuyController {

    @GetMapping("/buy_order_input")
    public String buy_order_input(){
        return "/buy/buy_order_input";
    }
    @GetMapping("/buy_order_list")
    public String buy_order_list(){
        return "/buy/buy_order_list";
    }
}
