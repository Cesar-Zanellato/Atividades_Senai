package com.senai.back.saep.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;


import org.springframework.security.config.Customizer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    
    

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(request ->
                request
                       .requestMatchers("/professores")
                       .permitAll()
                       .requestMatchers("/atividades")
                       .permitAll()
                       .requestMatchers("/turmas")
                       .permitAll()

                       

                       .anyRequest()
                       .authenticated()
                       )
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}