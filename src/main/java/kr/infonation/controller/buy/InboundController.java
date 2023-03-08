package kr.infonation.controller.buy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/inbound")
public class InboundController {

    @GetMapping("/inbound_input")
    public String inbound_input(){
        return "/inbound/inbound_input";
    }
    @GetMapping("/inbound_list")
    public String inbound_list(){
        return "/inbound/inbound_list";
    }
}
