package com.abhangu59.fullstack_backend.repository;

import com.abhangu59.fullstack_backend.model.User;

import jakarta.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long>
{

}
