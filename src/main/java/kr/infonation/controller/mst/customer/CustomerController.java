package kr.infonation.controller.mst.customer;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mst/customer")
public class CustomerController {

    @GetMapping
    public String customer(){
            return "/mst/customer";
    }

    @GetMapping("/supplier")
    public String supplier(){return "/mst/supplier";}
    @GetMapping("/destination")
    public String destination(){return "/mst/destination";}
}
