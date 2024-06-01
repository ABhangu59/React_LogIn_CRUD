package com.abhangu59.fullstack_backend.controller;
import com.abhangu59.fullstack_backend.exception.UserNotFoundException;
import com.abhangu59.fullstack_backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.abhangu59.fullstack_backend.repository.UserRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") // This connects to the React App
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser)
    {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    Iterable<User> getAllUsers()  {
        return userRepository.findAll();
    }

    @GetMapping("user/{id}")
    // So this basically finds the ID of what is entered. If wrong -> it will then go to exceptions.
    User getUserById(@PathVariable long id)
    {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id)); // Custom made exception handling
    }

    @PutMapping("/user/{id}") // forces the mapping.
    User updateUser(@RequestBody User newUser, @PathVariable long id) // Request Body is the Json.
    {
        return userRepository.findById(id)
                .map(user -> { // Mapping the user to the DB.
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setUsername(newUser.getUsername());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("user/{id}") // Maps to delete the user specified.
    String deleteUser(@PathVariable long id)
    {
        if(!userRepository.existsById(id))
            {throw new UserNotFoundException(id);}
        userRepository.deleteById(id);
        return "User with ID: " + id + " was deleted";
    }
}
