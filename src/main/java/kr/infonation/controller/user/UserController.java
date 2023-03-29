package kr.infonation.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @GetMapping("/loginForm")
    public String loginForm(){
        return "/user/user";
    }
    @GetMapping("/createUser")
    public String createUser(){
        return "/user/createUser";
    }
}
