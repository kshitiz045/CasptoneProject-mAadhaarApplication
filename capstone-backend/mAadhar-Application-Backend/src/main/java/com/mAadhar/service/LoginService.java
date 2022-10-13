package com.mAadhar.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mAadhar.bean.Login;
import com.mAadhar.repository.LoginRepository;

@Service("LoginService")
public class LoginService {
	@Autowired
	LoginRepository loginRepository;
	public String signIn(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if(result.isPresent()) {
					Login ll = result.get();
					if(ll.getPassword().equals(login.getPassword())) {		
						
						if(login.getTypeOfUser().equals("admin")) {
							return "Admin sucessfully login";
						}else if(login.getTypeOfUser().equals("user")){
							return "User successfully login";
						}else {
							return "Invalid details";
						}					
					}else {
						return "InValid password";
					}
		}else {
			return "InValid emailId";
		}		
	}
//	public String signUp(Login login) {
//		Optional<Login> result = loginRepository.findById(login.getEmailid());
//		if(result.isPresent()) {
//					return "Email Id alreay exists";
//		}else {
//			Login ll = result.get();
////			if(ll.getTypeOfUser().equals("admin")) {
////				return "You can't create admin account";
////			}else {
////				loginRepository.save(login);
////				return "Account created successfully";
////			}
//			if(ll.getPassword().equals(login.getPassword())) {		
//				
//				if(login.getTypeOfUser().equals(ll.getTypeOfUser())) {
//					return "can not create account";
//				}else {
//					loginRepository.save(login);
//					return "account created";
//				}					
//			}else {
//				return "InValid password";
//			}
//			
//		}	
//	}
public String signUp(Login log) {
		
		Optional<Login> op = loginRepository.findById(log.getEmailid());
		if(op.isPresent()) {
			return "User id must be unique , pls try again";
		}
		else if(log.getTypeOfUser().equals("admin")){
			return "create user account only , not admin";
		}
			else {
		
			loginRepository.save(log);				// insert new records
				return "User registered successfully";
		}
	}
}