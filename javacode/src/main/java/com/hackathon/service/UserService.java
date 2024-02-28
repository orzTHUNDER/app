package com.hackathon.service;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hackathon.User;
import com.hackathon.customexception.EmptyFieldsException;
import com.hackathon.customexception.InvalidDataException;
import com.hackathon.customexception.UserAlreadyExists;
import com.hackathon.repository.UserRepository;

@Service
public class UserService {
	
	 @Autowired
	    private UserRepository userRepository;

	    public void registerUser(User user) {
	    	try {
	            validateUser(user);
	            if (userExists(user)) {
	                throw new UserAlreadyExists("User already exists");
	            }
	    	userRepository.save(user);
	    }
	    	 catch (ConstraintViolationException e) {
	             throw new InvalidDataException("Invalid data: " + e.getMessage());
	         } catch (EmptyFieldsException e) {
	             throw new EmptyFieldsException("Empty fields: " + e.getMessage());
	         }
	    }
	    
	    private boolean userExists(User user) {
	        return userRepository.existsByEmail(user.getEmail());
	    }
	    
	    private void validateUser(User user) {
	        if (user == null) {
	            throw new EmptyFieldsException("User data is empty");
	        }
	        if (user.getUserType() == null || user.getUserType().isEmpty()) {
//	            throw new EmptyFieldsException("User type is empty");
	        
	        }
	        // Add more validation as needed
	        if (user.getUserName() == null || user.getUserName().isEmpty()) {
	            throw new EmptyFieldsException("Username is empty");
	        }
	        if (user.getEmail() == null || user.getEmail().isEmpty()) {
	            throw new EmptyFieldsException("User Email is empty");
	        }
	        if (user.getPassword() == null || user.getPassword().isEmpty()) {
	            throw new EmptyFieldsException("User Password is empty");
	        }
	        
	    }

}
