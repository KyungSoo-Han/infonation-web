package kr.infonation.controller.outbound;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/outbound")
public class OutboundController {

    @GetMapping("/outbound_input")
    public String outbound_input(){
        return "/outbound/outbound_input";
    }
    @GetMapping("/outbound_list")
    public String outbound_list(){
        return "/outbound/outbound_list";
    }
}
